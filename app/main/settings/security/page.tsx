"use client";

import Link from "next/link";
import { Lock, ShieldCheck, EyeOff, KeyRound, Ellipsis } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";

export default function SettingsSecurityPage() {
  const tabs = [
    { id: "identity", label: "身份", href: "/main/settings" },
    { id: "security", label: "安全", href: "/main/settings/security" },
  ];

  return (
    <div className="flex-1 flex flex-col pt-14 h-full pb-24 overflow-y-auto">
      <div className="px-6 flex justify-between items-center mb-6">
        <SegmentedPills tabs={tabs} />
        <CircleBtn>
          <Ellipsis size={24} />
        </CircleBtn>
      </div>

      <div className="px-4 mb-6">
        <HeroMetric
          subtitle="安全中心"
          value="正常"
          label="系统状态"
          summaryTitle="应用锁已启用"
          summaryLine1="隐私保护中"
        />
      </div>

      <PagePanel className="flex-1 pb-24">
        <div className="flex flex-col gap-3">
          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="surface-soft"
              title="应用锁"
              subtitle="PIN 码及生物识别解锁"
              icon={<Lock size={28} className="opacity-80" />}
              bottomText="已启用"
            />
          </Link>

          <ColorCard
            color="surface-soft"
            title="隐私设置"
            subtitle="已读回执、正在输入状态"
            icon={<EyeOff size={28} className="opacity-80" />}
          />
          
          <ColorCard
            color="surface-soft"
            title="验证密钥"
            subtitle="管理您的加密密钥"
            icon={<KeyRound size={28} className="opacity-80" />}
          />
        </div>
      </PagePanel>
    </div>
  );
}
