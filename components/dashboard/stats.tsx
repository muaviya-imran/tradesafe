export default function Stats() {
  const Stats = [
    { id: 1, title: 'Total Team Salary', value: '$172.0M' },
    { id: 2, title: 'Luxury Tax', value: '$170.0M' },
    { id: 3, title: 'Apron Distance', value: '$2.8M' },
    { id: 4, title: 'Open Roster Spots', value: 3 },
    { id: 5, title: 'Avg Player Efficiency', value: 21.4 },
    { id: 6, title: 'Projected Cap Space', value: '-$8.3M' },
    { id: 7, title: 'Pending Trade Counts', value: 4 },
    { id: 8, title: 'Contract Expiration Alerts', value: 5 },
  ];
  return (
    <div
      className={`grid gap-4`}
      style={{
        gridTemplateColumns: `repeat(4, 1fr)`,
      }}
    >
      {Stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-bg-tertiary border-border-light hover:border-accent-orange rounded-lg border p-4 transition"
        >
          <p className="text-text-secondary mb-2 text-xs">{stat.title}</p>
          <div className="flex items-center justify-between">
            <p className="text-accent-orange text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
