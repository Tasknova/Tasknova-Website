import { supabase } from "./supabase-client";

interface CalendarAvailability {
  available: boolean;
  message: string;
}

/**
 * Check if a time slot is available in Google Calendar
 * @param date - Date in YYYY-MM-DD format
 * @param time - Time in 12-hour format (e.g., "11:00 AM")
 * @param timezone - Timezone string (e.g., "America/New_York")
 * @returns Promise with availability status and message
 */
export async function checkCalendarAvailability(
  date: string,
  time: string,
  timezone: string
): Promise<CalendarAvailability> {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }

    // Call the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke(
      "check-calendar-availability",
      {
        body: { date, time, timezone },
      }
    );

    if (error) {
      console.error("Calendar availability check error:", error);
      throw error;
    }

    return data as CalendarAvailability;
  } catch (error) {
    console.error("Failed to check calendar availability:", error);
    // Gracefully handle errors - assume slot is available if check fails
    return {
      available: true,
      message: "Unable to verify availability. Proceeding with booking.",
    };
  }
}
