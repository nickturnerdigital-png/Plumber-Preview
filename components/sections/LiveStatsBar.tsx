"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Star, Wrench } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: 1847, suffix: "+", label: "Jobs Completed", Icon: Wrench, decimals: 0 },
  { value: 4.9, suffix: "★", label: "Average Rating", Icon: Star, decimals: 1 },
  { value: 29, suffix: " min", label: "Avg Response", Icon: Clock, decimals: 0 },
  { value: 23, suffix: " yrs", label: "In Business", Icon: Shield, decimals: 0 },
];

export function LiveStatsBar() {
  return (
    <section className="relative bg-ice py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
            >
              <div className="mb-2 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white sm:mb-0">
                <s.Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </div>
                <p className="mt-0.5 text-sm font-semibold text-navy-400">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
