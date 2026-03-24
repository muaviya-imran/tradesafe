'use client';

import { useState } from 'react';

import Navbar from '@/components/dashboard/navbar';
import Stats from '@/components/dashboard/stats';
import PlayerTable from '@/components/dashboard/player-table';
import LiveTweets from '@/components/dashboard/live-tweets';
import AIChat from '@/components/dashboard/ai-chat';

export default function Dashboard() {
  const [currentTabId, setCurrentTabId] = useState(1);
  return (
    <div className="bg-bg-primary space-y-6 p-4">
      <Navbar setCurrentTabId={setCurrentTabId} currentTabId={currentTabId} />
      <div className="mx-auto w-full max-w-350 space-y-4">
        <Stats />
        <div className="flex gap-4">
          <PlayerTable />
          <LiveTweets />
          <AIChat />
        </div>
      </div>
    </div>
  );
}
