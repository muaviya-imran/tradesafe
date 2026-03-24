import Link from 'next/link';

type NavbarProps = {
  setCurrentTabId: (id: number) => void;
  currentTabId: number;
};

export default function Navbar({ setCurrentTabId, currentTabId }: NavbarProps) {
  const NavItems = [
    { id: 1, label: 'Salary Dashboard', href: '/dashboard' },
    { id: 2, label: 'AI Chat', href: '/chat' },
    { id: 3, label: 'Live Tweets', href: '#' },
    { id: 4, label: 'Legal Docs', href: '#' },
    { id: 5, label: 'KPIs', href: '#' },
    { id: 6, label: 'Analytics', href: '#' },
  ];

  return (
    <div className="flex items-center justify-between border-y py-3">
      <span className="text-lg font-bold">TradeSafe AI</span>
      <div className="flex gap-5">
        {NavItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`cursor-pointer rounded-lg px-3 py-2 transition-colors delay-200 ${currentTabId === item.id ? 'bg-accent-orange hover:bg-accent-orange/90 font-bold' : 'hover:bg-accent-orange/20'}`}
            onClick={setCurrentTabId.bind(null, item.id)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
