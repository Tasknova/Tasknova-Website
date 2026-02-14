# Vapi Voice Bot Integration - Setup Guide

This guide will help you integrate Vapi voice bot conversations with your Supabase database.

## Step 1: Get Your Vapi Private API Key

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Navigate to **Settings** → **API Keys**
3. Copy your **Private Key**
4. Add it to your `.env` file:
   ```
   VITE_VAPI_PRIVATE_KEY=your_actual_private_key_here
   ```

## Step 2: Test the Vapi API

Before setting up the database, we need to see what data Vapi returns.

### Option A: Using PowerShell (Recommended for Windows)
```powershell
.\test-vapi.ps1
```

### Option B: Using Node.js directly
```bash
node test-vapi-api.mjs
```

This will:
- ✅ Fetch all your past voice conversations
- ✅ Show you the data structure
- ✅ Display available fields
- ✅ Help you decide what to store in the database

## Step 3: Review the Output

The test script will show you information like:
- **Call ID**: Unique identifier for each conversation
- **Status**: Call status (completed, failed, etc.)
- **Duration**: Length of the conversation
- **Cost**: How much the call cost
- **Timestamps**: When it started/ended
- **Transcript**: The actual conversation text
- **Analysis**: Any AI analysis performed

## Step 4: Create Database Table

Based on the API response, we'll create a Supabase table to store the conversations.

Common fields to store:
```sql
CREATE TABLE voice_conversations (
  id TEXT PRIMARY KEY,
  status TEXT,
  type TEXT,
  duration INTEGER,
  cost NUMERIC(10, 4),
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  transcript JSONB,
  messages JSONB,
  analysis JSONB,
  customer_phone TEXT,
  customer_name TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Step 5: Set Up Webhook (Real-time Updates)

Vapi can send webhooks when calls are completed. You'll need to:

1. Create a Supabase Edge Function to receive webhooks
2. Configure the webhook URL in Vapi dashboard
3. Store new conversations automatically

## Step 6: Import Historical Data

Once the table is created, we'll create a script to:
- Fetch all past conversations from Vapi
- Insert them into your Supabase database
- Handle duplicates gracefully

## Files Created

- `test-vapi-api.mjs` - Node.js script to test the API
- `test-vapi.ps1` - PowerShell wrapper for easy testing
- `VAPI_INTEGRATION.md` - This documentation file

## Next Steps

1. **Run the test script** to see what data is available
2. **Share the output** so we can design the database schema
3. **Create the Supabase table** with appropriate fields
4. **Set up real-time webhook** for new conversations
5. **Import historical data** from past conversations

## Troubleshooting

### "API request failed: 401"
- Your private key is incorrect or expired
- Make sure you copied the Private Key, not the Public Key

### "No calls found"
- You haven't had any voice conversations yet
- Try using the voice agent on your website first

### "Cannot find module"
- Make sure you're in the project root directory
- Node.js must be installed on your system

## Support

If you need help:
1. Check the test script output for specific errors
2. Verify your API key is correct in `.env`
3. Ensure you have active calls in your Vapi dashboard
