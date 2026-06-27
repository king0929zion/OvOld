import { BottomTabs } from "@/components/ui/bottom-tabs";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col h-full w-full relative">
      {children}
      <BottomTabs />
    </div>
  );
}
