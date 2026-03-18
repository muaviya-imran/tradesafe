'use client';

import { Home, TrendingUp, Activity, Zap, Trophy, BarChart3, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: TrendingUp, label: 'Trends', active: false },
    { icon: Activity, label: 'Live Stats', active: false },
    { icon: Zap, label: 'Quick Picks', active: false },
    { icon: Trophy, label: 'Leaderboard', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
  ];

  return (
    <aside className="bg-bg-secondary border-border-light sticky top-0 left-0 flex h-screen w-20 flex-col items-center border-r py-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="bg-accent-orange flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg transition hover:opacity-80">
          <div className="relative h-8 w-8">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="white" opacity="0.1" />
              <text x="50" y="60" fontSize="50" fontWeight="bold" textAnchor="middle" fill="white">
                N
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex h-12 w-12 items-center justify-center rounded-lg transition ${
                item.active
                  ? 'bg-accent-orange text-bg-primary'
                  : 'text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary'
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2">
        <button className="text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary flex h-12 w-12 items-center justify-center rounded-lg transition">
          <Settings size={24} />
        </button>
        <button className="text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary flex h-12 w-12 items-center justify-center rounded-lg transition">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
}
