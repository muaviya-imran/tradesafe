'use client'

import Image from 'next/image'
import { Star, TrendingUp } from 'lucide-react'

interface PlayerCardProps {
  playerName: string
  team: string
  position: string
  stats: {
    points: number
    rebounds: number
    assists: number
  }
  form?: 'hot' | 'cold' | 'neutral'
  imageUrl?: string
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
  }

  return (
    <div className="bg-bg-tertiary border border-border-light rounded-lg overflow-hidden hover:border-accent-orange transition group cursor-pointer">
      {/* Image Section */}
      <div className="relative h-40 bg-bg-secondary overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={playerName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-tertiary">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-bg-light rounded-full mb-2" />
              <p className="text-xs">Image Placeholder</p>
            </div>
          </div>
        )}

        {/* Form Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold text-white ${formColors[form]}`}>
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
          <h3 className="font-bold text-text-primary text-sm group-hover:text-accent-orange transition">
            {playerName}
          </h3>
          <p className="text-xs text-text-secondary">{position}</p>
        </div>

        <div className="mb-3 pb-3 border-b border-border-light">
          <p className="text-xs text-text-tertiary">{team}</p>
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
        <div className="mt-3 flex items-center gap-1 text-xs text-accent-orange">
          <TrendingUp size={12} />
          <span>+8.5% vs last week</span>
        </div>
      </div>
    </div>
  )
}
