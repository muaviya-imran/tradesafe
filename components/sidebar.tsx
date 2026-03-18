'use client'

import { Home, TrendingUp, Activity, Zap, Trophy, BarChart3, Settings, LogOut } from 'lucide-react'
import Image from 'next/image'

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: TrendingUp, label: 'Trends', active: false },
    { icon: Activity, label: 'Live Stats', active: false },
    { icon: Zap, label: 'Quick Picks', active: false },
    { icon: Trophy, label: 'Leaderboard', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
  ]

  return (
    <aside className="w-20 bg-bg-secondary border-r border-border-light flex flex-col items-center py-6 sticky left-0 top-0 h-screen">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <div className="relative w-8 h-8">
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
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${
                item.active
                  ? 'bg-accent-orange text-bg-primary'
                  : 'text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary'
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </button>
          )
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2">
        <button className="w-12 h-12 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary transition">
          <Settings size={24} />
        </button>
        <button className="w-12 h-12 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-orange hover:bg-bg-tertiary transition">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  )
}
