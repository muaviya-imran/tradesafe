import { ChevronDownIcon, ChevronRightIcon } from "@/components/icons";
import Image from "next/image";

export default function Dashboard() {
  const RolesList = [
    { name: "Analytics Team", icon: "/icons/analytics.svg" },
    { name: "Front Office Team", icon: "/icons/front_office.svg" },
    { name: "Coaching Staff", icon: "/icons/coaching.svg" },
    { name: "Player Health & Performance", icon: "/icons/player_health.svg" },
    { name: "Finance", icon: "/icons/finance.svg" },
    { name: "Legal", icon: "/icons/legal.svg" },
    { name: "Information Technology", icon: "/icons/information_tech.svg" },
  ];
  return (
    <div className="grid grid-cols-2  h-screen bg-bg-primary">
      {/* Left side */}
      <div className="relative h-full">
        <Image src="/sports.png" alt="Sports" fill className="object-fill" />
      </div>

      {/* Right side */}
      <div className="flex items-center flex-col justify-center h-full px-14 py-8">
        <div className="flex font-roboto items-center justify-between w-full">
          <h1 className="text-5xl font-bold  mb-4 text-center">TradeSafe AI</h1>
          <div className="flex items-center gap-4">
            <Image
              src="/profile.svg"
              alt="User Avatar"
              width={58}
              height={58}
              className="rounded-full"
            />
            <span className="font-medium text-lg ">Jane Doe</span>
            <div className="cursor-pointer">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col justify-center">
          <p className="text-3xl">Select your role</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {RolesList.map((role, index) => (
              <div
                key={role.name}
                className={`flex border rounded-lg px-4 py-2 items-center gap-4 bg-white/5 justify-between cursor-pointer hover:bg-white/10 transition ${index === RolesList.length - 1 ? "col-span-2 w-1/2 mx-auto justify-between" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={role.icon}
                    alt={role.name}
                    width={32}
                    height={32}
                    className="border-border-light p-1 rounded border bg-white/10"
                  />
                  <p>{role.name}</p>
                </div>
                <ChevronRightIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
