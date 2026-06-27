import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PagePanel } from "@/components/ui/page-panel";

export default function WelcomePage() {
  return (
    <div className="flex-1 flex flex-col pt-16 h-full">
      <div className="px-8 flex flex-col mb-10">
        <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-6 border border-black/5">
          <ShieldCheck size={28} strokeWidth={2} className="text-black" />
        </div>
        <h1 className="text-[40px] font-semibold leading-[1.15] mb-3 tracking-tight">
          安全<br />通讯
        </h1>
        <p className="text-[18px] text-text-secondary font-medium">
          你的身份由你掌控
        </p>
      </div>

      <PagePanel className="mt-auto px-6 pt-10 pb-12 flex flex-col gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        <Link
          href="/onboarding/options"
          className="h-14 bg-black text-white rounded-[24px] flex items-center justify-center text-[17px] font-medium active:scale-[0.98] transition-transform"
        >
          开始使用
        </Link>
        <Link
          href="/onboarding/restore"
          className="h-14 bg-surface-muted text-text-main rounded-[24px] flex items-center justify-center text-[17px] font-medium active:scale-[0.98] transition-transform border border-black/5"
        >
          从备份恢复
        </Link>
        
        <p className="text-center text-[13px] text-text-muted mt-5 font-medium px-4 leading-relaxed">
          阅读隐私说明，了解您的数据如何受到保护
        </p>
      </PagePanel>
    </div>
  );
}
