import { Heart, MessageCircle, Repeat2 } from 'lucide-react';

export default function LiveTweets() {
  const mockTweets = [
    {
      id: '1',
      username: '@NBAInsider',
      content:
        'Breaking: Trade talks between Team A and Team B are heating up! Stay tuned for updates. #NBATrades',
      timestamp: '2 mins ago',
      favoriteCount: 120,
      retweetCount: 45,
      commentsCount: 30,
    },
    {
      id: '2',
      username: '@HoopsCentral',
      content:
        'Sources: Team C is exploring a potential trade for a star player. More details to come. #NBATradeRumors',
      timestamp: '10 mins ago',
      favoriteCount: 200,
      retweetCount: 80,
      commentsCount: 50,
    },
    {
      id: '3',
      username: '@BasketballNews',
      content:
        'Trade alert: Team D is in talks to acquire a veteran player from Team E. Stay tuned for updates. #NBATrades',
      timestamp: '30 mins ago',
      favoriteCount: 150,
      retweetCount: 60,
      commentsCount: 40,
    },
    {
      id: '4',
      username: '@NBAUpdates',
      content:
        'Rumor: Team F is considering a trade for a young prospect. Details are still emerging. #NBATrades',
      timestamp: '1 hour ago',
      favoriteCount: 180,
      retweetCount: 70,
      commentsCount: 35,
    },
    {
      id: '5',
      username: '@SportsCenter',
      content:
        'Breaking: Team G is in advanced talks to acquire a star player from Team H. Stay tuned for updates. #NBATrades',
      timestamp: '2 hours ago',
      favoriteCount: 250,
      retweetCount: 100,
      commentsCount: 60,
    },
  ];
  return (
    <div className="bg-bg-tertiary border-border-light flex-1 rounded-lg border p-2 transition">
      <div className="border-border-light mb-4 flex items-center justify-between border-b pb-2">
        <h2 className="text-text-primary font-bold">Live Tweets</h2>
        <span className="text-xs font-bold text-[green]">Live</span>
      </div>
      {mockTweets.map((tweet, index) => (
        <div
          key={tweet.id}
          className={`border-border-light mb-2 space-y-2 ${index === mockTweets.length - 1 ? '' : 'border-b pb-4'}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-accent-orange text-sm font-medium">{tweet.username}</p>
            <span className="text-text-secondary text-[10px]">{tweet.timestamp}</span>
          </div>
          <p className="text-text-primary text-sm">{tweet.content}</p>
          <div className="flex items-center gap-4">
            <span className="text-text-secondary flex items-center gap-1 text-xs">
              <Heart size={18} /> {tweet.favoriteCount}
            </span>
            <span className="text-text-secondary flex items-center gap-1 text-xs">
              <Repeat2 size={18} /> {tweet.retweetCount}
            </span>
            <span className="text-text-secondary flex items-center gap-1 text-xs">
              <MessageCircle size={18} /> {tweet.commentsCount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
