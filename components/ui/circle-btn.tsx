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
        "w-[50px] h-[50px] rounded-full bg-surface-muted flex items-center justify-center text-text-main shrink-0 transition-opacity active:opacity-70",
        className
      )}
      {...(props as any)}
    >
      {children}
    </Comp>
  );
}
