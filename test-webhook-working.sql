-- Run this after making a test call to see if it was saved
SELECT 
  id,
  status,
  started_at,
  ended_at,
  duration_seconds,
  LEFT(transcript, 200) as transcript_preview,
  customer_name,
  customer_email,
  created_at
FROM voice_conversations
WHERE created_at > NOW() - INTERVAL '10 minutes'
ORDER BY created_at DESC
LIMIT 3;
