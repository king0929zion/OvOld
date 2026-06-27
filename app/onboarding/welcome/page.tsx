import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PagePanel } from "@/components/ui/page-panel";

export default function WelcomePage() {
  return (
    <div className="flex-1 flex flex-col pt-20 h-full">
      <div className="px-6 flex flex-col mb-10">
        <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-6">
          <ShieldCheck size={32} strokeWidth={2} className="text-black" />
        </div>
        <h1 className="text-[48px] font-semibold leading-[1.1] mb-4">
          安全<br />通讯
        </h1>
        <p className="text-[20px] text-text-secondary">
          你的身份由你掌控
        </p>
      </div>

      <PagePanel className="mt-auto px-6 pt-10 pb-12 flex flex-col gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Link
          href="/onboarding/options"
          className="h-16 bg-black text-white rounded-[999px] flex items-center justify-center text-[18px] font-semibold active:scale-[0.98] transition-transform"
        >
          开始使用
        </Link>
        <Link
          href="/onboarding/restore"
          className="h-16 bg-transparent border-2 border-border-soft text-text-main rounded-[999px] flex items-center justify-center text-[18px] font-semibold active:scale-[0.98] transition-transform"
        >
          从备份恢复
        </Link>
        
        <p className="text-center text-[13px] text-text-muted mt-4 font-medium">
          阅读隐私说明，了解您的数据如何受到保护
        </p>
      </PagePanel>
    </div>
  );
}
