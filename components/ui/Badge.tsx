import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "navy" | "electric" | "copper" | "success" | "emergency" | "white";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const tones: Record<Tone, string> = {
  navy: "bg-navy/10 text-navy",
  electric: "bg-electric/10 text-electric",
  copper: "bg-copper/10 text-copper-700",
  success: "bg-success/10 text-success",
  emergency: "bg-emergency/10 text-emergency",
  white: "bg-white/10 text-white border border-white/20",
};

export function Badge({ tone = "navy", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-tight",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
