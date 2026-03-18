'use client'

import { TrendingUp, TrendingDown, Star } from 'lucide-react'

interface WatchlistItem {
  id: string
  playerName: string
  team: string
  price: number
  change: number
  volume: string
  favorite?: boolean
}

interface MarketWatchlistProps {
  items: WatchlistItem[]
  title?: string
}

export default function MarketWatchlist({
  items,
  title = 'Market Watchlist',
}: MarketWatchlistProps) {
  return (
    <div className="bg-bg-tertiary border border-border-light rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border-light">
        <h2 className="text-text-primary font-bold text-lg">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-light">
              <th className="px-6 py-3 text-left text-xs font-bold text-text-secondary uppercase">
                Player
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-text-secondary uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-text-secondary uppercase">
                Change
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-text-secondary uppercase">
                Volume
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-text-secondary uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const isPositive = item.change >= 0
              const changeColor = isPositive ? 'text-green-500' : 'text-red-500'

              return (
                <tr
                  key={item.id}
                  className="border-b border-border-light hover:bg-bg-light transition cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-text-primary font-semibold text-sm">
                        {item.playerName}
                      </p>
                      <p className="text-text-secondary text-xs">{item.team}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-accent-orange font-bold">${item.price.toFixed(2)}</p>
                  </td>
                  <td className={`px-6 py-4 text-right ${changeColor}`}>
                    <div className="flex items-center justify-end gap-1">
                      {isPositive ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      <span className="font-bold text-sm">
                        {isPositive ? '+' : ''}{item.change}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-text-secondary text-sm">{item.volume}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-bg-tertiary rounded transition">
                      <Star
                        size={16}
                        className={item.favorite ? 'fill-accent-gold text-accent-gold' : 'text-text-secondary'}
                      />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
