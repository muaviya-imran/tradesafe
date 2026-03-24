import { ExternalLink } from 'lucide-react';

export const mockChatMessages = [
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
  },
  {
    id: '2',
    content: "Can we trade D'Angelo Russell without taking back salary?",
    sender: 'user',
    source: null,
  },
  {
    id: '3',
    content:
      "Yes, trading D'Angelo Russell ($18.7M) without taking back salary is possible, but it would require finding a team with sufficient cap space or using trade exceptions. This would reduce your luxury tax burden significantly.",
    sender: 'robot',
    source: {
      title: 'Trade Exception Rules',
      subtitle: 'CBA Article VII, Section 6(j)',
      url: '#',
    },
  },
  {
    id: '4',
    content: 'Would including a second-round pick make the trade easier to complete?',
    sender: 'user',
    source: null,
  },
  {
    id: '5',
    content:
      'Including a second-round pick can improve trade feasibility, especially if the receiving team is taking on long-term salary risk. It can also increase your options among tax-sensitive teams.',
    sender: 'robot',
    source: {
      title: 'Salary Matching Requirements',
      subtitle: 'CBA Article VII, Section 6(c)',
      url: '#',
    },
  },
];

export default function AIChat() {
  return (
    <div className="bg-bg-tertiary border-border-light flex-1 rounded-lg border p-2 transition">
      <div className="border-border-light mb-4 border-b pb-2">
        <h2 className="text-text-primary font-bold">AI Cap Strategist</h2>
      </div>
      <div className="space-y-2">
        {mockChatMessages.map((message) => (
          <div
            key={message.id}
            className={`w-[80%] space-y-2 text-sm ${message.sender === 'robot' ? 'bg-white/5' : 'ml-auto bg-blue-400'} rounded-lg p-2`}
          >
            <p>{message.content}</p>
            {message.source && (
              <div className="flex items-center gap-2 border-t border-white/10 py-1">
                <p className="text-text-secondary">{message.source.title}</p>
                <button className="bg-accent-gold border-border-light hover:bg-accent-gold/90 flex h-fit cursor-pointer items-center gap-1 rounded px-2 py-1 text-xs text-black transition-colors delay-200">
                  Source
                  <ExternalLink size={12} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
