import { supabase } from "./supabase-client";

export async function saveVoiceConversation(payload: {
  agent_id?: string;
  call_id?: string;
  user_phone?: string;
  transcript?: string;
  summary?: string;
  metadata?: Record<string, unknown>;
}) {
  const { data, error } = await supabase
    .from("voice_conversations")
    .insert({
      agent_id: payload.agent_id ?? null,
      call_id: payload.call_id ?? null,
      user_phone: payload.user_phone ?? null,
      transcript: payload.transcript ?? null,
      summary: payload.summary ?? null,
      metadata: payload.metadata ?? null,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function saveChatConversation(payload: {
  agent_id?: string;
  session_id?: string;
  user_id?: string;
  messages?: unknown;
  summary?: string;
  metadata?: Record<string, unknown>;
}) {
  const { data, error } = await supabase
    .from("chat_conversations")
    .insert({
      agent_id: payload.agent_id ?? null,
      session_id: payload.session_id ?? null,
      user_id: payload.user_id ?? null,
      messages: payload.messages ?? null,
      summary: payload.summary ?? null,
      metadata: payload.metadata ?? null,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function submitDemoRequest(payload: {
  name: string;
  email: string;
  company?: string;
  company_website?: string;
  role?: string;
  team_size?: string;
  notes?: string;
  preferred_date?: string;
  preferred_time?: string;
  timezone?: string;
}) {
  const { data, error } = await supabase
    .from("demo_requests")
    .insert({
      name: payload.name,
      email: payload.email,
      company: payload.company ?? null,
      company_website: payload.company_website ?? null,
      role: payload.role ?? null,
      team_size: payload.team_size ?? null,
      notes: payload.notes ?? null,
      preferred_date: payload.preferred_date ?? null,
      preferred_time: payload.preferred_time ?? null,
      timezone: payload.timezone ?? null,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function listJobs() {
  const { data, error } = await supabase
    .from("jobs")
    .select("id, title, location, department, apply_url, description, metadata, created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
