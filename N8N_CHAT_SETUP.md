# N8N Chat Integration - Setup Instructions

## Overview
This guide explains how to set up and configure the @n8n/chat integration for the Tasknova website. The chat widget is fully styled to match the Tasknova design system with cyan-blue gradients and modern UI.

## Installation

The package has already been installed. If you need to reinstall:

```bash
npm install @n8n/chat
```

## Configuration

### 1. Set up your N8N Webhook

1. Log in to your n8n instance
2. Create a new workflow or use an existing one
3. Add a "Webhook" node to your workflow
4. Configure the webhook node:
   - **Method**: POST
   - **Path**: Choose a unique path (e.g., `/chat-webhook`)
   - **Response Mode**: Respond Immediately
5. Copy the webhook URL provided by n8n

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder with your actual webhook URL:
   ```env
   VITE_N8N_CHAT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
   ```

   **Important**: 
   - The `.env` file is git-ignored for security
   - Never commit your actual webhook URL to version control
   - Make sure your n8n instance is accessible from your deployed website

### 3. Example N8N Workflow

Here's a basic n8n workflow structure for the chat:

```
Webhook → Process Message → Send Response
```

**Webhook Node Configuration:**
- HTTP Method: POST
- Path: /chat-webhook
- Return Data: Yes

**Expected Request Body:**
```json
{
  "action": "sendMessage",
  "chatInput": "User's message here",
  "sessionId": "unique-session-id"
}
```

**Response Format:**
```json
{
  "output": "Bot's response message",
  "metadata": {
    "timestamp": "2026-02-06T12:00:00Z"
  }
}
```

## Features

### Design System Integration
The chat is fully styled to match Tasknova's design:
- ✅ Cyan-blue gradient brand colors (#06b6d4 → #2563eb)
- ✅ Modern rounded corners (16px)
- ✅ Smooth animations and transitions
- ✅ Custom scrollbar styling
- ✅ Responsive design (mobile-friendly)
- ✅ Bottom-right positioning with proper z-index

### Component Features
- Custom floating action button with gradient
- Notification badge indicator
- Hover tooltip
- Smooth open/close animations
- Mobile-responsive overlay
- Fully accessible (keyboard navigation, ARIA labels)

## File Structure

```
src/
├── app/
│   ├── App.tsx                          # Chat integrated here
│   └── components/
│       └── n8n-chat.tsx                 # Main chat component
├── styles/
│   └── n8n-chat-custom.css              # Custom styling
└── vite-env.d.ts                        # TypeScript definitions
.env                                      # Your webhook URL (git-ignored)
.env.example                              # Template for .env
```

## Usage

The chat widget is automatically available on all pages of the website. Users can:

1. Click the floating chat button in bottom-right corner
2. Type messages in the input field
3. Receive AI-powered responses from your n8n workflow
4. Close the chat by clicking the X button or clicking outside (on mobile)

## Customization

### Modify Chat Behavior

Edit `src/app/components/n8n-chat.tsx`:

```tsx
initialMessages: [
  'Hi there! 👋',
  'Custom welcome message here'
],
```

### Adjust Styling

Edit `src/styles/n8n-chat-custom.css` to customize:
- Colors
- Border radius
- Shadows
- Animations
- Typography

### Change Position

In `n8n-chat.tsx`, modify the button position:

```tsx
className="fixed bottom-6 right-6 z-50"
// Change to: bottom-4 left-4 for bottom-left
```

## Testing

### 1. Start Development Server

```bash
npm run dev
```

### 2. Check Console

Open browser DevTools console. You should see:
- No errors if webhook URL is configured
- Error message if webhook URL is missing

### 3. Test Chat Functionality

1. Click the chat button
2. Send a test message
3. Check n8n execution logs to verify webhook was hit
4. Verify response appears in chat

## Deployment

### Environment Variables in Production

When deploying to Vercel, Netlify, or other platforms:

1. Add environment variable in your hosting platform:
   - **Key**: `VITE_N8N_CHAT_WEBHOOK_URL`
   - **Value**: Your n8n webhook URL

2. Rebuild your application:
   ```bash
   npm run build
   ```

### Important Security Notes

- ✅ `.env` is git-ignored
- ✅ Webhook URL is stored in environment variable
- ✅ Never hardcode sensitive URLs in frontend code
- ⚠️ Make sure your n8n instance has proper CORS configuration
- ⚠️ Consider rate limiting on your n8n webhook
- ⚠️ Implement authentication if handling sensitive data

## Troubleshooting

### Chat Widget Not Appearing

1. Check console for errors
2. Verify `.env` file exists and contains webhook URL
3. Restart development server after adding `.env`
4. Clear browser cache

### Webhook Not Receiving Messages

1. Test webhook URL directly with Postman/cURL:
   ```bash
   curl -X POST https://your-webhook-url \\
     -H "Content-Type: application/json" \\
     -d '{"action":"sendMessage","chatInput":"test","sessionId":"123"}'
   ```

2. Check n8n workflow execution logs
3. Verify CORS is configured on n8n instance
4. Ensure n8n instance is publicly accessible

### TypeScript Errors

If you see TypeScript errors about `import.meta.env`:
1. Ensure `src/vite-env.d.ts` exists
2. Restart your TypeScript server in VS Code
3. Rebuild the project

### Styling Issues

If chat doesn't match design:
1. Check that `n8n-chat-custom.css` is imported
2. Inspect elements in DevTools
3. Verify CSS custom properties are being applied
4. Clear browser cache

## Advanced Configuration

### Custom Themes

Modify theme properties in `n8n-chat.tsx`:

```tsx
theme: {
  '--chat-primary-color': '#your-color',
  '--chat-window-border-radius': '20px',
  // ... other properties
}
```

### Multiple Languages

Add more languages to `i18n`:

```tsx
i18n: {
  en: { /* English messages */ },
  es: { /* Spanish messages */ },
  fr: { /* French messages */ },
}
```

### Session Persistence

The chat uses `sessionId` to maintain conversation context. You can customize this in the webhook workflow to:
- Store conversations in a database
- Implement user authentication
- Track analytics

## Support

For issues specific to:
- **@n8n/chat package**: https://github.com/n8n-io/n8n
- **n8n workflow help**: https://community.n8n.io
- **Tasknova integration**: Refer to your development team

## License

This integration uses the @n8n/chat package which follows n8n's licensing terms.
