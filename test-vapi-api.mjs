/**
 * Test script to explore Vapi API responses
 * Run with: npm run test-vapi (after adding your private key to .env)
 */

// Load environment variables from .env file
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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

if (!VAPI_PRIVATE_KEY || VAPI_PRIVATE_KEY === "your_private_key_here") {
  console.error("❌ VAPI_PRIVATE_KEY not configured properly");
  console.log("\n📝 To get your private key:");
  console.log("1. Go to https://dashboard.vapi.ai");
  console.log("2. Navigate to Settings -> API Keys");
  console.log("3. Copy your Private Key");
  console.log("4. Add to .env file as: VITE_VAPI_PRIVATE_KEY=your_actual_key");
  process.exit(1);
}

async function testVapiAPI() {
  console.log("🔍 Testing Vapi API...\n");
  console.log("🔑 Using API key: " + VAPI_PRIVATE_KEY.substring(0, 10) + "..." + "\n");

  try {
    // Test 1: Fetch all calls (conversations)
    console.log("📞 Fetching recent calls...");
    const callsResponse = await fetch("https://api.vapi.ai/call", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${VAPI_PRIVATE_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!callsResponse.ok) {
      const errorText = await callsResponse.text();
      throw new Error(`API request failed: ${callsResponse.status} ${callsResponse.statusText}\n${errorText}`);
    }

    const calls = await callsResponse.json();
    console.log("✅ Calls fetched successfully!\n");
    
    if (!Array.isArray(calls)) {
      console.log("⚠️ Response is not an array. Full response:");
      console.log(JSON.stringify(calls, null, 2));
      return;
    }

    console.log("📊 Total calls found:", calls.length);
    
    if (calls.length === 0) {
      console.log("⚠️ No calls found. Make sure you've had at least one conversation with the voice agent.");
      return;
    }

    console.log("\n" + "=".repeat(80));
    console.log("📋 CALL SUMMARY");
    console.log("=".repeat(80));
    
    // Show summary of all calls
    calls.slice(0, 5).forEach((call, index) => {
      console.log(`\nCall ${index + 1}:`);
      console.log(`  ID: ${call.id}`);
      console.log(`  Status: ${call.status}`);
      console.log(`  Type: ${call.type || 'N/A'}`);
      console.log(`  Started: ${call.startedAt || call.createdAt}`);
      console.log(`  Duration: ${call.duration ? `${call.duration}s` : 'N/A'}`);
      console.log(`  Cost: ${call.cost ? `$${call.cost}` : 'N/A'}`);
    });

    // Test 2: Fetch detailed info for the first call
    const firstCall = calls[0];
    console.log("\n" + "=".repeat(80));
    console.log("🔍 DETAILED CALL STRUCTURE (First Call)");
    console.log("=".repeat(80) + "\n");
    console.log(JSON.stringify(firstCall, null, 2));

    // Test 3: Try to fetch messages/transcript
    console.log("\n" + "=".repeat(80));
    console.log("📝 ATTEMPTING TO FETCH TRANSCRIPT");
    console.log("=".repeat(80) + "\n");
    
    const callId = firstCall.id;
    
    // Try different possible endpoints
    const endpoints = [
      `/call/${callId}/messages`,
      `/call/${callId}/transcript`,
      `/call/${callId}`,
    ];

    for (const endpoint of endpoints) {
      try {
        console.log(`Trying: https://api.vapi.ai${endpoint}`);
        const response = await fetch(`https://api.vapi.ai${endpoint}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${VAPI_PRIVATE_KEY}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ Success! Data from ${endpoint}:`);
          console.log(JSON.stringify(data, null, 2));
          console.log("\n");
        } else {
          console.log(`⚠️ ${response.status}: Not available\n`);
        }
      } catch (error) {
        console.log(`❌ Error: ${error.message}\n`);
      }
    }

    // Summary of what we found
    console.log("\n" + "=".repeat(80));
    console.log("📊 FIELD ANALYSIS");
    console.log("=".repeat(80) + "\n");
    
    const allKeys = new Set();
    calls.slice(0, 10).forEach(call => {
      Object.keys(call).forEach(key => allKeys.add(key));
    });

    console.log("Available fields across calls:");
    Array.from(allKeys).sort().forEach(key => {
      const sampleValue = calls[0][key];
      const valueType = typeof sampleValue;
      const isArray = Array.isArray(sampleValue);
      console.log(`  - ${key}: ${isArray ? 'Array' : valueType}`);
    });

    console.log("\n" + "=".repeat(80));
    console.log("✅ API TEST COMPLETED");
    console.log("=".repeat(80));
    console.log("\n💡 Next steps:");
    console.log("1. Review the fields above to decide what to store");
    console.log("2. Create a Supabase table with appropriate columns");
    console.log("3. Set up a webhook to receive real-time call updates");
    console.log("4. Implement a sync function to import historical calls\n");

  } catch (error) {
    console.error("\n❌ Error testing Vapi API:");
    console.error(error);
    console.log("\n💡 Make sure:");
    console.log("1. Your private key is correct");
    console.log("2. You have active calls in your Vapi dashboard");
    console.log("3. Your API key has the required permissions\n");
  }
}

// Run the test
testVapiAPI();
