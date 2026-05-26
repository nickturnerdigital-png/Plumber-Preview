import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  inverted?: boolean;
  className?: string;
}

export function Logo({ inverted, className }: LogoProps) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-xl shadow-md transition-transform group-hover:scale-105",
          inverted ? "bg-white" : "bg-electric-gradient",
        )}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={inverted ? "text-electric" : "text-white"}
        >
          <path
            d="M12 2C12 2 5 9 5 14a7 7 0 1014 0c0-5-7-12-7-12z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M12 7.5C12 7.5 9 11 9 13.5a3 3 0 106 0c0-2.5-3-6-3-6z"
            fill={inverted ? "#1D6FFF" : "#0B1829"}
            opacity="0.35"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            inverted ? "text-white" : "text-navy",
          )}
        >
          Pacific Crest
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-white/60" : "text-navy-300",
          )}
        >
          Plumbing Co.
        </span>
      </span>
    </Link>
  );
}
