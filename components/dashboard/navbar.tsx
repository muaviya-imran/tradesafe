import { Plus, RefreshCcw } from 'lucide-react';

type NavbarProps = {
  setCurrentTabId: (id: number) => void;
  currentTabId: number;
};

export default function Navbar({ setCurrentTabId, currentTabId }: NavbarProps) {
  const NavItems = [
    { id: 1, label: 'Salary Dashboard', href: '#' },
    { id: 2, label: 'AI Chat', href: '#' },
    { id: 3, label: 'Live Tweets', href: '#' },
    { id: 4, label: 'Legal Docs', href: '#' },
    { id: 5, label: 'KPIs', href: '#' },
    { id: 6, label: 'Analytics', href: '#' },
  ];

  return (
    <div className="flex items-center justify-between border-y py-3">
      <div className="flex gap-5">
        {NavItems.map((item) => (
          <span
            key={item.id}
            className={`cursor-pointer rounded-lg px-3 py-2 transition-colors delay-200 ${currentTabId === item.id ? 'bg-accent-orange hover:bg-accent-orange/90 font-bold' : 'hover:bg-accent-orange/20'}`}
            onClick={setCurrentTabId.bind(null, item.id)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex gap-5 text-sm">
        <button className="bg-accent-gold hover:bg-accent-gold/90 flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-black transition-colors delay-200">
          <RefreshCcw size={16} />
          Refresh Dashboard
        </button>
        <button className="bg-accent-orange hover:bg-accent-orange/90 flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-white transition-colors delay-200">
          <Plus size={16} />
          Add Note
        </button>
      </div>
    </div>
  );
}
