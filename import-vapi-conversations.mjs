/**
 * Import Vapi Voice Conversations to Supabase
 * This script fetches all past conversations from Vapi and stores them in the database
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse .env file
try {
  const envContent = readFileSync(join(__dirname, '.env'), 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=');
      if (key && value) {
        process.env[key] = value;
      }
    }
  });
} catch (error) {
  console.error('❌ Error loading .env file:', error.message);
  process.exit(1);
}

const VAPI_PRIVATE_KEY = process.env.VITE_VAPI_PRIVATE_KEY || "";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "";

if (!VAPI_PRIVATE_KEY || VAPI_PRIVATE_KEY === "your_private_key_here") {
  console.error("❌ VAPI_PRIVATE_KEY not configured in .env");
  process.exit(1);
}

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Supabase credentials not configured in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Extract customer information from conversation messages
 */
function extractCustomerInfo(messages, artifact) {
  let customerName = null;
  let customerEmail = null;
  let customerPhone = null;

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
function calculateDuration(startedAt, endedAt) {
  if (!startedAt || !endedAt) return null;
  
  const start = new Date(startedAt);
  const end = new Date(endedAt);
  return Math.round((end - start) / 1000); // Duration in seconds
}

/**
 * Fetch all calls from Vapi API
 */
async function fetchVapiCalls() {
  console.log("📞 Fetching calls from Vapi API...\n");
  
  const response = await fetch("https://api.vapi.ai/call", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${VAPI_PRIVATE_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API request failed: ${response.status} ${response.statusText}\n${errorText}`);
  }

  const calls = await response.json();
  console.log(`✅ Found ${calls.length} calls\n`);
  return calls;
}

/**
 * Import a single call to Supabase
 */
async function importCall(call) {
  const { customerName, customerEmail, customerPhone } = extractCustomerInfo(
    call.messages || call.artifact?.messages,
    call.artifact
  );

  const duration = calculateDuration(call.startedAt, call.endedAt);

  const record = {
    id: call.id,
    org_id: call.orgId,
    assistant_id: call.assistantId,
    status: call.status,
    type: call.type,
    started_at: call.startedAt,
    ended_at: call.endedAt,
    ended_reason: call.endedReason,
    duration_seconds: duration,
    cost: call.cost,
    cost_breakdown: call.costBreakdown,
    transcript: call.transcript || call.artifact?.transcript,
    summary: call.summary,
    messages: call.messages || call.artifact?.messages,
    recording_url: call.recordingUrl || call.artifact?.recordingUrl || call.artifact?.recording?.mono?.combinedUrl,
    stereo_recording_url: call.stereoRecordingUrl || call.artifact?.stereoRecordingUrl || call.artifact?.recording?.stereoUrl,
    web_call_url: call.webCallUrl,
    analysis: call.analysis,
    artifact: call.artifact,
    transport: call.transport,
    monitor: call.monitor,
    customer_name: customerName,
    customer_email: customerEmail,
    customer_phone: customerPhone,
    lead_details: customerName || customerEmail ? `Name: ${customerName || 'N/A'}, Email: ${customerEmail || 'N/A'}` : null,
  };

  const { data, error } = await supabase
    .from('voice_conversations')
    .upsert(record, { onConflict: 'id' });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Main import function
 */
async function importVapiConversations() {
  console.log("🚀 Vapi Conversation Import Script");
  console.log("=" .repeat(80) + "\n");

  try {
    // Fetch all calls from Vapi
    const calls = await fetchVapiCalls();

    if (calls.length === 0) {
      console.log("⚠️ No calls found to import.");
      return;
    }

    // Import each call
    console.log("💾 Importing calls to Supabase...\n");
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < calls.length; i++) {
      const call = calls[i];
      try {
        await importCall(call);
        successCount++;
        console.log(`✅ [${i + 1}/${calls.length}] Imported call ${call.id}`);
        
        // Show customer info if available
        const { customerName, customerEmail } = extractCustomerInfo(
          call.messages || call.artifact?.messages,
          call.artifact
        );
        if (customerName || customerEmail) {
          console.log(`   👤 Customer: ${customerName || 'Unknown'} (${customerEmail || 'No email'})`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ [${i + 1}/${calls.length}] Failed to import call ${call.id}:`, error.message);
      }
    }

    console.log("\n" + "=".repeat(80));
    console.log("📊 IMPORT SUMMARY");
    console.log("=".repeat(80));
    console.log(`✅ Successfully imported: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    console.log(`📞 Total calls: ${calls.length}\n`);

    // Show some stats
    const { data: stats } = await supabase
      .from('voice_conversations')
      .select('status, customer_email')
      .not('customer_email', 'is', null);

    if (stats) {
      console.log(`📧 Calls with customer email: ${stats.length}`);
    }

    console.log("\n✅ Import completed successfully!\n");

  } catch (error) {
    console.error("\n❌ Import failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run the import
importVapiConversations();
