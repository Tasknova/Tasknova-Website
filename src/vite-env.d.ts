/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_CHAT_WEBHOOK_URL: string
  readonly VITE_VAPI_PUBLIC_KEY?: string
  readonly VITE_VAPI_AGENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
