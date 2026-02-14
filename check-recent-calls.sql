-- Check for new conversations in the last 30 minutes
SELECT 
  id,
  status,
  started_at,
  ended_at,
  duration_seconds,
  customer_name,
  customer_email,
  LEFT(transcript, 100) as transcript_preview,
  created_at
FROM voice_conversations
WHERE created_at > NOW() - INTERVAL '30 minutes'
ORDER BY created_at DESC;
