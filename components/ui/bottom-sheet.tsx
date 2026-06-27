"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        setMounted(true);
      }, 0);
    } else {
      timeoutId = setTimeout(() => {
        setMounted(false);
      }, 300); // Wait for transition
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  return (
    <div className={cn("fixed inset-0 z-[100] flex flex-col justify-end transition-opacity duration-300", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative w-full bg-surface rounded-t-[34px] p-6 pb-12 shadow-2xl transition-transform duration-300", isOpen ? "translate-y-0" : "translate-y-full")}>
        <div className="w-12 h-1.5 bg-border-soft rounded-full mx-auto mb-6" />
        {title && <h3 className="text-[20px] font-semibold text-center mb-6 text-text-main">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
