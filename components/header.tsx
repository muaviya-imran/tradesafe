'use client';

import { Bell, Settings, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-bg-secondary border-border-light sticky top-0 z-50 flex h-16 items-center justify-between border-b px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="bg-bg-tertiary hidden max-w-sm flex-1 items-center gap-2 rounded-md px-3 py-2 lg:flex">
          <Search size={18} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search players, teams..."
            className="text-text-primary placeholder-text-tertiary flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hover:bg-bg-tertiary rounded-md p-2 transition">
          <Bell size={20} className="text-text-secondary hover:text-accent-orange" />
        </button>
        <button className="hover:bg-bg-tertiary rounded-md p-2 transition">
          <Settings size={20} className="text-text-secondary hover:text-accent-orange" />
        </button>
        <div className="bg-accent-orange text-bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm font-bold transition hover:opacity-80">
          A
        </div>
      </div>
    </header>
  );
}
