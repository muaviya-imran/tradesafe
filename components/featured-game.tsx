'use client'

import Image from 'next/image'
import { Clock, TrendingUp } from 'lucide-react'

interface FeaturedGameProps {
  team1: string
  team2: string
  score1?: number
  score2?: number
  time?: string
  imageUrl?: string
}

export default function FeaturedGame({
  team1,
  team2,
  score1,
  score2,
  time = 'Today 8:00 PM',
  imageUrl,
}: FeaturedGameProps) {
  return (
    <div className="bg-bg-secondary border border-border-light rounded-lg overflow-hidden hover:border-accent-orange transition cursor-pointer">
      {/* Featured Game Banner */}
      <div className="relative h-32 bg-bg-tertiary overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${team1} vs ${team2}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-text-secondary">
              <div className="w-24 h-24 mx-auto bg-bg-light rounded-lg mb-2" />
              <p className="text-xs">Image Placeholder</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Game Info */}
      <div className="p-4 bg-bg-secondary">
        <div className="flex items-center justify-between mb-3">
          <div className="text-center flex-1">
            <p className="text-accent-orange font-bold text-lg">{team1}</p>
          </div>
          <div className="text-center px-4">
            {score1 !== undefined ? (
              <p className="text-accent-gold font-bold text-2xl">{score1}</p>
            ) : (
              <p className="text-accent-orange font-bold text-sm">VS</p>
            )}
          </div>
          <div className="text-center flex-1">
            <p className="text-accent-orange font-bold text-lg">{team2}</p>
          </div>
        </div>

        {score2 !== undefined && (
          <p className="text-text-secondary text-xs text-center mb-3 font-bold">
            {score1} - {score2}
          </p>
        )}

        <div className="flex items-center justify-center gap-1 text-text-secondary text-xs mb-3">
          <Clock size={14} />
          <span>{time}</span>
        </div>

        <button className="w-full bg-bg-tertiary hover:bg-bg-light text-accent-orange font-bold py-2 rounded transition text-sm">
          View Details
        </button>
      </div>
    </div>
  )
}
