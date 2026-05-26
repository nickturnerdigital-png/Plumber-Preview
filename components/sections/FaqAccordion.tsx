"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { SectionHeading } from "./ServicesGrid";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-ice py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Everything You Want to Ask"
          subtitle="Don't see your question? Just call — we're happy to walk you through it, no obligation."
        />

        <div className="mt-14 space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy-100/60 animate-fade-in-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-navy">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 flex-none items-center justify-center rounded-full bg-electric/10 text-electric transition-transform duration-200",
                      open && "rotate-45"
                    )}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-navy-400 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
