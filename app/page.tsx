import { ChevronDownIcon, ChevronRightIcon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import SportsImage from '@/app/assets/sports.webp';

export default function Dashboard2() {
  const RolesList = [
    { name: 'Analytics Team', icon: '/icons/analytics.svg' },
    { name: 'Front Office Team', icon: '/icons/front_office.svg' },
    { name: 'Coaching Staff', icon: '/icons/coaching.svg' },
    { name: 'Player Health & Performance', icon: '/icons/player_health.svg' },
    { name: 'Finance', icon: '/icons/finance.svg' },
    { name: 'Legal', icon: '/icons/legal.svg' },
    { name: 'Information Technology', icon: '/icons/information_tech.svg' },
  ];
  return (
    <div className="bg-bg-primary grid h-screen grid-cols-2">
      {/* Left side */}
      <div className="relative h-full">
        <Image
          src={SportsImage}
          alt="Sports"
          fill
          sizes="50vw"
          className="object-fill"
          priority
          placeholder="blur"
          quality={85}
        />
      </div>

      {/* Right side */}
      <div className="flex h-full flex-col items-center justify-center px-14 py-8">
        <div className="font-roboto flex w-full items-center justify-between">
          <h1 className="mb-4 text-center text-5xl font-bold">TradeSafe AI</h1>
          <div className="flex items-center gap-4">
            <Image
              src="/profile.svg"
              alt="User Avatar"
              width={58}
              height={58}
              className="rounded-full"
            />
            <span className="text-lg font-medium">Jane Doe</span>
            <div className="cursor-pointer">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col justify-center">
          <p className="text-3xl">Select your role</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {RolesList.map((role, index) => (
              <Link
                key={role.name}
                href="/dashboard"
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg border bg-white/5 px-4 py-2 transition hover:bg-white/10 ${index === RolesList.length - 1 ? 'col-span-2 mx-auto w-1/2 justify-between' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={role.icon}
                    alt={role.name}
                    width={32}
                    height={32}
                    className="border-border-light rounded border bg-white/10 p-1"
                  />
                  <p>{role.name}</p>
                </div>
                <ChevronRightIcon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
