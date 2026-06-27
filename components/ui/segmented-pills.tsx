"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TabItem {
  id: string;
  label: string;
  href: string;
}

interface SegmentedPillsProps {
  tabs: TabItem[];
}

export function SegmentedPills({ tabs }: SegmentedPillsProps) {
  const pathname = usePathname();

  return (
    <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "h-12 px-6.5 rounded-full border border-border-soft flex items-center justify-center text-text-secondary font-semibold whitespace-nowrap transition-colors",
              isActive && "bg-black text-white border-black"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
