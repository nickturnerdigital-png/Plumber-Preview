import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-navy-100/60 bg-white shadow-[0_4px_20px_-8px_rgba(11,24,41,0.08)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
        className,
      )}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";
