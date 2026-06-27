"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Ellipsis, ShieldCheck, MessageCircle, Phone, Video, UserRoundPlus, Smartphone, UsersRound, Ban, ShieldQuestion } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";
import { Dialog } from "@/components/ui/dialog";

export default function ContactDetailPage() {
  const [showSasDialog, setShowSasDialog] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto pt-14 pb-12 relative">
      <div className="px-6 flex justify-between items-center mb-8">
        <Link href="/main/contacts">
          <CircleBtn as="div">
            <ChevronLeft size={24} />
          </CircleBtn>
        </Link>
        <CircleBtn>
          <Ellipsis size={24} />
        </CircleBtn>
      </div>

      <div className="px-6 flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-black/10 flex items-center justify-center text-[36px] font-bold text-text-main mb-4 shadow-sm">
          A
        </div>
        <h1 className="text-[32px] font-semibold text-text-main">Alice Cooper</h1>
      </div>

      <div className="px-4 mb-8" onClick={() => setShowSasDialog(true)}>
        <ColorCard
          className="active:scale-[0.98] transition-transform cursor-pointer"
          color="surface-soft"
          title="身份已验证"
          subtitle="点击查看 SAS 安全码"
          icon={<ShieldCheck size={28} className="text-black" />}
        />
      </div>

      <div className="px-6 flex gap-3 mb-10">
        <Link href="/chat/alice" className="flex-1 h-14 bg-black text-white rounded-full flex items-center justify-center gap-2 font-semibold active:scale-[0.98] transition-transform shadow-md">
          <MessageCircle size={20} />
          发送消息
        </Link>
        <button className="w-14 h-14 bg-surface-muted rounded-full flex items-center justify-center text-text-main active:scale-[0.95] transition-transform shrink-0">
          <Phone size={24} />
        </button>
        <button className="w-14 h-14 bg-surface-muted rounded-full flex items-center justify-center text-text-main active:scale-[0.95] transition-transform shrink-0">
          <Video size={24} />
        </button>
      </div>

      <PagePanel className="flex-1" noPadding>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center gap-4 py-4 px-2 active:opacity-70 transition-opacity">
            <Smartphone className="text-text-secondary" size={24} />
            <div className="flex-1 flex flex-col">
              <span className="text-[18px] font-medium text-text-main">身份详情</span>
              <span className="text-[14px] text-text-secondary">查看 SAS 及公钥</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 py-4 px-2 active:opacity-70 transition-opacity">
            <UsersRound className="text-text-secondary" size={24} />
            <div className="flex-1 flex flex-col">
              <span className="text-[18px] font-medium text-text-main">共同群组</span>
              <span className="text-[14px] text-text-secondary">设计团队</span>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 px-2 active:opacity-70 transition-opacity mt-4">
            <UserRoundPlus className="text-text-secondary" size={24} />
            <div className="flex-1 flex flex-col">
              <span className="text-[18px] font-medium text-text-main">引荐联系人</span>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 px-2 mt-2 text-danger active:opacity-70 transition-opacity">
            <Ban size={24} />
            <div className="flex-1 flex flex-col">
              <span className="text-[18px] font-medium">拉黑联系人</span>
            </div>
          </div>
        </div>
      </PagePanel>

      <Dialog 
        isOpen={showSasDialog}
        onClose={() => setShowSasDialog(false)}
        icon={<ShieldQuestion size={32} />}
        title="验证联系人"
        description="请通过其他安全渠道与 Alice 核对以下验证码。"
        code="6294"
        primaryAction="确认匹配"
        onPrimaryAction={() => setShowSasDialog(false)}
        secondaryAction="取消"
      />
    </div>
  );
}
