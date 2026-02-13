# Google Calendar Integration Setup Guide

This guide explains how to set up Google Calendar availability checking for the demo booking form.

## Overview

When users select a date and time for their demo, the system automatically checks your Google Calendar to verify the slot is available. If the slot is busy, the user is notified and prevented from booking.

## Prerequisites

- Google Cloud Console access
- A Google Calendar (can be your personal calendar or a dedicated sales calendar)
- Supabase project with Edge Functions deployed

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Note your project ID

### 2. Enable Google Calendar API

1. In Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Google Calendar API"
3. Click **Enable**

### 3. Create Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in:
   - **Service account name**: `tasknova-calendar-checker` (or any name)
   - **Service account ID**: Auto-generated
   - **Description**: "Checks calendar availability for demo bookings"
4. Click **Create and Continue**
5. Skip the optional role assignment (click **Continue**)
6. Skip granting users access (click **Done**)

### 4. Create Service Account Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** → **Create new key**
4. Select **JSON** format
5. Click **Create**
6. A JSON file will download - **KEEP THIS SECURE!**

### 5. Share Calendar with Service Account

1. Open [Google Calendar](https://calendar.google.com)
2. Find the calendar you want to check (or create a new "Sales Demos" calendar)
3. Click the three dots next to the calendar → **Settings and sharing**
4. Scroll to **Share with specific people**
5. Click **Add people**
6. Enter the service account email (found in the JSON file: `client_email` field)
   - Example: `tasknova-calendar-checker@your-project.iam.gserviceaccount.com`
7. Set permission to **Make changes to events** (or at minimum "See all event details")
8. Click **Send**

### 6. Get Calendar ID

1. In Calendar Settings (from step 5), scroll to **Integrate calendar**
2. Copy the **Calendar ID**
   - For your primary calendar, it's usually your email address
   - For other calendars, it looks like: `c_1234567890abcdef@group.calendar.google.com`

### 7. Configure Environment Variables

Open the JSON key file you downloaded and extract these values:

```json
{
  "type": "service_account",
  "project_id": "your-project",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "tasknova-calendar-checker@your-project.iam.gserviceaccount.com",
  ...
}
```

#### Local Development (.env file)

Add to your `.env` file:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=tasknova-calendar-checker@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_FULL_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----
GOOGLE_CALENDAR_ID=your-email@gmail.com
```

**Important**: Keep the `\n` characters in the private key - they represent newlines.

#### Production (Supabase Dashboard)

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **Edge Functions**
4. Click **Add secret**
5. Add each variable:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_CALENDAR_ID`

### 8. Deploy Supabase Edge Function

```powershell
# Install Supabase CLI if you haven't already
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (replace with your project reference)
supabase link --project-ref qdeqpgixanmuzonsoeou

# Deploy the edge function
supabase functions deploy check-calendar-availability
```

### 9. Test the Integration

1. Start your local dev server: `npm run dev`
2. Navigate to `/book-demo`
3. Fill in the form
4. Select a date and time
5. Watch for the availability message:
   - ✅ Green message: "This time slot is available!"
   - ❌ Red message: "This time slot is not available. Please select another time."

## How It Works

1. User selects date, time, and timezone
2. Frontend calls the Supabase Edge Function via `checkCalendarAvailability()`
3. Edge Function:
   - Authenticates with Google using the service account
   - Queries the Google Calendar Freebusy API for the selected time slot
   - Returns `available: true/false` with a message
4. Frontend displays the result and disables the submit button if slot is unavailable

## Troubleshooting

### "Missing Google Service Account credentials" error

- Verify environment variables are set correctly in Supabase Dashboard
- Redeploy the edge function after setting secrets

### "Failed to get access token" error

- Check that the `GOOGLE_PRIVATE_KEY` includes `\n` characters
- Verify the service account JSON is valid
- Ensure the service account hasn't been deleted

### "Failed to check calendar availability" error

- Verify the calendar is shared with the service account email
- Check that the `GOOGLE_CALENDAR_ID` is correct
- Ensure Google Calendar API is enabled in Google Cloud Console

### Availability always shows "available"

- Check that you have events in your calendar during the test time
- Verify the timezone conversion is correct
- Look at Edge Function logs in Supabase Dashboard for errors

## API Limits

Google Calendar API has these quotas per day:
- **Queries per day**: 1,000,000 (free tier)
- **Queries per user per second**: 5

For a typical demo booking flow, you'll use 1 query per form submission, which is well within limits.

## Security Notes

- ✅ Service account credentials are stored securely in Supabase secrets
- ✅ Never commit the JSON key file to version control
- ✅ Private key is only accessible server-side (Edge Function)
- ✅ Frontend only receives availability status, not calendar details
- ✅ Service account has minimal permissions (read calendar events)

## Alternative: Using n8n Automation

If you prefer not to use Google Service Account, you can check availability via n8n:

1. Create an n8n workflow with Google Calendar node
2. Expose a webhook endpoint
3. Replace the Edge Function call with a fetch to your n8n webhook
4. Return `{ available: boolean, message: string }` from n8n

Update `calendar-helper.ts`:

```typescript
const response = await fetch("https://n8nautomation.site/webhook/YOUR_WEBHOOK_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ date, time, timezone })
});
```

## Support

If you encounter issues:
1. Check Supabase Edge Function logs
2. Verify all environment variables are set
3. Test the Google Calendar API directly in [API Explorer](https://developers.google.com/calendar/api/v3/reference/freebusy/query)
