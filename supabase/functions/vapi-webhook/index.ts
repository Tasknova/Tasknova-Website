import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';

/**
 * Vapi Webhook Handler
 * Receives call completion events from Vapi and stores them in the database
 */

interface VapiWebhookPayload {
  message: {
    type: string;
    analysis?: any;
    artifact?: any;
    call?: {
      id: string;
      orgId: string;
      assistantId?: string;
      status: string;
      type?: string;
      startedAt?: string;
      endedAt?: string;
      endedReason?: string;
      cost?: number;
      costBreakdown?: any;
      transcript?: string;
      summary?: string;
      messages?: any[];
      recordingUrl?: string;
      stereoRecordingUrl?: string;
      webCallUrl?: string;
      analysis?: any;
      artifact?: any;
      transport?: any;
      monitor?: any;
    };
  };
}

/**
 * Extract customer information from conversation messages
 */
function extractCustomerInfo(messages: any[], artifact: any) {
  let customerName: string | null = null;
  let customerEmail: string | null = null;
  let customerPhone: string | null = null;

  // Try to find booking information in messages
  if (messages && Array.isArray(messages)) {
    for (const msg of messages) {
      if (msg.role === 'tool' || msg.tool_calls) {
        const content = JSON.stringify(msg);
        
        // Extract email
        const emailMatch = content.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
        if (emailMatch) customerEmail = emailMatch[1];
        
        // Extract name from booking
        const nameMatch = content.match(/"client_name":\s*"([^"]+)"/);
        if (nameMatch) customerName = nameMatch[1];
      }
    }
  }

  // Also check user messages for name/email mentions
  if (messages) {
    for (const msg of messages) {
      if (msg.role === 'user') {
        const text = msg.message || msg.content || '';
        
        // Look for email patterns
        const emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
        if (emailMatch && !customerEmail) customerEmail = emailMatch[1];
        
        // Look for "Name:" pattern
        const nameMatch = text.match(/Name:\s*([^,\n]+)/i);
        if (nameMatch && !customerName) customerName = nameMatch[1].trim();
      }
    }
  }

  return { customerName, customerEmail, customerPhone };
}

/**
 * Calculate call duration from timestamps
 */
function calculateDuration(startedAt?: string, endedAt?: string): number | null {
  if (!startedAt || !endedAt) return null;
  
  const start = new Date(startedAt);
  const end = new Date(endedAt);
  return Math.round((end.getTime() - start.getTime()) / 1000); // Duration in seconds
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
    const payload: VapiWebhookPayload = await req.json();
    
    console.log('🔔 Received Vapi webhook:', payload.message.type);
    
    const call = payload.message.call;
    
    // Log what we received for diagnostic purposes
    if (!call) {
      console.log('⚠️ No call data in payload');
      console.log('Event type:', payload.message.type);
      console.log('Full payload keys:', Object.keys(payload.message || {}));
      return new Response(JSON.stringify({ 
        received: true, 
        eventType: payload.message.type,
        hasCallData: false
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('📞 Call ID:', call.id);
    console.log('📊 Call status:', call.status);
    console.log('🎯 Event type:', payload.message.type);

    // Process end-of-call-report events regardless of status
    // (Vapi sometimes sends these before status changes to "ended")
    if (payload.message.type === 'end-of-call-report') {
      console.log('✅ Processing end-of-call-report event for call:', call.id);
    } else if (call.status !== 'ended') {
      console.log('⏳ Call not ended yet, skipping save. Status:', call.status);
      return new Response(JSON.stringify({ 
        received: true,
        callId: call.id,
        status: call.status,
        eventType: payload.message.type,
        saved: false,
        reason: 'Call not ended yet'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if we have artifact data (sometimes data is in payload.message.artifact, not call.artifact)
    const artifactData = payload.message.artifact || call.artifact;
    const messagesData = call.messages || artifactData?.messages || [];
    const transcriptData = call.transcript || artifactData?.transcript || null;
    
    // Extract timestamps from all possible locations
    const startedAt = call.startedAt || artifactData?.startedAt || null;
    const endedAt = call.endedAt || artifactData?.endedAt || null;
    
    console.log('📦 Has artifact:', !!artifactData);
    console.log('💬 Has messages:', messagesData.length > 0);
    console.log('📝 Has transcript:', !!transcriptData);
    console.log('⏰ Started at:', startedAt);
    console.log('⏱️ Ended at:', endedAt);

    // Extract customer information
    const { customerName, customerEmail, customerPhone } = extractCustomerInfo(
      messagesData,
      artifactData
    );

    // Calculate duration
    const duration = calculateDuration(startedAt, endedAt);
    
    console.log('⏲️ Duration:', duration, 'seconds');

    // Prepare record for database
    const record = {
      id: call.id,
      org_id: call.orgId,
      assistant_id: call.assistantId,
      status: call.status,
      type: call.type,
      started_at: startedAt,
      ended_at: endedAt,
      ended_reason: call.endedReason,
      duration_seconds: duration,
      cost: call.cost,
      cost_breakdown: call.costBreakdown,
      transcript: transcriptData,
      summary: call.summary,
      messages: messagesData.length > 0 ? messagesData : null,
      recording_url: call.recordingUrl || artifactData?.recordingUrl || artifactData?.recording?.mono?.combinedUrl,
      stereo_recording_url: call.stereoRecordingUrl || artifactData?.stereoRecordingUrl || artifactData?.recording?.stereoUrl,
      web_call_url: call.webCallUrl,
      analysis: payload.message.analysis || call.analysis,
      artifact: artifactData,
      transport: call.transport,
      monitor: call.monitor,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      lead_details: customerName || customerEmail 
        ? `Name: ${customerName || 'N/A'}, Email: ${customerEmail || 'N/A'}` 
        : null,
    };

    // Insert or update the record
    const { data, error } = await supabase
      .from('voice_conversations')
      .upsert(record, { onConflict: 'id' });

    if (error) {
      console.error('❌ Database error:', error);
      return new Response(JSON.stringify({ error: 'Database error', details: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('✅ Successfully stored call:', call.id);
    console.log('📧 Customer:', customerName || 'Unknown', '-', customerEmail || 'No email');
    console.log('⏱️ Duration:', duration, 'seconds');
    console.log('💰 Cost: $' + call.cost);

    return new Response(JSON.stringify({ 
      success: true, 
      callId: call.id,
      status: call.status,
      eventType: payload.message.type,
      customerInfo: { customerName, customerEmail },
      saved: true
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
