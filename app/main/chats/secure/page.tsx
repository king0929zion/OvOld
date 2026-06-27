"use client";

import { ShieldCheck, ShieldAlert, Smartphone, DatabaseBackup, Plus } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";

export default function ChatsSecurePage() {
  const tabs = [
    { id: "inbox", label: "收件箱", href: "/main/chats" },
    { id: "secure", label: "安全", href: "/main/chats/secure" },
  ];

  return (
    <div className="flex-1 flex flex-col pt-14 h-full pb-24 overflow-y-auto">
      <div className="px-6 flex justify-between items-center mb-6">
        <SegmentedPills tabs={tabs} />
        <CircleBtn>
          <Plus size={24} />
        </CircleBtn>
      </div>

      <div className="px-4 mb-6">
        <HeroMetric
          subtitle="安全概览"
          value="04"
          label="重要提醒"
          summaryTitle="身份状态正常"
          summaryLine1="备份未开启"
          summaryLine2="所有对话已加密"
        />
      </div>

      <PagePanel className="flex-1 pb-24">
        <div className="flex flex-col gap-3">
          <ColorCard
            color="surface-soft"
            title="身份已验证"
            subtitle="您的密钥处于安全状态"
            icon={<ShieldCheck size={28} className="text-black" />}
            bottomText="刚刚"
          />

          <ColorCard
            color="yellow"
            title="2 个联系人待验证"
            subtitle="等待 SAS 身份确认"
            icon={<ShieldAlert size={28} className="opacity-80" />}
            bottomText="需要您的操作"
          />

          <ColorCard
            color="pink"
            title="备份未开启"
            subtitle="您的数据尚未备份"
            icon={<DatabaseBackup size={28} className="opacity-80" />}
            bottomText="前往设置开启"
          />

          <ColorCard
            color="surface-soft"
            title="2 台设备在线"
            subtitle="上次同步：2小时前"
            icon={<Smartphone size={28} className="opacity-80" />}
          />
        </div>
      </PagePanel>
    </div>
  );
}
