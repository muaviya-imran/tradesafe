'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatItemProps {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down';
}

function StatItem({ label, value, change, trend }: StatItemProps) {
  const isPositive = trend === 'up';
  const trendColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-bg-tertiary border-border-light hover:border-accent-orange rounded-lg border p-4 transition">
      <p className="text-text-secondary mb-2 text-xs">{label}</p>
      <div className="flex items-center justify-between">
        <p className="text-accent-orange text-xl font-bold">{value}</p>
        {change !== undefined && trend && (
          <div className={`flex items-center gap-1 ${trendColor}`}>
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="text-xs font-bold">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface StatsPanelProps {
  title: string;
  stats: StatItemProps[];
  columns?: number;
}

export default function StatsPanel({ title, stats, columns = 4 }: StatsPanelProps) {
  return (
    <div className="bg-bg-tertiary border-border-light rounded-lg border p-6">
      <h2 className="text-text-primary mb-6 text-lg font-bold">{title}</h2>
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
  );
}
