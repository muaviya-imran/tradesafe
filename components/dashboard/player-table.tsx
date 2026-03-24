'use client';

interface PlayerTableItem {
  id: string;
  playerName: string;
  salary: number;
  yearsLeft: number;
  capHold: string;
  birdRights: string;
}

export default function PlayerTable() {
  const mockPlayerList: PlayerTableItem[] = [
    {
      id: '1',
      playerName: 'LeBron James',
      salary: 145.5,
      yearsLeft: 5.2,
      capHold: '22.3M',
      birdRights: 'Full',
    },
    {
      id: '2',
      playerName: 'Kevin Durant',
      salary: 168.3,
      yearsLeft: 3.8,
      capHold: '1.9M',
      birdRights: 'Partial',
    },
    {
      id: '3',
      playerName: 'Giannis Mod',
      salary: 156.7,
      yearsLeft: 7.1,
      capHold: 'N/A',
      birdRights: 'Full',
    },
    {
      id: '4',
      playerName: 'Jayson Tatum',
      salary: 138.2,
      yearsLeft: 1,
      capHold: '1.5M',
      birdRights: 'Non-Bird',
    },
    {
      id: '5',
      playerName: 'Luka Doncic',
      salary: 172.9,
      yearsLeft: 2,
      capHold: '3.2M',
      birdRights: 'Full',
    },
  ];

  const TableHeaders = ['Player', 'Salary', 'Years Left', 'Cap Hold', 'Bird Rights'];
  return (
    <div className="bg-bg-tertiary border-border-light overflow-hidden rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-border-light border-b">
              {TableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="text-text-secondary px-6 py-3 text-left text-xs font-bold uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockPlayerList.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="border-border-light text-text-secondary hover:bg-bg-light cursor-pointer border-b text-sm transition"
                >
                  <td className="px-6 py-4">
                    <p className="text-text-primary text-sm font-semibold">{item.playerName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-accent-orange">${item.salary.toFixed(2)}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item.yearsLeft}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="">{item.capHold}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item.birdRights}</p>
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
