/**
 * Test script to explore Vapi API responses
 * This will help us understand what data structure we need to store
 */

// NOTE: You'll need to get your Vapi Private Key from the Vapi dashboard
// Go to: https://dashboard.vapi.ai -> Settings -> API Keys -> Private Key
// Add it to .env as: VITE_VAPI_PRIVATE_KEY=your_private_key_here

const VAPI_PRIVATE_KEY = process.env.VITE_VAPI_PRIVATE_KEY || "";

if (!VAPI_PRIVATE_KEY) {
  console.error("❌ VAPI_PRIVATE_KEY not found in environment variables");
  console.log("Please add VITE_VAPI_PRIVATE_KEY to your .env file");
  process.exit(1);
}

async function testVapiAPI() {
  console.log("🔍 Testing Vapi API...\n");

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
      throw new Error(`API request failed: ${callsResponse.status} ${callsResponse.statusText}`);
    }

    const calls = await callsResponse.json();
    console.log("✅ Calls fetched successfully!\n");
    console.log("📊 Number of calls:", Array.isArray(calls) ? calls.length : "Not an array");
    console.log("\n🔍 Sample call structure:");
    console.log(JSON.stringify(calls[0], null, 2));

    // Test 2: If we have calls, fetch detailed info for the first one
    if (Array.isArray(calls) && calls.length > 0) {
      const firstCallId = calls[0].id;
      console.log(`\n📞 Fetching detailed info for call: ${firstCallId}...`);
      
      const callDetailResponse = await fetch(`https://api.vapi.ai/call/${firstCallId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${VAPI_PRIVATE_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (callDetailResponse.ok) {
        const callDetail = await callDetailResponse.json();
        console.log("✅ Call detail fetched successfully!\n");
        console.log("🔍 Detailed call structure:");
        console.log(JSON.stringify(callDetail, null, 2));
      }

      // Test 3: Fetch transcript if available
      console.log(`\n📝 Attempting to fetch transcript...`);
      const transcriptResponse = await fetch(`https://api.vapi.ai/call/${firstCallId}/transcript`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${VAPI_PRIVATE_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (transcriptResponse.ok) {
        const transcript = await transcriptResponse.json();
        console.log("✅ Transcript fetched successfully!\n");
        console.log("📝 Transcript structure:");
        console.log(JSON.stringify(transcript, null, 2));
      } else {
        console.log("⚠️ Transcript not available or endpoint different");
      }
    }

    console.log("\n✅ API test completed successfully!");
    console.log("\n💡 Next steps:");
    console.log("1. Review the data structure above");
    console.log("2. Decide which fields to store in the database");
    console.log("3. Create a Supabase table with appropriate columns");

  } catch (error) {
    console.error("❌ Error testing Vapi API:", error);
  }
}

// Run the test
testVapiAPI();
