import { cn } from "@/lib/utils";

interface AvailabilityPulseProps {
  label?: string;
  tone?: "success" | "emergency";
  className?: string;
}

export function AvailabilityPulse({
  label = "Available Now",
  tone = "success",
  className,
}: AvailabilityPulseProps) {
  const color = tone === "success" ? "bg-success" : "bg-emergency";
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            color,
          )}
        />
        <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", color)} />
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
