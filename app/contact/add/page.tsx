import Link from "next/link";
import { ChevronLeft, ScanLine, Link as LinkIcon, ShieldQuestion, UsersRound } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { ColorCard } from "@/components/ui/color-card";

export default function AddContactPage() {
  return (
    <div className="flex-1 flex flex-col px-6 pt-14 pb-8 overflow-y-auto">
      <Link href="/main/contacts" className="block mb-8">
        <CircleBtn as="div">
          <ChevronLeft size={24} />
        </CircleBtn>
      </Link>

      <div className="mb-10">
        <h1 className="text-[42px] font-semibold leading-[1.1] mb-2">
          添加<br />
          联系人
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <ColorCard
          className="active:scale-[0.98] transition-transform cursor-pointer"
          color="green"
          title="扫描二维码"
          subtitle="安全添加附近的联系人"
          icon={<ScanLine size={28} className="opacity-80" />}
        />

        <ColorCard
          className="active:scale-[0.98] transition-transform cursor-pointer"
          color="surface-soft"
          title="粘贴链接"
          subtitle="通过安全渠道收到的链接"
          icon={<LinkIcon size={28} className="opacity-80" />}
        />

        <ColorCard
          className="active:scale-[0.98] transition-transform cursor-pointer"
          color="surface-soft"
          title="SAS 邀请码"
          subtitle="手动输入验证码"
          icon={<ShieldQuestion size={28} className="opacity-80" />}
        />
        
        <ColorCard
          className="active:scale-[0.98] transition-transform cursor-pointer"
          color="surface-soft"
          title="他人引荐"
          subtitle="从共同所在的群组添加"
          icon={<UsersRound size={28} className="opacity-80" />}
        />
      </div>
    </div>
  );
}
