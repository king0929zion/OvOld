import Link from "next/link";
import { ChevronLeft, UserRoundPlus, DatabaseBackup, ScanLine, Smartphone } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { ColorCard } from "@/components/ui/color-card";

export default function OptionsPage() {
  return (
    <div className="flex-1 flex flex-col px-6 pt-14 pb-8 overflow-y-auto">
      <Link href="/onboarding/welcome" className="block mb-8">
        <CircleBtn as="div">
          <ChevronLeft size={24} />
        </CircleBtn>
      </Link>

      <div className="mb-10">
        <h1 className="text-[42px] font-semibold leading-[1.1] mb-2">
          安全<br />启动
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/onboarding/create-identity" className="active:scale-[0.98] transition-transform block">
          <ColorCard
            color="green"
            title="创建新身份"
            subtitle="设置您的私人档案"
            icon={<UserRoundPlus size={28} className="opacity-80" />}
          />
        </Link>

        <Link href="#" className="active:scale-[0.98] transition-transform block">
          <ColorCard
            color="surface-soft"
            title="从备份恢复"
            icon={<DatabaseBackup size={28} className="opacity-80" />}
          />
        </Link>

        <Link href="#" className="active:scale-[0.98] transition-transform block">
          <ColorCard
            color="surface-soft"
            title="扫描配置二维码"
            icon={<ScanLine size={28} className="opacity-80" />}
          />
        </Link>
        
        <Link href="#" className="active:scale-[0.98] transition-transform block">
          <ColorCard
            color="surface-soft"
            title="从其他设备转移"
            icon={<Smartphone size={28} className="opacity-80" />}
          />
        </Link>
      </div>
    </div>
  );
}
