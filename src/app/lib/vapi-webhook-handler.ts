import { saveVoiceConversation } from "./api";
import type { VapiCallPayload } from "./vapi-webhook-types";

export async function handleVapiWebhook(payload: VapiCallPayload) {
  return saveVoiceConversation({
    agent_id: payload.agent_id,
    call_id: payload.call_id,
    user_phone: payload.user_phone,
    transcript: payload.transcript,
    summary: payload.summary,
    metadata: payload.metadata,
  });
}
