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
    <div className="flex-1 flex flex-col pt-10 h-full">
      <div className="px-6 flex flex-col mb-6">
        <Link href="/onboarding/options" className="block mb-4">
          <CircleBtn as="div">
            <ChevronLeft size={22} />
          </CircleBtn>
        </Link>
        <div className="px-2">
          <h1 className="text-[38px] font-semibold leading-[1.15] mb-6 tracking-tight">
            创建<br />身份
          </h1>
        </div>

        <div className="self-center flex flex-col items-center">
          <button className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mb-2.5 text-text-secondary active:opacity-70 transition-opacity border border-black/5">
            <Camera size={28} />
          </button>
          <span className="text-[14px] font-medium text-text-secondary">更换头像</span>
        </div>
      </div>

      <PagePanel className="mt-auto px-6 pt-8 flex flex-col gap-4 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        <div>
          <label className="text-[13px] font-medium text-text-secondary ml-2 mb-1.5 block">名字</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="例如：Zion"
            className="w-full h-14 bg-white border border-black/5 rounded-[20px] px-5 text-[17px] font-medium focus:outline-none focus:ring-1 focus:ring-black placeholder:text-text-muted transition-shadow"
          />
        </div>
        
        <div>
          <label className="text-[13px] font-medium text-text-secondary ml-2 mb-1.5 block">姓氏 (可选)</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="例如：Mu"
            className="w-full h-14 bg-white border border-black/5 rounded-[20px] px-5 text-[17px] font-medium focus:outline-none focus:ring-1 focus:ring-black placeholder:text-text-muted transition-shadow"
          />
        </div>

        <div className="flex items-center gap-3 bg-surface p-3.5 rounded-[20px] mt-2 border border-black/5">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0">
            <UserRound size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-text-muted font-medium mb-0.5">其他人会看到：</span>
            <span className="text-[15px] font-semibold leading-none">{displayName}</span>
          </div>
        </div>

        <div className="mt-auto pb-12 pt-4">
          <Link 
            href="/lock"
            className="h-14 w-full bg-black text-white rounded-[24px] flex items-center justify-center text-[17px] font-medium active:scale-[0.98] transition-transform"
          >
            完成创建
          </Link>
        </div>
      </PagePanel>
    </div>
  );
}
