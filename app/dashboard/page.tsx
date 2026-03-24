'use client';

import { useState } from 'react';

import Navbar from '@/components/dashboard/navbar';
import Stats from '@/components/dashboard/stats';
import PlayerTable from '@/components/dashboard/player-table';
import LiveTweets from '@/components/dashboard/live-tweets';
import AIChat from '@/components/dashboard/ai-chat';
import { Bot } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [currentTabId, setCurrentTabId] = useState(1);
  return (
    <div className="bg-bg-primary space-y-6 p-4">
      <h2 className="text-text-primary flex items-center justify-between px-3 pt-3 text-lg font-bold">
        <span>TradeSafe AI</span>
        <Link href="/chat" className="cursor-pointer rounded-full bg-white/5 p-2">
          <Bot />
        </Link>
      </h2>
      <Navbar setCurrentTabId={setCurrentTabId} currentTabId={currentTabId} />
      <div className="mx-auto w-full max-w-7xl space-y-4">
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
