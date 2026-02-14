# Vapi Webhook Setup Guide

## ✅ What's Been Completed

1. **Edge Function Created** - `vapi-webhook` deployed to Supabase
2. **Database Ready** - `voice_conversations` table with all required fields
3. **Historical Data Imported** - 40 past conversations already in database

## 🔗 Your Webhook URL

```
https://qdeqpgixanmuzonsoeou.supabase.co/functions/v1/vapi-webhook
```

## 📋 Configure Vapi to Send Webhooks

### Step 1: Go to Vapi Dashboard
1. Open [https://dashboard.vapi.ai](https://dashboard.vapi.ai)
2. Log in to your account

### Step 2: Configure Server URL
1. Go to **Settings** → **Server URLs** (or **Webhooks**)
2. Add your webhook URL: `https://qdeqpgixanmuzonsoeou.supabase.co/functions/v1/vapi-webhook`
3. Select events to send:
   - ✅ **end-of-call-report** (required - this triggers data save)
4. Save the configuration

### Step 3: Test the Webhook (Optional)
You can test if the webhook is working:
1. Make a test call with your voice agent
2. Complete the call
3. Check your database with this query:

```sql
SELECT 
  id,
  customer_name,
  customer_email,
  started_at,
  duration_seconds,
  cost
FROM voice_conversations
ORDER BY started_at DESC
LIMIT 5;
```

## 🎯 What Happens Now

When someone has a conversation with your Vapi voice agent:

1. **During Call**: Vapi handles the conversation
2. **Call Ends**: Vapi sends webhook to your Edge Function
3. **Processing**: 
   - Edge Function receives the call data
   - Extracts customer information (name, email)
   - Calculates call duration
   - Saves everything to database
4. **Result**: Conversation appears in `voice_conversations` table automatically!

## 📊 Data Captured Automatically

Every conversation stores:
- Full transcript
- Message history
- Recording URLs (mono & stereo)
- Customer details (if provided)
- Call metadata (duration, cost, status)
- Timestamps
- Performance metrics

## 🔍 Query Your Conversations

### See recent calls with customer info:
```sql
SELECT 
  customer_name,
  customer_email,
  started_at,
  duration_seconds,
  ended_reason
FROM voice_conversations
WHERE customer_email IS NOT NULL
ORDER BY started_at DESC;
```

### See all calls from today:
```sql
SELECT 
  id,
  status,
  started_at,
  duration_seconds,
  cost
FROM voice_conversations
WHERE DATE(started_at) = CURRENT_DATE
ORDER BY started_at DESC;
```

### Get total conversation stats:
```sql
SELECT 
  COUNT(*) as total_calls,
  SUM(duration_seconds) as total_duration_seconds,
  SUM(cost::numeric) as total_cost,
  COUNT(CASE WHEN customer_email IS NOT NULL THEN 1 END) as calls_with_email
FROM voice_conversations;
```

## ✅ You're All Set!

New conversations will automatically appear in your database as soon as they end. No manual imports needed! 🎉

## 🛠️ Troubleshooting

If conversations aren't appearing:
1. Verify webhook URL is configured in Vapi dashboard
2. Check Edge Function logs in Supabase dashboard
3. Make sure `end-of-call-report` event is enabled
4. Ensure the call actually completed (not just started)

## 📝 Notes

- The webhook only processes `end-of-call-report` events
- Duplicate calls are handled via upsert (won't create duplicates)
- Customer info is extracted from booking tool calls and user messages
- All fields are optional except call ID
