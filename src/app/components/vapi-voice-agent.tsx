import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Mic, MicOff, PhoneOff, X } from "lucide-react";

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

type BookingFormFields = {
  name: string;
  email: string;
  date: string;
  time: string;
};

type BookingSubmissionState = "idle" | "sending" | "sent" | "error";

type VapiVoiceAgentProps = {
  inline?: boolean;
  className?: string;
};

const BOOKING_KEYWORDS = ["book", "schedule", "demo", "meeting", "appointment", "calendar"];
const AFFIRMATIVE_KEYWORDS = [
  "yes",
  "yeah",
  "yep",
  "sure",
  "absolutely",
  "definitely",
  "sounds good",
  "let's do it",
  "please do",
];
const BOOKING_INTENT_TOKENS = ["book", "schedule", "demo", "meeting", "appointment"];
const TEXT_KEYS = ["message", "text", "content", "transcript", "transcription", "value", "response", "body", "delta", "args"];

const createEmptyBookingForm = (): BookingFormFields => ({
  name: "",
  email: "",
  date: "",
  time: "",
});

const toRecord = (value: unknown): Record<string, unknown> | null =>
  typeof value === "object" && value !== null ? (value as Record<string, unknown>) : null;

const containsKeyword = (text: string, keywords: string[]) =>
  Boolean(text) && keywords.some((keyword) => text.includes(keyword.toLowerCase()));

const collectTextSnippets = (value: unknown, depth = 0, acc: string[] = []): string[] => {
  if (depth > 4 || value == null) {
    return acc;
  }
  if (typeof value === "string") {
    acc.push(value);
    return acc;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectTextSnippets(item, depth + 1, acc));
    return acc;
  }
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    for (const key of TEXT_KEYS) {
      if (key in record) {
        collectTextSnippets(record[key], depth + 1, acc);
      }
    }
  }
  return acc;
};

const extractNormalizedText = (payload: unknown): string => {
  const snippets = collectTextSnippets(payload);
  return Array.from(
    new Set(
      snippets
        .map((snippet) => snippet.trim())
        .filter(Boolean)
    )
  )
    .join(" ")
    .toLowerCase();
};

const collectRoleFromRecord = (record: Record<string, unknown> | null): string | undefined => {
  if (!record) {
    return undefined;
  }
  const candidates = [record.role, record.speaker, record.owner, record.source];
  for (const candidate of candidates) {
    if (typeof candidate === "string") {
      return candidate.toLowerCase();
    }
  }
  return undefined;
};

const extractRole = (payload: unknown): string | undefined => {
  const record = toRecord(payload);
  if (!record) {
    return undefined;
  }

  const directRole = collectRoleFromRecord(record);
  if (directRole) {
    return directRole;
  }

  const nestedKeys = ["message", "data", "payload", "source", "metadata", "participant"] as const;
  for (const key of nestedKeys) {
    const nestedRole = collectRoleFromRecord(toRecord(record[key]));
    if (nestedRole) {
      return nestedRole;
    }
  }
  return undefined;
};

const tryParseIntent = (candidate: unknown): string | undefined => {
  if (!candidate) {
    return undefined;
  }
  if (typeof candidate === "string") {
    return candidate.toLowerCase();
  }
  const record = toRecord(candidate);
  if (!record) {
    return undefined;
  }
  if (typeof record.name === "string") {
    return record.name.toLowerCase();
  }
  if (typeof record.intent === "string") {
    return record.intent.toLowerCase();
  }
  if (typeof record.value === "string") {
    return record.value.toLowerCase();
  }
  return undefined;
};

const extractIntentName = (payload: unknown): string | undefined => {
  const record = toRecord(payload);
  if (!record) {
    return undefined;
  }

  const candidates: unknown[] = [
    record.intent,
    (record as { intentName?: unknown }).intentName,
    (record as { detectedIntent?: unknown }).detectedIntent,
    toRecord(record.data)?.intent,
    toRecord(record.data)?.intentName,
    toRecord(record.metadata)?.intent,
    toRecord(record.message)?.intent,
    toRecord(record.payload)?.intent,
    toRecord(record.tool)?.name,
    toRecord((record as { functionCall?: unknown }).functionCall)?.name,
    (record as any).function_call?.name,
  ];

  if (
    typeof record.type === "string" &&
    record.type.toLowerCase().includes("intent") &&
    typeof record.name === "string"
  ) {
    candidates.unshift(record.name);
  }

  for (const candidate of candidates) {
    const parsed = tryParseIntent(candidate);
    if (parsed) {
      return parsed;
    }
  }
  return undefined;
};

