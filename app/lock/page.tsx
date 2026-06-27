"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Fingerprint, Delete } from "lucide-react";
import { PagePanel } from "@/components/ui/page-panel";
import { cn } from "@/lib/utils";

export default function LockPage() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handlePress = (num: number | string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => router.push("/main/chats"), 300);
      }
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex-1 flex flex-col pt-20 h-full bg-bg-deep">
      <div className="px-6 flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-3 text-white text-[20px] font-semibold">
          Z
        </div>
        <h2 className="text-[18px] font-semibold text-text-main mb-6">Zion Mu</h2>
        
        <h1 className="text-[28px] font-bold tracking-widest text-text-secondary mb-10">
          已锁定
        </h1>

        <div className="flex gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={cn(
                "w-3.5 h-3.5 rounded-full transition-all duration-300", 
                pin.length > i ? "bg-black scale-110" : "border-2 border-black/20"
              )} 
            />
          ))}
        </div>
      </div>

      <PagePanel className="mt-auto px-6 py-8 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]" noPadding>
        <div className="grid grid-cols-3 gap-y-4 h-full items-center pb-6 pt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              onClick={() => handlePress(num)}
              className="text-[28px] font-medium flex justify-center active:bg-surface-soft rounded-full w-20 h-20 items-center justify-self-center transition-colors"
            >
              {num}
            </button>
          ))}
          <button onClick={() => router.push("/main/chats")} className="flex justify-center active:bg-surface-soft rounded-full w-20 h-20 items-center justify-self-center transition-colors">
            <Fingerprint size={28} className="text-text-secondary" />
          </button>
          <button 
            onClick={() => handlePress(0)}
            className="text-[28px] font-medium flex justify-center active:bg-surface-soft rounded-full w-20 h-20 items-center justify-self-center transition-colors"
          >
            0
          </button>
          <button onClick={handleDelete} className="flex justify-center active:bg-surface-soft rounded-full w-20 h-20 items-center justify-self-center transition-colors">
            <Delete size={28} className="text-text-secondary" />
          </button>
        </div>
      </PagePanel>
    </div>
  );
}
