import { cn } from "@/lib/utils";

interface CircleBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: "button" | "div";
}

export function CircleBtn({ children, className, as = "button", ...props }: CircleBtnProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "w-[44px] h-[44px] rounded-full bg-surface-muted border border-black/5 flex items-center justify-center text-text-main shrink-0 transition-transform active:scale-95",
        className
      )}
      {...(props as any)}
    >
      {children}
    </Comp>
  );
}
