"use client";

import Link from "next/link";
import { Bell, Phone, DatabaseBackup, HardDrive, Monitor, Wrench, CircleHelp, Palette, ChevronRight, Ellipsis } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";

export default function SettingsPage() {
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
          subtitle="Zion"
          value="Mu"
          label="个人档案"
          summaryTitle="身份状态正常"
          summaryLine1="备份未开启"
          summaryLine2="应用锁已启用"
        />
      </div>

      <PagePanel className="flex-1 pb-24" noPadding>
        <div className="flex flex-col p-4 gap-2">
          <Link href="#" className="flex items-center gap-4 bg-surface-soft p-4 rounded-[20px] active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-[20px] font-bold">
              Z
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-[17px] font-semibold text-text-main">Zion Mu</span>
              <span className="text-[14px] text-text-secondary">编辑个人资料与身份</span>
            </div>
            <ChevronRight size={20} className="text-text-muted" />
          </Link>

          <Link href="#" className="flex items-center gap-4 bg-card-pink/30 p-4 rounded-[20px] active:scale-[0.98] transition-transform mt-2">
            <div className="w-10 h-10 bg-card-pink text-white rounded-full flex items-center justify-center">
              <DatabaseBackup size={20} />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-[17px] font-semibold text-text-main">备份未开启</span>
              <span className="text-[14px] text-text-secondary">保护您的身份数据</span>
            </div>
            <ChevronRight size={20} className="text-text-muted" />
          </Link>

          <div className="flex flex-col gap-1 mt-4">
            <SettingsItem icon={<Bell />} title="通知设置" />
            <SettingsItem icon={<Palette />} title="外观设置" />
            <SettingsItem icon={<Phone />} title="通话与设备" />
            <SettingsItem icon={<HardDrive />} title="存储空间" />
            <SettingsItem icon={<Monitor />} title="桌面客户端" />
          </div>
          
          <div className="flex flex-col gap-1 mt-4">
            <SettingsItem icon={<Wrench />} title="故障排除" />
            <SettingsItem icon={<CircleHelp />} title="关于我们" />
          </div>
        </div>
      </PagePanel>
    </div>
  );
}

function SettingsItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Link href="#" className="flex items-center gap-4 py-4 px-2 active:opacity-70 transition-opacity">
      <div className="text-text-secondary">
        {icon}
      </div>
      <span className="flex-1 text-[17px] font-medium text-text-main">{title}</span>
      <ChevronRight size={20} className="text-text-muted" />
    </Link>
  );
}
