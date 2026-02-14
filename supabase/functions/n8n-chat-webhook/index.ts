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
  metadata?: any;
  completedAt?: string;
}

Deno.serve(async (req: Request) => {
  // CORS headers for preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse webhook payload
    const payload: N8nChatWebhookPayload = await req.json();
    
    console.log('💬 Received n8n chat webhook');
    console.log('📝 Session ID:', payload.sessionId);
    console.log('📊 Message count:', payload.messages?.length || 0);

    // Validate required fields
    if (!payload.sessionId) {
      console.error('❌ Missing sessionId');
      return new Response(JSON.stringify({ 
        error: 'sessionId is required',
        received: false 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!payload.messages || !Array.isArray(payload.messages) || payload.messages.length === 0) {
      console.error('❌ Missing or empty messages array');
      return new Response(JSON.stringify({ 
        error: 'messages array is required and must not be empty',
        received: false 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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
      metadata: payload.metadata || null,
    };

    console.log('💾 Storing chat conversation...');

    // Check if conversation with this session_id already exists
    const { data: existingConversation, error: fetchError } = await supabase
      .from('chat_conversations')
      .select('id')
      .eq('session_id', payload.sessionId)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('❌ Error checking for existing conversation:', fetchError);
    }

    let result;
    if (existingConversation) {
      // Update existing conversation
      console.log('🔄 Updating existing conversation:', existingConversation.id);
      result = await supabase
        .from('chat_conversations')
        .update({
          messages: payload.messages,
          summary: payload.summary || null,
          metadata: payload.metadata || null,
        })
        .eq('id', existingConversation.id);
    } else {
      // Insert new conversation
      console.log('✨ Creating new conversation');
      result = await supabase
        .from('chat_conversations')
        .insert(record);
    }

    const { data, error } = result;

    if (error) {
      console.error('❌ Database error:', error);
      return new Response(JSON.stringify({ 
        error: 'Database error', 
        details: error.message,
        received: false 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('✅ Successfully stored chat conversation');
    console.log('📝 Session ID:', payload.sessionId);
    console.log('💬 Messages stored:', payload.messages.length);
    console.log('👤 User ID:', payload.userId || 'Anonymous');

    return new Response(JSON.stringify({ 
      success: true,
      sessionId: payload.sessionId,
      messageCount: payload.messages.length,
      stored: true
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error',
      received: false
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
