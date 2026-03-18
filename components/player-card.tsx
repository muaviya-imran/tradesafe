'use client';

import Image from 'next/image';
import { Star, TrendingUp } from 'lucide-react';

interface PlayerCardProps {
  playerName: string;
  team: string;
  position: string;
  stats: {
    points: number;
    rebounds: number;
    assists: number;
  };
  form?: 'hot' | 'cold' | 'neutral';
  imageUrl?: string;
}

export default function PlayerCard({
  playerName,
  team,
  position,
  stats,
  form = 'neutral',
  imageUrl,
}: PlayerCardProps) {
  const formColors = {
    hot: 'bg-orange-600',
    cold: 'bg-blue-600',
    neutral: 'bg-gray-600',
  };

  return (
    <div className="bg-bg-tertiary border-border-light hover:border-accent-orange group cursor-pointer overflow-hidden rounded-lg border transition">
      {/* Image Section */}
      <div className="bg-bg-secondary relative h-40 overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt={playerName} fill className="object-cover" />
        ) : (
          <div className="text-text-tertiary flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="bg-bg-light mx-auto mb-2 h-20 w-20 rounded-full" />
              <p className="text-xs">Image Placeholder</p>
            </div>
          </div>
        )}

        {/* Form Badge */}
        <div
          className={`absolute top-2 right-2 rounded px-2 py-1 text-xs font-bold text-white ${formColors[form]}`}
        >
          {form.toUpperCase()}
        </div>

        {/* Star Rating */}
        <div className="absolute top-2 left-2 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < 4 ? 'fill-accent-gold text-accent-gold' : 'text-text-tertiary'}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <div className="mb-2">
          <h3 className="text-text-primary group-hover:text-accent-orange text-sm font-bold transition">
            {playerName}
          </h3>
          <p className="text-text-secondary text-xs">{position}</p>
        </div>

        <div className="border-border-light mb-3 border-b pb-3">
          <p className="text-text-tertiary text-xs">{team}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <p className="text-accent-orange font-bold">{stats.points}</p>
            <p className="text-text-tertiary">PTS</p>
          </div>
          <div>
            <p className="text-accent-orange font-bold">{stats.rebounds}</p>
            <p className="text-text-tertiary">REB</p>
          </div>
          <div>
            <p className="text-accent-orange font-bold">{stats.assists}</p>
            <p className="text-text-tertiary">AST</p>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="text-accent-orange mt-3 flex items-center gap-1 text-xs">
          <TrendingUp size={12} />
          <span>+8.5% vs last week</span>
        </div>
      </div>
    </div>
  );
}
