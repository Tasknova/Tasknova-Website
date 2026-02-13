export interface VapiCallPayload {
  call_id?: string;
  agent_id?: string;
  user_phone?: string;
  transcript?: string;
  summary?: string;
  metadata?: Record<string, unknown>;
}
