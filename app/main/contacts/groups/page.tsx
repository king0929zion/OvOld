"use client";

import Link from "next/link";
import { Plus, UsersRound, MessageCircle, Shield } from "lucide-react";
import { CircleBtn } from "@/components/ui/circle-btn";
import { SegmentedPills } from "@/components/ui/segmented-pills";
import { HeroMetric } from "@/components/ui/hero-metric";
import { PagePanel } from "@/components/ui/page-panel";
import { ColorCard } from "@/components/ui/color-card";

export default function ContactsGroupsPage() {
  const tabs = [
    { id: "people", label: "联系人", href: "/main/contacts" },
    { id: "groups", label: "群组", href: "/main/contacts/groups" },
  ];

  return (
    <div className="flex-1 flex flex-col pt-14 h-full pb-24 overflow-y-auto">
      <div className="px-6 flex justify-between items-center mb-6">
        <SegmentedPills tabs={tabs} />
        <Link href="#">
          <CircleBtn as="div">
            <Plus size={24} />
          </CircleBtn>
        </Link>
      </div>

      <div className="px-4 mb-6">
        <HeroMetric
          subtitle="群组"
          value="03"
          label="活跃群组"
          summaryTitle="14 位成员"
          summaryLine1="2 个新邀请"
        />
      </div>

      <PagePanel className="flex-1 pb-24">
        <div className="flex flex-col gap-3">
          <Link href="#" className="active:scale-[0.98] transition-transform block">
            <ColorCard
              color="green"
              title="设计团队"
              subtitle="12 位成员"
              icon={<UsersRound size={28} className="opacity-80" />}
              bottomText="3 条未读"
              bottomIcon={<MessageCircle size={16} className="opacity-80" />}
            />
          </Link>

          <ColorCard
            color="blue"
            title="家庭群组"
            subtitle="4 位成员"
            icon={<UsersRound size={28} className="opacity-80" />}
            bottomText="暂无新消息"
          />

          <ColorCard
            color="yellow"
            title="周末旅行"
            subtitle="等待加入邀请"
            icon={<Shield size={28} className="opacity-80" />}
            bottomText="点击确认加入"
          />
        </div>
      </PagePanel>
    </div>
  );
}
