import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CalendarCheckRequest {
  date: string; // YYYY-MM-DD
  time: string; // "11:00 AM"
  timezone: string; // "America/New_York"
}

// Convert 12-hour time format to 24-hour
function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  
  if (hours === "12") {
    hours = modifier === "AM" ? "00" : "12";
  } else if (modifier === "PM") {
    hours = String(parseInt(hours, 10) + 12);
  }
  
  return `${hours.padStart(2, "0")}:${minutes || "00"}`;
}

// Get Google OAuth2 access token using Service Account
async function getAccessToken(): Promise<string> {
  const serviceAccountEmail = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = Deno.env.get("GOOGLE_PRIVATE_KEY");

  if (!serviceAccountEmail || !privateKey) {
    throw new Error("Missing Google Service Account credentials");
  }

  // Clean up the private key (remove escaped newlines)
  const cleanedPrivateKey = privateKey.replace(/\\n/g, "\n");

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccountEmail,
    scope: "https://www.googleapis.com/auth/calendar.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Import crypto key
  const encoder = new TextEncoder();
  const keyData = encoder.encode(cleanedPrivateKey);
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    pemToBinary(cleanedPrivateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  // Create JWT
  const headerB64 = btoa(JSON.stringify(header));
  const claimB64 = btoa(JSON.stringify(claim));
  const signatureInput = `${headerB64}.${claimB64}`;
  
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    encoder.encode(signatureInput)
  );

  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
  const jwt = `${signatureInput}.${signatureB64}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const tokenData = await tokenResponse.json();
  
  if (!tokenData.access_token) {
    console.error("Token exchange failed:", JSON.stringify(tokenData, null, 2));
    throw new Error(`Failed to get access token: ${tokenData.error || JSON.stringify(tokenData)}`);
  }

  console.log("Successfully obtained access token");
  return tokenData.access_token;
}

// Helper to convert PEM to binary
function pemToBinary(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");
  
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// Convert a date/time in a target timezone to a UTC ISO string
// This avoids ambiguous local parsing and produces RFC3339 timestamps for Google
function toUtcISOString(date: string, time24: string, timeZone: string): string {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time24.split(":").map(Number);

  // Initial UTC guess from the wall time values
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0, 0);

  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format the guess in the target timezone to derive the offset
  const parts = dtf.formatToParts(new Date(utcGuess));
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const zonedUtc = Date.UTC(
    Number(map.year),
    Number(map.month) - 1,
    Number(map.day),
    Number(map.hour),
    Number(map.minute),
    Number(map.second)
  );

  // Offset = guess - zoned representation; apply to get the real UTC instant
  const offsetMs = utcGuess - zonedUtc;
  return new Date(utcGuess + offsetMs).toISOString();
}

// Check if time slot is available
async function checkSlotAvailability(
  date: string,
  time: string,
  timezone: string
): Promise<{ available: boolean; message: string }> {
  try {
    const accessToken = await getAccessToken();
    const calendarId = Deno.env.get("GOOGLE_CALENDAR_ID") || "primary";

    // Convert time to 24-hour format
    const time24 = convertTo24Hour(time);

    // Build proper RFC3339 instants in UTC for the requested timezone
    const startDateTimeUtc = toUtcISOString(date, time24, timezone);
    const endDateTimeUtc = new Date(new Date(startDateTimeUtc).getTime() + 60 * 60 * 1000)
      .toISOString();

    // Query Google Calendar Freebusy API
    console.log(
      "Querying calendar:",
      calendarId,
      "for slot:",
      startDateTimeUtc,
      "to",
      endDateTimeUtc,
      "timezone:",
      timezone
    );
    
    const freebusyResponse = await fetch(
      "https://www.googleapis.com/calendar/v3/freeBusy",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeMin: startDateTimeUtc,
          timeMax: endDateTimeUtc,
          timeZone: timezone,
          items: [{ id: calendarId }],
        }),
      }
    );

    const freebusyData = await freebusyResponse.json();

    if (!freebusyResponse.ok) {
      console.error("Freebusy API error response:", JSON.stringify(freebusyData, null, 2));
      throw new Error(`Calendar API error: ${freebusyData.error?.message || JSON.stringify(freebusyData)}`);
    }

    console.log("Freebusy response:", JSON.stringify(freebusyData, null, 2));

    // Check if there are any busy periods
    const busyPeriods = freebusyData.calendars?.[calendarId]?.busy || [];
    const isAvailable = busyPeriods.length === 0;

    console.log("Availability check complete:", isAvailable ? "Available" : "Busy");

    return {
      available: isAvailable,
      message: isAvailable
        ? "This time slot is available!"
        : "This time slot is not available. Please select another time.",
    };
  } catch (error) {
    console.error("Calendar check error:", error);
    throw error;
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { date, time, timezone }: CalendarCheckRequest = await req.json();

    if (!date || !time || !timezone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: date, time, timezone" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const result = await checkSlotAvailability(date, time, timezone);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Function error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
