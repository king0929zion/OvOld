import { cn } from "@/lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  code?: string;
  primaryAction: string;
  onPrimaryAction: () => void;
  secondaryAction?: string;
  onSecondaryAction?: () => void;
  danger?: boolean;
}

export function Dialog({
  isOpen,
  onClose,
  icon,
  title,
  description,
  code,
  primaryAction,
  onPrimaryAction,
  secondaryAction,
  onSecondaryAction,
  danger
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-sm bg-surface rounded-[34px] p-8 flex flex-col items-center text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {icon && (
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-6",
            danger ? "bg-danger/10 text-danger" : "bg-surface-muted text-black"
          )}>
            {icon}
          </div>
        )}
        
        <h2 className="text-[24px] font-semibold text-text-main mb-2">
          {title}
        </h2>
        
        {description && (
          <p className="text-[16px] text-text-secondary mb-6">
            {description}
          </p>
        )}

        {code && (
          <div className="text-[42px] font-bold tracking-widest text-black mb-8 font-mono">
            {code}
          </div>
        )}

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={onPrimaryAction}
            className={cn(
              "w-full h-14 rounded-full flex items-center justify-center text-[17px] font-semibold transition-opacity active:opacity-70",
              danger ? "bg-danger text-white" : "bg-black text-white"
            )}
          >
            {primaryAction}
          </button>
          
          {(secondaryAction || onSecondaryAction) && (
            <button
              onClick={onSecondaryAction || onClose}
              className="w-full h-14 rounded-full flex items-center justify-center text-[17px] font-semibold text-text-main bg-transparent active:bg-surface-muted transition-colors"
            >
              {secondaryAction || "取消"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
