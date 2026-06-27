"use client";

import Link from "next/link";
import { Plus, ShieldCheck, ShieldAlert } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";

export default function ContactsPage() {
  const tabs = [
    { id: "people", label: "联系人", href: "/main/contacts" },
    { id: "groups", label: "群组", href: "/main/contacts/groups" },
  ];

  return (
    <div className="flex-1 flex flex-col pt-14 h-full pb-24 overflow-y-auto">
      <div className="px-6 flex justify-between items-center mb-6">
        <SegmentedPills tabs={tabs} />
        <Link href="/contact/add">
          <CircleBtn as="div">
            <Plus size={24} />
          </CircleBtn>
        </Link>
      </div>

      <div className="px-4 mb-6">
        <HeroMetric
          subtitle="通讯录"
          value="48"
          label="位联系人"
          summaryTitle="42 已验证"
          summaryLine1="3 待验证"
          summaryLine2="3 个群组"
        />
      </div>

      <PagePanel className="flex-1 pb-24">
        <div className="flex flex-col gap-3">
          <Link href="/contact/alice" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="surface-soft"
              title="Alice Cooper"
              subtitle="身份已验证"
              icon={<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[18px] font-bold">A</div>}
              bottomText="2 台受信任设备"
              bottomIcon={<ShieldCheck size={16} className="text-black" />}
            />
          </Link>

          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="purple"
              title="Charlie (待验证)"
              subtitle="等待身份确认"
              icon={<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[18px] font-bold">C</div>}
              bottomText="点击进行验证"
              bottomIcon={<ShieldAlert size={16} className="text-black" />}
            />
          </Link>

          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="surface-soft"
              title="Dave Smith"
              subtitle="身份已验证"
              icon={<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[18px] font-bold">D</div>}
              bottomText="1 台受信任设备"
              bottomIcon={<ShieldCheck size={16} className="text-black" />}
            />
          </Link>
        </div>
      </PagePanel>
    </div>
  );
}
