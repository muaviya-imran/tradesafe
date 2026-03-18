import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import PlayerCard from "@/components/player-card";
import FeaturedGame from "@/components/featured-game";
import StatsPanel from "@/components/stats-panel";
import MarketWatchlist from "@/components/market-watchlist";

const mockPlayers = [
  {
    playerName: "LeBron James",
    team: "Los Angeles Lakers",
    position: "SF",
    stats: { points: 28, rebounds: 7, assists: 5 },
    form: "hot" as const,
  },
  {
    playerName: "Kevin Durant",
    team: "Phoenix Suns",
    position: "SF",
    stats: { points: 31, rebounds: 6, assists: 3 },
    form: "hot" as const,
  },
  {
    playerName: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    position: "PF",
    stats: { points: 29, rebounds: 12, assists: 5 },
    form: "hot" as const,
  },
  {
    playerName: "Jayson Tatum",
    team: "Boston Celtics",
    position: "SF",
    stats: { points: 26, rebounds: 8, assists: 4 },
    form: "neutral" as const,
  },
  {
    playerName: "Luka Doncic",
    team: "Dallas Mavericks",
    position: "PG",
    stats: { points: 32, rebounds: 9, assists: 8 },
    form: "hot" as const,
  },
  {
    playerName: "Stephen Curry",
    team: "Golden State Warriors",
    position: "PG",
    stats: { points: 27, rebounds: 4, assists: 6 },
    form: "neutral" as const,
  },
];

const mockWatchlist = [
  {
    id: "1",
    playerName: "LeBron James",
    team: "LAL",
    price: 145.5,
    change: 5.2,
    volume: "2.3M",
    favorite: true,
  },
  {
    id: "2",
    playerName: "Kevin Durant",
    team: "PHX",
    price: 168.3,
    change: 3.8,
    volume: "1.9M",
    favorite: true,
  },
  {
    id: "3",
    playerName: "Giannis Antetokounmpo",
    team: "MIL",
    price: 156.7,
    change: 7.1,
    volume: "2.7M",
    favorite: false,
  },
  {
    id: "4",
    playerName: "Jayson Tatum",
    team: "BOS",
    price: 138.2,
    change: -2.3,
    volume: "1.5M",
    favorite: false,
  },
  {
    id: "5",
    playerName: "Luka Doncic",
    team: "DAL",
    price: 172.9,
    change: 8.5,
    volume: "3.2M",
    favorite: true,
  },
];

const marketStats = [
  {
    label: "Market Cap",
    value: "$24.5B",
    change: 5.2,
    trend: "up" as const,
  },
  {
    label: "24h Volume",
    value: "$8.2B",
    change: 3.1,
    trend: "up" as const,
  },
  {
    label: "Active Traders",
    value: "125.4K",
    change: 12.5,
    trend: "up" as const,
  },
  {
    label: "Market Index",
    value: "4,825",
    change: 2.8,
    trend: "up" as const,
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-bg-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Top Section: Featured Game + Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Game - Takes 2 columns */}
              <div className="lg:col-span-2">
                <FeaturedGame
                  team1="Los Angeles Lakers"
                  team2="Boston Celtics"
                  score1={118}
                  score2={112}
                  time="Today 8:00 PM"
                />
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <div className="bg-bg-tertiary border border-border-light rounded-lg p-4 hover:border-accent-orange transition">
                  <p className="text-text-secondary text-xs mb-1">
                    Your Portfolio
                  </p>
                  <p className="text-accent-orange font-bold text-2xl">
                    $45,250
                  </p>
                  <p className="text-green-500 text-xs mt-2">+12.5% today</p>
                </div>
                <div className="bg-bg-tertiary border border-border-light rounded-lg p-4 hover:border-accent-orange transition">
                  <p className="text-text-secondary text-xs mb-1">
                    Total Trades
                  </p>
                  <p className="text-accent-orange font-bold text-2xl">847</p>
                  <p className="text-text-secondary text-xs mt-2">
                    Win Rate: 68%
                  </p>
                </div>
              </div>
            </div>

            {/* Market Stats Panel */}
            <StatsPanel
              title="Market Overview"
              stats={marketStats}
              columns={4}
            />

            {/* Hot Players Section */}
            <div>
              <h2 className="text-text-primary font-bold text-xl mb-4">
                Hot Players
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {mockPlayers.map((player, index) => (
                  <PlayerCard key={index} {...player} />
                ))}
              </div>
            </div>

            {/* Market Watchlist */}
            <MarketWatchlist items={mockWatchlist} title="Market Watchlist" />

            {/* Additional Featured Games */}
            <div>
              <h2 className="text-text-primary font-bold text-xl mb-4">
                Today&apos;s Games
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                <FeaturedGame
                  team1="Golden State Warriors"
                  team2="Denver Nuggets"
                  time="Today 7:30 PM"
                />
                <FeaturedGame
                  team1="Miami Heat"
                  team2="New York Knicks"
                  time="Today 7:00 PM"
                />
                <FeaturedGame
                  team1="Chicago Bulls"
                  team2="Toronto Raptors"
                  time="Today 8:30 PM"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
