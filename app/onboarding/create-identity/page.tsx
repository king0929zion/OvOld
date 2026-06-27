"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Camera, UserRound } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { PagePanel } from "@/components/ui/page-panel";

export default function CreateIdentityPage() {
  const [firstName, setFirstName] = useState("Zion");
  const [lastName, setLastName] = useState("Mu");
  
  const displayName = [firstName, lastName].filter(Boolean).join(" ") || "未命名";

  return (
    <div className="flex-1 flex flex-col pt-14 h-full">
      <div className="px-6 flex flex-col mb-8">
        <Link href="/onboarding/options" className="block mb-6">
          <CircleBtn as="div">
            <ChevronLeft size={24} />
          </CircleBtn>
        </Link>
        <h1 className="text-[42px] font-semibold leading-[1.1] mb-8">
          创建<br />身份
        </h1>

        <div className="self-center flex flex-col items-center">
          <button className="w-24 h-24 bg-surface-muted rounded-full flex items-center justify-center mb-3 text-text-secondary active:opacity-70 transition-opacity">
            <Camera size={32} />
          </button>
          <span className="text-[15px] font-medium text-text-secondary">更换头像</span>
        </div>
      </div>

      <PagePanel className="mt-auto px-6 pt-10 flex flex-col gap-5 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div>
          <label className="text-[14px] font-semibold text-text-secondary ml-4 mb-2 block">名字</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="例如：Zion"
            className="w-full h-16 bg-bg-deep rounded-[20px] px-6 text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-black placeholder:text-text-muted transition-shadow"
          />
        </div>
        
        <div>
          <label className="text-[14px] font-semibold text-text-secondary ml-4 mb-2 block">姓氏 (可选)</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="例如：Mu"
            className="w-full h-16 bg-bg-deep rounded-[20px] px-6 text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-black placeholder:text-text-muted transition-shadow"
          />
        </div>

        <div className="flex items-center gap-3 bg-surface-soft p-4 rounded-[20px] mt-2">
          <UserRound size={24} className="text-text-secondary shrink-0" />
          <span className="text-[15px] text-text-secondary font-medium">其他人会看到：<strong className="text-black">{displayName}</strong></span>
        </div>

        <div className="mt-auto pb-12 pt-4">
          <Link
            href="/lock"
            className="h-16 w-full bg-black text-white rounded-[999px] flex items-center justify-center text-[18px] font-semibold active:scale-[0.98] transition-transform"
          >
            完成创建
          </Link>
        </div>
      </PagePanel>
    </div>
  );
}
