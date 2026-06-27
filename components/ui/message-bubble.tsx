import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  isMe: boolean;
  content: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  isSystem?: boolean;
}

export function MessageBubble({ isMe, content, time, status, isSystem }: MessageBubbleProps) {
  if (isSystem) {
    return (
      <div className="flex justify-center my-4">
        <span className="text-[13px] text-text-muted bg-surface-muted px-3 py-1 rounded-full">
          {content}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col w-full my-2 px-3", isMe ? "items-end" : "items-start")}>
      <div
        className={cn(
          "relative max-w-[76%] px-[14px] py-[10px] rounded-[16px] text-[16px] leading-[1.42] z-10",
          isMe
            ? "bg-[#239BFC] text-white"
            : "bg-[#E9E9EB] text-black"
        )}
      >
        <span className="relative z-10">{content}</span>
        
        {/* Tail */}
        <div
          className={cn(
            "absolute z-[-1]",
            isMe ? "right-[-8.9px] bottom-[-0.7px] w-[20px] h-[20px] bg-[#239BFC]" : "left-[-10.6px] bottom-[-3px] w-[20px] h-[16px] bg-[#E9E9EB]"
          )}
          style={{
            clipPath: isMe ? "path('M-2,13 C4,6 -3,2 22,8 C6,13 6,12 1,19 Z')" : "path('M13,4 C17,-1 1,2 0,29 C20,2 21,39 12,10 Z')",
            transform: isMe ? "rotate(-72deg) scaleX(0.7)" : "rotate(-153deg) scaleX(0.8)"
          }}
        />
      </div>
      
      {/* Time and Status (Usually hidden unless clicked, or last message) */}
      <div className="text-[11px] text-text-muted mt-1 px-1 flex items-center gap-1 opacity-80">
        <span>{time}</span>
        {isMe && status === "read" && <span>• Read</span>}
        {isMe && status === "delivered" && <span>• Delivered</span>}
      </div>
    </div>
  );
}
