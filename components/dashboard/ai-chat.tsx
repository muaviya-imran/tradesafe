import { ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'robot';
  source?: {
    title: string;
    subtitle: string;
    url: string;
  };
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content:
      "Hello! I'm your AI Cap Strategist with access to NBA CBA regulations and legal documentation. Ask me about salary cap scenarios, trade rules, or contract restrictions.",
    sender: 'robot',
    source: {
      title: 'NBA Collective Bargaining Agreement 2023',
      subtitle: 'Article VI, Section 6',
      url: '#',
    },
    timestamp: new Date(),
  },
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm analyzing your question based on the latest NBA CBA regulations and trade rules. This is a simulated response for demonstration purposes.",
        sender: 'robot',
        source: {
          title: 'NBA Salary Cap FAQ',
          subtitle: 'Trade Scenarios & Exceptions',
          url: '#',
        },
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <div className="bg-bg-tertiary border-border-light relative flex-1 rounded-lg border p-2 transition">
      <div className="border-border-light mb-4 border-b pb-2">
        <h2 className="text-text-primary font-bold">AI Cap Strategist</h2>
      </div>
      <div className="h-100 overflow-y-auto">
        <div className="mx-auto max-w-7xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] space-y-3 rounded-lg p-4 ${
                  message.sender === 'robot'
                    ? 'border-border-light border bg-white/5'
                    : 'bg-blue-400 text-white'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>

                {message.source && (
                  <div className="border-border-light space-y-2 border-t pt-3">
                    <div className="text-text-secondary space-y-1 text-xs">
                      <p className="font-semibold">{message.source.title}</p>
                      <p className="text-text-tertiary">{message.source.subtitle}</p>
                    </div>
                    <a
                      href={message.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent-gold hover:bg-accent-gold/90 inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium text-black transition-colors"
                    >
                      View Source
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}

                <p className="text-right text-xs text-white/60">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-border-light absolute right-0 bottom-0 left-0 border-t bg-white/10 px-4 py-2">
          <div className="mx-auto flex max-w-350 gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about salary cap scenarios, trade rules, or contract restrictions..."
              className="bg-bg-tertiary text-text-primary placeholder:text-text-tertiary border-border-light focus:border-accent-gold focus:ring-accent-gold flex-1 rounded-lg border px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="disabled:text-text-tertiary transition-colors disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
