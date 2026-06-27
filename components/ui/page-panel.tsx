import { cn } from "@/lib/utils";

interface PagePanelProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function PagePanel({ children, className, noPadding = false }: PagePanelProps) {
  return (
    <div
      className={cn(
        "flex-1 bg-surface w-full rounded-t-[34px] shadow-sm flex flex-col overflow-hidden relative",
        !noPadding && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
