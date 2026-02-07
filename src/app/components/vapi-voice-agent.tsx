import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Mic } from "lucide-react";

type CallState = "idle" | "connecting" | "live";

type CallStartProgressEvent = {
  stage: string;
  status: "started" | "completed" | "failed";
  metadata?: Record<string, unknown>;
};

type CallStartFailedEvent = {
  stage?: string;
  error?: string;
  errorMsg?: string;
  totalDuration?: number;
  context?: Record<string, unknown>;
};

type EventHandler = (...args: unknown[]) => void;

type VapiLike = {
  off?: (event: string, handler: EventHandler) => void;
  removeListener?: (event: string, handler: EventHandler) => void;
};

export function VapiVoiceAgent() {
  const apiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
  const agentId = import.meta.env.VITE_VAPI_AGENT_ID;
  const [status, setStatus] = useState<CallState>("idle");
  const [volume, setVolume] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [callStage, setCallStage] = useState<string | null>(null);
  const [micReady, setMicReady] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);
  const warnedRef = useRef(false);
  const hasConfig = Boolean(apiKey && agentId);

  useEffect(() => {
    if (!hasConfig && !warnedRef.current) {
      warnedRef.current = true;
      console.warn(
        "Vapi voice agent skipped: set VITE_VAPI_PUBLIC_KEY and VITE_VAPI_AGENT_ID to enable it."
      );
    }
  }, [hasConfig]);

  useEffect(() => {
    if (!hasConfig || !apiKey) {
      return;
    }

    const client = new Vapi(apiKey);
    vapiRef.current = client;

    const handleCallStart = () => {
      setStatus("live");
      setErrorMessage(null);
      setCallStage(null);
    };

    const handleCallEnd = () => {
      setStatus("idle");
      setVolume(0);
      setCallStage(null);
    };

    const handleVolume = (value: number) => {
      setVolume(Math.min(Math.max(value, 0), 1));
    };

    const handleError = (error: unknown) => {
      console.error("Vapi voice agent error:", error);
      setStatus("idle");
      setVolume(0);
      setErrorMessage("We couldn't connect. Please try again.");
      setCallStage(null);
    };

    const handleCallStartProgress = (event: CallStartProgressEvent) => {
      setStatus("connecting");
      setCallStage(event.stage);
    };

    const handleCallStartFailed = (event: CallStartFailedEvent) => {
      console.error("Vapi voice agent start failed:", event);
      setStatus("idle");
      setVolume(0);
      setCallStage(null);
      const detail = event.errorMsg || event.error || "Voice channel could not be established.";
      setErrorMessage(detail);
    };

    client.on("call-start", handleCallStart);
    client.on("call-end", handleCallEnd);
    client.on("volume-level", handleVolume);
    client.on("error", handleError);
    client.on("call-start-progress", handleCallStartProgress);
    client.on("call-start-failed", handleCallStartFailed);

    return () => {
      const detachable = client as unknown as VapiLike;
      const detach = (event: string, handler: EventHandler) => {
        if (typeof detachable.off === "function") {
          detachable.off(event, handler);
        } else if (typeof detachable.removeListener === "function") {
          detachable.removeListener(event, handler);
        }
      };

      detach("call-start", handleCallStart);
      detach("call-end", handleCallEnd);
      detach("volume-level", handleVolume);
      detach("error", handleError);
      detach("call-start-progress", handleCallStartProgress);
      detach("call-start-failed", handleCallStartFailed);

      try {
        client.stop?.();
      } catch {
        // swallow cleanup issue
      }

      vapiRef.current = null;
    };
  }, [apiKey, hasConfig]);

  const ensureMicAccess = async () => {
    if (micReady) {
      return true;
    }

    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setErrorMessage("Your browser does not support live audio calls.");
      return false;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setMicReady(true);
      return true;
    } catch (error) {
      console.error("Microphone permission denied:", error);
      setErrorMessage("Microphone access is required to start the voice agent.");
      return false;
    }
  };

  const handleToggle = async () => {
    if (!vapiRef.current || !agentId) {
      return;
    }

    if (status === "live" || status === "connecting") {
      setStatus("idle");
      setErrorMessage(null);
      setVolume(0);
      setCallStage(null);
      try {
        await vapiRef.current.stop();
      } catch (error) {
        console.error("Failed to stop Vapi voice agent:", error);
      }
      return;
    }

    const hasMic = await ensureMicAccess();
    if (!hasMic) {
      setStatus("idle");
      return;
    }

    setStatus("connecting");
    setErrorMessage(null);
    setCallStage(null);

    try {
      await vapiRef.current.start(agentId);
      // call-start event will update the status to "live"
    } catch (error) {
      console.error("Failed to start Vapi voice agent:", error);
      setStatus("idle");
      setErrorMessage("Voice channel is busy. Please try again.");
      setCallStage(null);
    }
  };

  if (!hasConfig) {
    return null;
  }

  const buttonLabel =
    status === "live" ? "End Voice Session" : status === "connecting" ? "Connecting..." : "Talk to Tasknova";

  const helperText = (() => {
    if (status === "live") {
      return "You are live with the Tasknova AI coach.";
    }
    if (status === "connecting") {
      return callStage ? `Connecting (${callStage.replace(/-/g, " ")})...` : "Connecting to the Tasknova voice channel...";
    }
    return "Launch a live conversation with the Tasknova AI team member.";
  })();

  const progressWidth = `${Math.min(Math.max(Math.round(volume * 100), 0), 100)}%`;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex max-w-xs flex-col gap-2 text-slate-900">
      <button
        type="button"
        onClick={handleToggle}
        disabled={status === "connecting"}
        className="group flex items-center gap-3 rounded-3xl bg-slate-900 px-5 py-4 text-white shadow-2xl shadow-slate-900/25 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
        aria-live="polite"
      >
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <span
            className={`absolute inset-0 rounded-2xl border ${
              status === "live" ? "border-emerald-400 animate-ping" : "border-white/25"
            }`}
            aria-hidden="true"
          />
          <Mic className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <span className="flex flex-col text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Voice Agent
          </span>
          <span className="text-lg font-semibold">{buttonLabel}</span>
        </span>
      </button>

      <div className="rounded-3xl border border-slate-100 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-xl backdrop-blur">
        <p>{helperText}</p>
        {status === "live" && (
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 transition-[width] duration-200"
              style={{ width: progressWidth }}
            />
          </div>
        )}
        {errorMessage && <p className="mt-2 text-xs font-medium text-rose-500">{errorMessage}</p>}
      </div>
    </div>
  );
}
