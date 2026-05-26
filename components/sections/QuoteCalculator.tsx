"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Info } from "lucide-react";
import { SERVICES, URGENCY_OPTIONS, PROPERTY_OPTIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useQuote } from "@/components/ui/QuoteContext";
import { SectionHeading } from "./ServicesGrid";
import { cn } from "@/lib/utils";

export function QuoteCalculator() {
  const [service, setService] = useState<string>(SERVICES[0].id);
  const [urgency, setUrgency] = useState<string>(URGENCY_OPTIONS[1].id);
  const [property, setProperty] = useState<string>(PROPERTY_OPTIONS[0].id);
  const { open } = useQuote();

  const estimate = useMemo(() => {
    const svc = SERVICES.find((s) => s.id === service)!;
    const urg = URGENCY_OPTIONS.find((u) => u.id === urgency)!;
    const prop = PROPERTY_OPTIONS.find((p) => p.id === property)!;
    const base = svc.startingPrice;
    const low = Math.round(base * urg.multiplier * prop.multiplier);
    const high = Math.round(low * 1.8);
    return { low, high };
  }, [service, urgency, property]);

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 text-white sm:py-32">
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-electric/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-copper/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5">
            <Calculator className="h-3.5 w-3.5 text-copper" />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              Instant Estimate
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Know Your Price in <span className="text-copper">10 Seconds</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Most plumbers make you wait for a call back. We don't. Get a ballpark right now —
            then lock it in with a free on-site quote.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10"
        >
          <Step number={1} label="What do you need?">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Pill
                  key={s.id}
                  active={service === s.id}
                  onClick={() => setService(s.id)}
                >
                  {s.name}
                </Pill>
              ))}
            </div>
          </Step>

          <Step number={2} label="How soon?">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {URGENCY_OPTIONS.map((u) => (
                <Pill
                  key={u.id}
                  active={urgency === u.id}
                  onClick={() => setUrgency(u.id)}
                >
                  {u.label}
                </Pill>
              ))}
            </div>
          </Step>

          <Step number={3} label="Property type?">
            <div className="grid gap-2 sm:grid-cols-3">
              {PROPERTY_OPTIONS.map((p) => (
                <Pill
                  key={p.id}
                  active={property === p.id}
                  onClick={() => setProperty(p.id)}
                >
                  {p.label}
                </Pill>
              ))}
            </div>
          </Step>

          <motion.div
            key={`${estimate.low}-${estimate.high}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
            className="mt-8 grid items-center gap-6 rounded-2xl bg-gradient-to-br from-electric/20 to-copper/20 p-6 sm:grid-cols-[1fr_auto] sm:p-8"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Estimated Range
              </p>
              <p className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <span className="bg-gradient-to-r from-white to-copper bg-clip-text text-transparent">
                  ${estimate.low} – ${estimate.high}
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2 text-xs text-white/60">
                <Info className="mt-0.5 h-3.5 w-3.5 flex-none" />
                Final price confirmed in writing before any work begins. No surprises, ever.
              </p>
            </div>
            <Button size="xl" variant="copper" onClick={() => open(service)}>
              Lock In My Price
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Step({
  number,
  label,
  children,
}: {
  number: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold">
          {number}
        </span>
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/90">{label}</p>
      </div>
      {children}
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all",
        active
          ? "border-electric bg-electric text-white shadow-glow-blue"
          : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10",
      )}
    >
      {children}
    </button>
  );
}
