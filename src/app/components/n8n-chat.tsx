import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import '../../styles/n8n-chat-custom.css';

export function N8nChat() {
  useEffect(() => {
    const webhookUrl = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('N8N webhook URL is not configured. Please set VITE_N8N_CHAT_WEBHOOK_URL in your .env file');
      return;
    }

    createChat({
      webhookUrl: webhookUrl,
      mode: 'window',
      defaultLanguage: 'en',
      initialMessages: [
        'Hi there! 👋',
        'I\'m your Tasknova AI assistant. How can I help you today?'
      ],
      i18n: {
        en: {
          title: 'Chat with us',
          subtitle: 'We\'re here to help you 24/7',
          footer: '',
          getStarted: 'Start Conversation',
          inputPlaceholder: 'Type your message...',
        },
      },
    });
  }, []);

  return <div id="n8n-chat"></div>;
}
