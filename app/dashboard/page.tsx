'use client';

import { useState } from 'react';

import Navbar from '@/components/dashboard/navbar';
import Stats from '@/components/dashboard/stats';

export default function Dashboard() {
  const [currentTabId, setCurrentTabId] = useState(1);
  return (
    <div className="bg-bg-primary space-y-6 p-4">
      <h2 className="text-text-primary px-3 py-3 text-lg font-bold">TradeSafe AI</h2>
      <Navbar setCurrentTabId={setCurrentTabId} currentTabId={currentTabId} />
      <div className="mx-auto w-full max-w-7xl">
        <Stats />
      </div>
    </div>
  );
}
