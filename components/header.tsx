'use client'

import { Bell, Settings, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-16 bg-bg-secondary border-b border-border-light flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden lg:flex items-center bg-bg-tertiary px-3 py-2 rounded-md flex-1 max-w-sm gap-2">
          <Search size={18} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search players, teams..."
            className="bg-transparent text-text-primary placeholder-text-tertiary outline-none flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-bg-tertiary rounded-md transition">
          <Bell size={20} className="text-text-secondary hover:text-accent-orange" />
        </button>
        <button className="p-2 hover:bg-bg-tertiary rounded-md transition">
          <Settings size={20} className="text-text-secondary hover:text-accent-orange" />
        </button>
        <div className="w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center text-bg-primary font-bold text-sm cursor-pointer hover:opacity-80 transition">
          A
        </div>
      </div>
    </header>
  )
}
