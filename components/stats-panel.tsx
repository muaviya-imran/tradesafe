'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatItemProps {
  label: string
  value: string | number
  change?: number
  trend?: 'up' | 'down'
}

function StatItem({ label, value, change, trend }: StatItemProps) {
  const isPositive = trend === 'up'
  const trendColor = isPositive ? 'text-green-500' : 'text-red-500'

  return (
    <div className="bg-bg-tertiary border border-border-light rounded-lg p-4 hover:border-accent-orange transition">
      <p className="text-text-secondary text-xs mb-2">{label}</p>
      <div className="flex items-center justify-between">
        <p className="text-accent-orange font-bold text-xl">{value}</p>
        {change !== undefined && trend && (
          <div className={`flex items-center gap-1 ${trendColor}`}>
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="text-xs font-bold">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  )
}

interface StatsPanelProps {
  title: string
  stats: StatItemProps[]
  columns?: number
}

export default function StatsPanel({
  title,
  stats,
  columns = 4,
}: StatsPanelProps) {
  return (
    <div className="bg-bg-tertiary border border-border-light rounded-lg p-6">
      <h2 className="text-text-primary font-bold text-lg mb-6">{title}</h2>
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}
