"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, UsersRound, Settings } from "lucide-react";

export function BottomTabs() {
  const pathname = usePathname();

  const tabs = [
    { id: "chats", href: "/main/chats", icon: MessageCircle },
    { id: "contacts", href: "/main/contacts", icon: UsersRound },
    { id: "settings", href: "/main/settings", icon: Settings },
  ];

  return (
    <div className="fixed bottom-[14px] left-6 right-6 h-[54px] bg-surface rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center p-1 z-50 border border-black/5">
      <div className="grid grid-cols-3 w-full h-full gap-1">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "flex items-center justify-center rounded-full transition-colors h-full",
                isActive ? "bg-black text-white" : "text-text-muted hover:text-text-secondary"
              )}
            >
              <Icon size={24} strokeWidth={2} className="round-cap round-join" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
