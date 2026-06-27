"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, UsersRound, ShieldAlert, ShieldCheck, UserRoundPlus, ScanLine } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";
import { BottomSheet } from "@/components/ui/bottom-sheet";

export default function ChatsPage() {
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);

  const tabs = [
    { id: "inbox", label: "收件箱", href: "/main/chats" },
    { id: "secure", label: "安全", href: "/main/chats/secure" },
  ];

  return (
    <div className="flex-1 flex flex-col pt-14 h-full pb-24 overflow-y-auto">
      <div className="px-6 flex justify-between items-center mb-6">
        <SegmentedPills tabs={tabs} />
        <CircleBtn onClick={() => setIsAddSheetOpen(true)}>
          <Plus size={24} />
        </CircleBtn>
      </div>

      <div className="px-4 mb-6">
        <HeroMetric
          subtitle="星期二"
          value="13"
          label="未读消息"
          summaryTitle="12 个对话"
          summaryLine1="3 个待处理邀请"
          summaryLine2="已端到端加密"
        />
      </div>

      <PagePanel className="flex-1 pb-24">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[20px] font-semibold">最近对话</h3>
          <button className="text-text-muted font-medium text-[16px] active:opacity-70">搜索</button>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/chat/alice" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="yellow"
              title="Alice Cooper"
              subtitle="我们今天在哪里见面？"
              icon={<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[18px] font-bold">A</div>}
              bottomText="上午 10:42"
              bottomIcon={<div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-bold">3</div>}
            />
          </Link>

          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="green"
              title="设计团队"
              subtitle="Bob: 我更新了设计稿。"
              icon={<UsersRound size={28} className="opacity-80" />}
              bottomText="昨天"
              bottomIcon={null}
            />
          </Link>

          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="purple"
              title="Charlie (待验证)"
              subtitle="等待身份验证完成"
              icon={<ShieldAlert size={28} className="opacity-80" />}
              bottomText="星期一"
            />
          </Link>

          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="blue"
              title="Dave Smith"
              subtitle="好的，到时候见。"
              icon={<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[18px] font-bold">D</div>}
              bottomText="星期日"
              bottomIcon={<ShieldCheck size={16} className="opacity-70" />}
            />
          </Link>
        </div>
      </PagePanel>

      <BottomSheet isOpen={isAddSheetOpen} onClose={() => setIsAddSheetOpen(false)} title="新建通讯">
        <div className="flex flex-col gap-3">
          <Link href="#" onClick={() => setIsAddSheetOpen(false)} className="flex items-center gap-4 bg-surface-soft p-4 rounded-[24px] active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <UserRoundPlus size={24} />
            </div>
            <span className="text-[18px] font-semibold text-text-main">添加联系人</span>
          </Link>
          <Link href="#" onClick={() => setIsAddSheetOpen(false)} className="flex items-center gap-4 bg-surface-soft p-4 rounded-[24px] active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <UsersRound size={24} />
            </div>
            <span className="text-[18px] font-semibold text-text-main">创建新群组</span>
          </Link>
          <Link href="#" onClick={() => setIsAddSheetOpen(false)} className="flex items-center gap-4 bg-surface-soft p-4 rounded-[24px] active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <ScanLine size={24} />
            </div>
            <span className="text-[18px] font-semibold text-text-main">扫一扫</span>
          </Link>
        </div>
      </BottomSheet>
    </div>
  );
}
