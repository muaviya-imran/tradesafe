'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';

interface FeaturedGameProps {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  time?: string;
  imageUrl?: string;
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
    <div className="bg-bg-secondary border-border-light hover:border-accent-orange cursor-pointer overflow-hidden rounded-lg border transition">
      {/* Featured Game Banner */}
      <div className="bg-bg-tertiary relative h-32 overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${team1} vs ${team2}`} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-text-secondary text-center">
              <div className="bg-bg-light mx-auto mb-2 h-24 w-24 rounded-lg" />
              <p className="text-xs">Image Placeholder</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Game Info */}
      <div className="bg-bg-secondary p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className="text-accent-orange text-lg font-bold">{team1}</p>
          </div>
          <div className="px-4 text-center">
            {score1 !== undefined ? (
              <p className="text-accent-gold text-2xl font-bold">{score1}</p>
            ) : (
              <p className="text-accent-orange text-sm font-bold">VS</p>
            )}
          </div>
          <div className="flex-1 text-center">
            <p className="text-accent-orange text-lg font-bold">{team2}</p>
          </div>
        </div>

        {score2 !== undefined && (
          <p className="text-text-secondary mb-3 text-center text-xs font-bold">
            {score1} - {score2}
          </p>
        )}

        <div className="text-text-secondary mb-3 flex items-center justify-center gap-1 text-xs">
          <Clock size={14} />
          <span>{time}</span>
        </div>

        <button className="bg-bg-tertiary hover:bg-bg-light text-accent-orange w-full rounded py-2 text-sm font-bold transition">
          View Details
        </button>
      </div>
    </div>
  );
}
