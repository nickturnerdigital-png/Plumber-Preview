import { TRUST_BADGES } from "@/lib/constants";
import { ShieldCheck, Award, BadgeCheck, Star, HardHat, Check } from "lucide-react";

const ICONS = [ShieldCheck, BadgeCheck, Star, Award, HardHat, Check];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {TRUST_BADGES.map((badge, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={badge.name}
            className="flex items-center gap-2 text-navy-500 transition-colors hover:text-navy"
            title={badge.name}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
            <span className="text-sm font-semibold tracking-tight">{badge.short}</span>
          </div>
        );
      })}
    </div>
  );
}
