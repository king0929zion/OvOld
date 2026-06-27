interface HeroMetricProps {
  subtitle: string;
  value: string;
  label: string;
  summaryTitle?: string;
  summaryLine1?: string;
  summaryLine2?: string;
}

export function HeroMetric({
  subtitle,
  value,
  label,
  summaryTitle,
  summaryLine1,
  summaryLine2,
}: HeroMetricProps) {
  return (
    <div className="flex justify-between items-start px-2 py-1">
      <div className="flex flex-col">
        <span className="text-text-secondary text-[20px] font-medium leading-tight">{subtitle}</span>
        <span className="text-black text-[56px] font-semibold leading-none -ml-1 tracking-tight my-1">
          {value}
        </span>
        <span className="text-text-secondary text-[18px] font-medium leading-tight">{label}</span>
      </div>

      {(summaryTitle || summaryLine1 || summaryLine2) && (
        <div className="flex flex-col text-right text-text-secondary text-[14px] pt-1 gap-0.5">
          {summaryTitle && <span className="font-semibold text-text-main mb-1">{summaryTitle}</span>}
          {summaryLine1 && <span>{summaryLine1}</span>}
          {summaryLine2 && <span>{summaryLine2}</span>}
        </div>
      )}
    </div>
  );
}
