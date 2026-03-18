'use client';

import { TrendingUp, TrendingDown, Star } from 'lucide-react';

interface WatchlistItem {
  id: string;
  playerName: string;
  team: string;
  price: number;
  change: number;
  volume: string;
  favorite?: boolean;
}

interface MarketWatchlistProps {
  items: WatchlistItem[];
  title?: string;
}

export default function MarketWatchlist({
  items,
  title = 'Market Watchlist',
}: MarketWatchlistProps) {
  return (
    <div className="bg-bg-tertiary border-border-light overflow-hidden rounded-lg border">
      <div className="border-border-light border-b p-6">
        <h2 className="text-text-primary text-lg font-bold">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-border-light border-b">
              <th className="text-text-secondary px-6 py-3 text-left text-xs font-bold uppercase">
                Player
              </th>
              <th className="text-text-secondary px-6 py-3 text-right text-xs font-bold uppercase">
                Price
              </th>
              <th className="text-text-secondary px-6 py-3 text-right text-xs font-bold uppercase">
                Change
              </th>
              <th className="text-text-secondary px-6 py-3 text-right text-xs font-bold uppercase">
                Volume
              </th>
              <th className="text-text-secondary px-6 py-3 text-center text-xs font-bold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const isPositive = item.change >= 0;
              const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

              return (
                <tr
                  key={item.id}
                  className="border-border-light hover:bg-bg-light cursor-pointer border-b transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-text-primary text-sm font-semibold">{item.playerName}</p>
                      <p className="text-text-secondary text-xs">{item.team}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-accent-orange font-bold">${item.price.toFixed(2)}</p>
                  </td>
                  <td className={`px-6 py-4 text-right ${changeColor}`}>
                    <div className="flex items-center justify-end gap-1">
                      {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      <span className="text-sm font-bold">
                        {isPositive ? '+' : ''}
                        {item.change}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-text-secondary text-sm">{item.volume}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="hover:bg-bg-tertiary rounded p-2 transition">
                      <Star
                        size={16}
                        className={
                          item.favorite
                            ? 'fill-accent-gold text-accent-gold'
                            : 'text-text-secondary'
                        }
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
