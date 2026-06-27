import { cn } from "@/lib/utils";

interface ColorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "yellow" | "green" | "blue" | "purple" | "pink" | "teal" | "olive" | "surface-soft";
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  bottomText?: string;
  bottomIcon?: React.ReactNode;
}

export function ColorCard({
  color = "surface-soft",
  title,
  subtitle,
  icon,
  bottomText,
  bottomIcon,
  className,
  ...props
}: ColorCardProps) {
  const colorClasses = {
    yellow: "bg-card-yellow",
    green: "bg-card-green",
    blue: "bg-card-blue",
    purple: "bg-card-purple",
    pink: "bg-card-pink",
    teal: "bg-card-teal",
    olive: "bg-card-olive",
    "surface-soft": "bg-surface-soft",
  };

  return (
    <div
      className={cn(
        "min-h-[128px] rounded-[26px] p-5 flex flex-col justify-between text-text-main",
        colorClasses[color],
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1 pr-2">
          <span className="text-[20px] font-semibold leading-tight">{title}</span>
          {subtitle && <span className="text-[15px] text-text-secondary/80">{subtitle}</span>}
        </div>
        {icon && <div className="shrink-0">{icon}</div>}
      </div>

      {(bottomText || bottomIcon) && (
        <div className="flex items-center gap-2 mt-3 text-[14px] font-medium opacity-80">
          {bottomText && <span>{bottomText}</span>}
          {bottomIcon && <span>{bottomIcon}</span>}
        </div>
      )}
    </div>
  );
}
