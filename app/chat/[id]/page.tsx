"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ShieldCheck, Phone, Video, Plus, Mic, Send } from "lucide-react";
import { MessageBubble } from "@/components/ui/message-bubble";

type Message = {
  id: string;
  content: string;
  isMe: boolean;
  time: string;
  status?: "read" | "delivered" | "sent";
  isSystem?: boolean;
};

export default function ChatDetailPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "s1", content: "今天 上午 10:24", isMe: false, time: "", isSystem: true },
    { id: "1", content: "嘿！我们中午还一起吃饭吗？", isMe: false, time: "10:24" },
    { id: "2", content: "我发现了一家很棒的新餐厅。", isMe: false, time: "10:24" },
    { id: "3", content: "当然去！", isMe: true, time: "10:30", status: "read" },
    { id: "4", content: "在哪儿呀？", isMe: true, time: "10:30", status: "read" },
    { id: "5", content: "就在公园附近，我等会儿把地址发给你。", isMe: false, time: "10:42" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: inputValue,
        isMe: true,
        time: timeString,
        status: "sent",
      },
    ]);
    setInputValue("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: "收到！马上就发定位。",
          isMe: false,
          time: timeString,
        }
      ]);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-bg-deep relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-2 pt-14 pb-4 bg-bg-deep/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <Link href="/main/chats" className="active:opacity-70 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center text-text-secondary">
              <ChevronLeft size={28} />
            </div>
          </Link>
          
          <Link href="/contact/alice" className="flex items-center gap-3 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-[16px] font-bold text-text-main shadow-sm">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-semibold text-text-main leading-tight">Alice Cooper</span>
              <div className="flex items-center gap-1 text-black opacity-60">
                <ShieldCheck size={12} strokeWidth={3} />
                <span className="text-[12px] font-medium">身份已验证</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary active:opacity-70 transition-opacity">
            <Phone size={24} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary active:opacity-70 transition-opacity">
            <Video size={24} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pb-[100px] flex flex-col pt-4 no-scrollbar px-2">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            isMe={msg.isMe}
            content={msg.content}
            time={msg.time}
            status={msg.status}
            isSystem={msg.isSystem}
          />
        ))}
        <div ref={endRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-6 left-4 right-4 flex items-end gap-2.5 z-50">
        <button className="w-[38px] h-[38px] shrink-0 flex items-center justify-center rounded-full bg-white text-text-secondary border border-black/5 active:scale-[0.9] transition-transform shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <Plus size={20} />
        </button>
        
        <div className="flex-1 min-h-[38px] bg-white border border-black/5 rounded-[19px] pl-3.5 pr-1 py-1 flex items-end gap-2 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <div className="flex-1 min-h-[30px] flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="发送消息..."
              className="w-full bg-transparent border-none focus:outline-none text-[15px] text-text-main placeholder:text-text-muted leading-tight"
            />
          </div>
          
          {inputValue.trim() ? (
            <button 
              onClick={handleSend}
              className="w-[30px] h-[30px] shrink-0 flex items-center justify-center rounded-full bg-[#239BFC] text-white active:scale-[0.9] transition-transform mb-[0px]"
            >
              <Send size={14} className="ml-0.5" />
            </button>
          ) : (
            <button className="w-[30px] h-[30px] shrink-0 flex items-center justify-center rounded-full bg-surface-muted text-text-secondary active:scale-[0.9] transition-transform mb-[0px]">
              <Mic size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
