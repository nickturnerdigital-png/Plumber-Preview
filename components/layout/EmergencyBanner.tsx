"use client";

import { Phone, X } from "lucide-react";
import { useState } from "react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="overflow-hidden bg-emergency text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-sm sm:px-6">
        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="font-semibold">24/7 Emergency Service Available Now</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-block" />
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="hidden items-center gap-1.5 font-bold underline-offset-2 hover:underline sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="rounded-full p-1 hover:bg-white/15"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
