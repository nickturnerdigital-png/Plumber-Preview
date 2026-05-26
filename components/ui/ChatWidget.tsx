"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { AvailabilityPulse } from "./AvailabilityPulse";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  time: string;
}

const BOT_RESPONSES = [
  "Thanks for reaching out! A licensed plumber is reviewing your message and will respond in under 2 minutes.",
  "Got it — can you tell me which neighborhood you're in? We dispatch the nearest available tech.",
  "I'll have someone call you right back. In the meantime, is this an emergency or can it wait until business hours?",
  "Perfect. Mike from our team will text you a confirmation and ETA within 5 minutes.",
  "While you wait — feel free to call us directly at (250) 555-0198. We answer every call live.",
];

function now() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasShownPrompt, setHasShownPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: `Hi! I'm with ${COMPANY.shortName}. What plumbing issue can we help with today?`,
      time: now(),
    },
  ]);
  const responseIndex = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasShownPrompt) return;
    const t = setTimeout(() => {
      setShowPrompt(true);
      setHasShownPrompt(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [hasShownPrompt]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: input.trim(), time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        from: "bot",
        text: BOT_RESPONSES[responseIndex.current % BOT_RESPONSES.length],
        time: now(),
      };
      responseIndex.current += 1;
      setTyping(false);
      setMessages((prev) => [...prev, reply]);
    }, 1400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden">
      {/* Prompt bubble */}
      {showPrompt && !open && (
        <button
          onClick={() => {
            setOpen(true);
            setShowPrompt(false);
          }}
          className="absolute bottom-20 right-0 w-64 rounded-2xl bg-white p-4 text-left shadow-2xl ring-1 ring-navy-100 animate-scale-in"
        >
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 flex-none rounded-full bg-electric-gradient" />
            <div>
              <p className="text-xs font-semibold text-navy">Pacific Crest Team</p>
              <p className="mt-1 text-sm text-navy-500">
                Need a plumber today? We typically respond in under 2 minutes.
              </p>
            </div>
          </div>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="absolute bottom-20 right-0 flex h-[480px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-navy-100 animate-scale-in"
        >
          <div className="flex items-center justify-between bg-navy-gradient px-5 py-4 text-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">Live Chat</span>
                <AvailabilityPulse label="" tone="success" />
              </div>
              <p className="text-xs text-white/70">Avg reply: under 2 min</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-ice px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-snug shadow-sm ${
                    m.from === "user"
                      ? "bg-electric text-white"
                      : "bg-white text-navy ring-1 ring-navy-100"
                  }`}
                >
                  {m.text}
                  <div
                    className={`mt-1 text-[10px] ${
                      m.from === "user" ? "text-white/70" : "text-navy-300"
                    }`}
                  >
                    {m.time}
                  </div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 ring-1 ring-navy-100">
                  <span className="h-2 w-2 rounded-full bg-navy-300 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-navy-300 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 rounded-full bg-navy-300 animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center justify-center gap-2 border-t border-navy-100 bg-white px-4 py-2.5 text-xs font-semibold text-electric hover:bg-ice"
          >
            <Phone className="h-3.5 w-3.5" /> Or call us: {COMPANY.phone}
          </a>

          <div className="border-t border-navy-100 bg-white p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your message…"
                className="flex-1 rounded-full border border-navy-100 bg-ice px-4 py-2.5 text-sm focus:border-electric focus:outline-none"
              />
              <button
                onClick={send}
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-electric text-white hover:bg-electric-600 disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => {
          setOpen((v) => !v);
          setShowPrompt(false);
        }}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full bg-electric-gradient text-white shadow-glow-blue transition-transform hover:scale-105 active:scale-95",
          "animate-scale-in"
        )}
        style={{ animationDelay: '1500ms' }}
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emergency text-[10px] font-bold ring-2 ring-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
