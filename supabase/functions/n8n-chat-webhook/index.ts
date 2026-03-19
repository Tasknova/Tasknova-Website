import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';

/**
 * N8N Chat Webhook Handler
 * Receives chat completion events from n8n and stores them in the database
 */

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

interface N8nChatWebhookPayload {
  sessionId: string;
  messages: ChatMessage[];
  userId?: string;
  agentId?: string;
  summary?: string;
  metadata?: Record<string, unknown> | null;
  completedAt?: string;
}

function responseHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-webhook-secret',
    'Content-Type': 'application/json',
  };
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders(),
  });
}

function normalizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .map((item) => {
      if (!item || typeof item !== 'object') return null;

      const message = item as Record<string, unknown>;
      const role = typeof message.role === 'string' ? message.role : null;
      const content =
        typeof message.content === 'string'
          ? message.content
          : typeof message.text === 'string'
          ? message.text
          : typeof message.message === 'string'
          ? message.message
          : null;
      const timestamp = typeof message.timestamp === 'string' ? message.timestamp : undefined;

      if (!role || !content) return null;
      if (role !== 'user' && role !== 'assistant' && role !== 'system') return null;

      return {
        role,
        content,
        timestamp,
      } as ChatMessage;
    })
    .filter((msg): msg is ChatMessage => Boolean(msg));
}

Deno.serve(async (req: Request) => {
  // CORS headers for preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: responseHeaders() });
  }

  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    // Optional shared-secret validation for n8n -> webhook calls
    const expectedSecret = Deno.env.get('N8N_CHAT_WEBHOOK_SECRET');
    if (expectedSecret) {
      const providedSecretHeader = req.headers.get('x-webhook-secret');
      const authHeader = req.headers.get('authorization');
      const bearerSecret = authHeader?.toLowerCase().startsWith('bearer ')
        ? authHeader.slice(7)
        : null;
      const providedSecret = providedSecretHeader ?? bearerSecret;

      if (!providedSecret || providedSecret !== expectedSecret) {
        return jsonResponse({ error: 'Unauthorized webhook request', received: false }, 401);
      }
    }

    // Parse webhook payload
    let rawPayload: Record<string, unknown>;
    try {
      rawPayload = await req.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON payload', received: false }, 400);
    }

    const sessionId =
      (typeof rawPayload.sessionId === 'string' ? rawPayload.sessionId : null) ??
      (typeof rawPayload.session_id === 'string' ? rawPayload.session_id : null);
    const messages = normalizeMessages(
      rawPayload.messages ?? rawPayload.chatHistory ?? rawPayload.chat_history,
    );
    const userId =
      (typeof rawPayload.userId === 'string' ? rawPayload.userId : null) ??
      (typeof rawPayload.user_id === 'string' ? rawPayload.user_id : null) ??
      undefined;
    const agentId =
      (typeof rawPayload.agentId === 'string' ? rawPayload.agentId : null) ??
      (typeof rawPayload.agent_id === 'string' ? rawPayload.agent_id : null) ??
      undefined;
    const summary = typeof rawPayload.summary === 'string' ? rawPayload.summary : undefined;
    const completedAt =
      (typeof rawPayload.completedAt === 'string' ? rawPayload.completedAt : null) ??
      (typeof rawPayload.completed_at === 'string' ? rawPayload.completed_at : null) ??
      undefined;
    const metadata =
      rawPayload.metadata && typeof rawPayload.metadata === 'object'
        ? (rawPayload.metadata as Record<string, unknown>)
        : null;

    const payload: N8nChatWebhookPayload = {
      sessionId: sessionId ?? '',
      messages,
      userId,
      agentId,
      summary,
      metadata,
      completedAt,
    };

    console.log('Received n8n chat webhook');
    console.log('Session ID:', payload.sessionId);
    console.log('Message count:', payload.messages?.length || 0);

    // Validate required fields
    if (!payload.sessionId) {
      console.error('Missing sessionId');
      return jsonResponse({ 
        error: 'sessionId is required',
        received: false 
      }, 400);
    }

    if (!payload.messages || !Array.isArray(payload.messages) || payload.messages.length === 0) {
      console.error('Missing or empty messages array');
      return jsonResponse({ 
        error: 'messages array is required and must not be empty',
        received: false 
      }, 400);
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Prepare record for database
    const record = {
      session_id: payload.sessionId,
      agent_id: payload.agentId || 'n8n-chat-assistant',
      user_id: payload.userId || null,
      messages: payload.messages,
      summary: payload.summary || null,
      metadata: payload.completedAt
        ? {
            ...(payload.metadata || {}),
            completedAt: payload.completedAt,
          }
        : payload.metadata || null,
    };

    console.log('Storing chat conversation...');

    // Check if conversation with this session_id already exists
    const { data: existingConversation, error: fetchError } = await supabase
      .from('chat_conversations')
      .select('id')
      .eq('session_id', payload.sessionId)
      .limit(1)
      .maybeSingle();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Error checking for existing conversation:', fetchError);
    }

    let result;
    if (existingConversation) {
      // Update existing conversation
      console.log('Updating existing conversation:', existingConversation.id);
      result = await supabase
        .from('chat_conversations')
        .update({
          messages: payload.messages,
          summary: payload.summary || null,
          metadata: record.metadata,
        })
        .eq('id', existingConversation.id);
    } else {
      // Insert new conversation
      console.log('Creating new conversation');
      result = await supabase
        .from('chat_conversations')
        .insert(record);
    }

    const { data, error } = result;

    if (error) {
      console.error('Database error:', error);
      return jsonResponse({ 
        error: 'Database error', 
        details: error.message,
        received: false 
      }, 500);
    }

    console.log('Successfully stored chat conversation');
    console.log('Session ID:', payload.sessionId);
    console.log('Messages stored:', payload.messages.length);
    console.log('User ID:', payload.userId || 'Anonymous');

    return jsonResponse({ 
      success: true,
      sessionId: payload.sessionId,
      messageCount: payload.messages.length,
      stored: true
    }, 200);

  } catch (error) {
    console.error('Webhook processing error:', error);
    return jsonResponse({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error',
      received: false
    }, 500);
  }
});