const isFinalizedMessage = (payload: unknown): boolean => {
  const record = toRecord(payload);
  if (!record) {
    return true;
  }

  const type = typeof record.type === "string" ? record.type.toLowerCase() : "";
  if (type.includes("partial")) {
    return false;
  }

  const hasPartialFlag = ["partial", "isPartial", "is_partial"].some((key) => record[key] === true);
  if (hasPartialFlag) {
    return false;
  }

  const hasNotFinalFlag = ["isFinal", "is_final", "final"].some((key) => record[key] === false);
  if (hasNotFinalFlag) {
    return false;
  }

  return true;
};

export function VapiVoiceAgent({ inline = false, className }: VapiVoiceAgentProps = {}) {
  const apiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
  const agentId = import.meta.env.VITE_VAPI_AGENT_ID;
  const apiBaseUrl =
    (import.meta.env.VITE_VAPI_BASE_URL as string | undefined)?.trim() || (import.meta.env.DEV ? "/vapi-proxy" : undefined);
  const [status, setStatus] = useState<CallState>("idle");
  const [volume, setVolume] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [callStage, setCallStage] = useState<string | null>(null);
  const [micReady, setMicReady] = useState(false);
  const [micMuted, setMicMuted] = useState(false);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [bookingFormData, setBookingFormData] = useState<BookingFormFields>(() => createEmptyBookingForm());
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});
  const [bookingSubmissionState, setBookingSubmissionState] = useState<BookingSubmissionState>("idle");
  const [bookingFeedback, setBookingFeedback] = useState<string | null>(null);
  const vapiRef = useRef<Vapi | null>(null);
  const warnedRef = useRef(false);
  const bookingNameInputRef = useRef<HTMLInputElement | null>(null);
  const bookingActiveRef = useRef(false);
  const lastAssistantPromptWasBookingRef = useRef(false);
  const statusRef = useRef<CallState>("idle");
  const bookingResetTimeoutRef = useRef<number | null>(null);
  const hasConfig = Boolean(apiKey && agentId);
  const todayISO = new Date().toISOString().split("T")[0];

  const applyMuteState = useCallback((nextMuted: boolean) => {
    setMicMuted(nextMuted);
    try {
      const client = vapiRef.current as unknown as {
        mute?: () => void;
        unmute?: () => void;
        setMicrophoneMuted?: (muted: boolean) => void;
      };
      if (client?.setMicrophoneMuted) client.setMicrophoneMuted(nextMuted);
      else if (nextMuted && client?.mute) client.mute();
      else if (!nextMuted && client?.unmute) client.unmute();
    } catch (error) {
      console.error("Failed to toggle mute:", error);
    }
  }, []);

  useEffect(() => {
    if (!hasConfig && !warnedRef.current) {
      warnedRef.current = true;
      console.warn(
        "Vapi voice agent skipped: set VITE_VAPI_PUBLIC_KEY and VITE_VAPI_AGENT_ID to enable it."
      );
    }
  }, [hasConfig]);

  const resetBookingFlow = useCallback(() => {
    if (bookingResetTimeoutRef.current) {
      window.clearTimeout(bookingResetTimeoutRef.current);
      bookingResetTimeoutRef.current = null;
    }
    bookingActiveRef.current = false;
    lastAssistantPromptWasBookingRef.current = false;
    setBookingFormVisible(false);
    setBookingFormData(createEmptyBookingForm());
    setBookingErrors({});
    setBookingSubmissionState("idle");
    setBookingFeedback(null);
    applyMuteState(false);
  }, [applyMuteState]);

  const openBookingForm = useCallback(() => {
    if (bookingResetTimeoutRef.current) {
      window.clearTimeout(bookingResetTimeoutRef.current);
      bookingResetTimeoutRef.current = null;
    }
    bookingActiveRef.current = true;
    setBookingFormVisible(true);
    setBookingErrors({});
    setBookingSubmissionState("idle");
    setBookingFeedback(null);
    applyMuteState(true);
  }, [applyMuteState]);

  const handleBookingDismiss = useCallback(() => {
    if (bookingResetTimeoutRef.current) {
      window.clearTimeout(bookingResetTimeoutRef.current);
      bookingResetTimeoutRef.current = null;
    }
    bookingActiveRef.current = false;
    setBookingFormVisible(false);
    setBookingSubmissionState("idle");
    setBookingFeedback(null);
    if (statusRef.current === "live") {
      applyMuteState(false);
    }
  }, [applyMuteState]);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    if (bookingFormVisible && bookingNameInputRef.current) {
      bookingNameInputRef.current.focus();
    }
  }, [bookingFormVisible]);

  useEffect(() => {
    return () => {
      if (bookingResetTimeoutRef.current) {
        window.clearTimeout(bookingResetTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasConfig || !apiKey) {
      return;
    }

    const client = new Vapi(apiKey, apiBaseUrl);
    vapiRef.current = client;

    const handleCallStart = () => {
      setStatus("live");
      setErrorMessage(null);
      setCallStage(null);
      applyMuteState(false);
    };

    const handleCallEnd = () => {
      setStatus("idle");
      setVolume(0);
      setCallStage(null);
      applyMuteState(false);
      resetBookingFlow();
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
      resetBookingFlow();
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
      resetBookingFlow();
    };

    const handleVapiMessage = (payload: unknown) => {
      if (!isFinalizedMessage(payload)) {
        return;
      }

      const normalizedText = extractNormalizedText(payload);
      const role = extractRole(payload);
      if (role === "assistant") {
        lastAssistantPromptWasBookingRef.current = containsKeyword(normalizedText, BOOKING_KEYWORDS);
      }

      if (statusRef.current !== "live" || bookingActiveRef.current) {
        return;
      }

      const intentName = extractIntentName(payload);
      const assistantIntentTriggered = Boolean(
        intentName && BOOKING_INTENT_TOKENS.some((token) => intentName.includes(token))
      );

      const userTriggered =
        role === "user" &&
        normalizedText &&
        (containsKeyword(normalizedText, BOOKING_KEYWORDS) ||
          (containsKeyword(normalizedText, AFFIRMATIVE_KEYWORDS) && lastAssistantPromptWasBookingRef.current));

      if ((assistantIntentTriggered || userTriggered) && !bookingActiveRef.current) {
        openBookingForm();
      }
    };

    client.on("call-start", handleCallStart);
    client.on("call-end", handleCallEnd);
    client.on("volume-level", handleVolume);
    client.on("error", handleError);
    client.on("call-start-progress", handleCallStartProgress);
    client.on("call-start-failed", handleCallStartFailed);
    client.on("message", handleVapiMessage);

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
      detach("message", handleVapiMessage);

      try {
        client.stop?.();
      } catch {
        // swallow cleanup issue
      }

      vapiRef.current = null;
    };
  }, [apiKey, hasConfig, openBookingForm, resetBookingFlow]);

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
      resetBookingFlow();
      applyMuteState(false);
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
    status === "live" ? "End Voice Session" : status === "connecting" ? "Connecting..." : "Talk to Nova";

  const helperText = (() => {
    if (status === "live") {
      return "You are live with the Nova AI coach.";
    }
    if (status === "connecting") {
      return "Connecting to the Nova voice channel...";
    }
    return "Launch a live conversation with the Nova AI team member.";
  })();

  const progressWidth = `${Math.min(Math.max(Math.round(volume * 100), 0), 100)}%`;

  const handleBookingFieldChange = (field: keyof BookingFormFields, value: string) => {
    setBookingFormData((prev) => ({ ...prev, [field]: value }));
    setBookingErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = bookingFormData.name.trim();
    const trimmedEmail = bookingFormData.email.trim();
    const errors: Record<string, string> = {};

    if (!trimmedName) {
      errors.name = "Name is required.";
    }
    if (!trimmedEmail) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = "Enter a valid email.";
    }
    if (!bookingFormData.date) {
      errors.date = "Pick a date.";
    }
    if (!bookingFormData.time) {
      errors.time = "Select a time.";
    }

    setBookingErrors(errors);
    if (Object.keys(errors).length > 0) {
      setBookingSubmissionState("error");
      setBookingFeedback("Add the missing details to continue.");
      return;
    }

    if (!vapiRef.current || statusRef.current !== "live") {
      setBookingSubmissionState("error");
      setBookingFeedback("The voice session ended. Restart the voice agent to continue.");
      return;
    }

    setBookingSubmissionState("sending");
    setBookingFeedback(null);

    const bookingMessage = `Name: ${trimmedName}, Email: ${trimmedEmail}, Date: ${bookingFormData.date}, Time: ${bookingFormData.time}`;

    try {
      vapiRef.current.send({
        type: "add-message",
        message: {
          role: "user",
          content: bookingMessage,
        },
        triggerResponseEnabled: true,
      });
      setBookingSubmissionState("sent");
      setBookingFeedback("Shared with your Tasknova guide. They will confirm on the call.");
      bookingResetTimeoutRef.current = window.setTimeout(() => {
        resetBookingFlow();
      }, 2400);
    } catch (error) {
      console.error("Failed to send booking details:", error);
      setBookingSubmissionState("error");
      setBookingFeedback("We couldn't send that. Please try again.");
    }
  };

  const containerClasses = `${
    inline ? "relative mx-auto flex max-w-md flex-col gap-3 text-slate-900" : "fixed bottom-6 left-6 z-[9999] flex max-w-xs flex-col gap-2 text-slate-900"
  } ${className ?? ""}`;

  return (
    <>
      {bookingFormVisible && (
        <div className="fixed bottom-32 left-6 z-[10000] w-[min(22rem,calc(100vw-3rem))] rounded-3xl border border-slate-200 bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Demo Booking</p>
              <p className="text-base font-semibold">Share your details</p>
            </div>
            <button
              type="button"
              onClick={handleBookingDismiss}
              className="rounded-full p-1 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Dismiss booking form"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-600">The voice session stays live while you fill out this form.</p>
          <form className="mt-4 flex flex-col gap-3" onSubmit={handleBookingSubmit}>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" htmlFor="booking-name">
                Name
              </label>
              <input
                id="booking-name"
                ref={bookingNameInputRef}
                type="text"
                name="booking-name"
                autoComplete="name"
                value={bookingFormData.name}
                onChange={(event) => handleBookingFieldChange("name", event.target.value)}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                aria-invalid={Boolean(bookingErrors.name)}
              />
              {bookingErrors.name && (
                <p className="mt-1 text-xs font-semibold text-rose-500">{bookingErrors.name}</p>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" htmlFor="booking-email">
                Email
              </label>
              <input
                id="booking-email"
                type="email"
                name="booking-email"
                autoComplete="email"
                value={bookingFormData.email}
                onChange={(event) => handleBookingFieldChange("email", event.target.value)}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                aria-invalid={Boolean(bookingErrors.email)}
              />
              {bookingErrors.email && (
                <p className="mt-1 text-xs font-semibold text-rose-500">{bookingErrors.email}</p>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" htmlFor="booking-date">
                  Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  name="booking-date"
                  min={todayISO}
                  value={bookingFormData.date}
                  onChange={(event) => handleBookingFieldChange("date", event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  aria-invalid={Boolean(bookingErrors.date)}
                />
                {bookingErrors.date && (
                  <p className="mt-1 text-xs font-semibold text-rose-500">{bookingErrors.date}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" htmlFor="booking-time">
                  Time
                </label>
                <input
                  id="booking-time"
                  type="time"
                  name="booking-time"
                  value={bookingFormData.time}
                  onChange={(event) => handleBookingFieldChange("time", event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  aria-invalid={Boolean(bookingErrors.time)}
                />
                {bookingErrors.time && (
                  <p className="mt-1 text-xs font-semibold text-rose-500">{bookingErrors.time}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={bookingSubmissionState === "sending"}
              className="mt-1 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 disabled:opacity-60"
            >
              {bookingSubmissionState === "sending"
                ? "Sending..."
                : bookingSubmissionState === "sent"
                ? "Details sent"
                : "Send to Voice Agent"}
            </button>
          </form>
          {bookingFeedback && (
            <p
              className={`mt-3 text-sm font-medium ${
                bookingSubmissionState === "error" ? "text-rose-500" : "text-emerald-600"
              }`}
            >
              {bookingFeedback}
            </p>
          )}
        </div>
      )}

      <div className={containerClasses}>
        <button
          type="button"
          onClick={handleToggle}
          disabled={status === "connecting"}
          className="group flex items-center gap-3 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 px-5 py-4 text-white shadow-2xl shadow-blue-900/25 transition hover:shadow-blue-800/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
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

        {status !== "idle" && (
          <div className="flex items-center justify-center gap-3 self-center">
            <button
              type="button"
              onClick={() => applyMuteState(!micMuted)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-md transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300"
              aria-label={micMuted ? "Unmute microphone" : "Mute microphone"}
            >
              {micMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={async () => {
                setStatus("idle");
                applyMuteState(false);
                setErrorMessage(null);
                setVolume(0);
                setCallStage(null);
                resetBookingFlow();
                try {
                  await vapiRef.current?.stop();
                } catch (error) {
                  console.error("Failed to stop Vapi voice agent:", error);
                }
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300"
              aria-label="End call"
            >
              <PhoneOff className="h-5 w-5" />
            </button>
          </div>
        )}

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
    </>
  );
}
