"use client";

import { motion } from "framer-motion";
import {
  Check,
  Droplets,
  Flame,
  Hammer,
  Pipette,
  Siren,
  Waves,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useQuote } from "@/components/ui/QuoteContext";

const ICON_MAP = {
  Siren,
  Waves,
  Flame,
  Droplets,
  Hammer,
  Pipette,
} as const;

const ACCENT_MAP = {
  emergency: "from-emergency to-red-700",
  electric: "from-electric to-electric-600",
  copper: "from-copper to-copper-600",
  navy: "from-navy to-navy-600",
} as const;

export function ServicesDetail() {
  const { open } = useQuote();
  return (
    <section className="bg-ice py-24">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:space-y-32 sm:px-6 lg:px-8">
        {SERVICES.map((service, i) => {
          const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
          const accent = ACCENT_MAP[service.accent as keyof typeof ACCENT_MAP];
          const reverse = i % 2 === 1;

          return (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid scroll-mt-32 gap-12 lg:grid-cols-2 lg:items-center ${
                reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">
                  {service.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-navy-400">{service.long}</p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br ${accent} text-white`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="font-medium text-navy">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button size="lg" onClick={() => open(service.id)}>
                    Book This Service
                  </Button>
                  <p className="text-sm text-navy-400">
                    Starting at{" "}
                    <span className="font-display text-2xl font-bold text-navy">
                      ${service.startingPrice}
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br ${accent} p-1 shadow-card-hover`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl bg-navy">
                    <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-48 w-48 text-white/10" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                        Specialty #{i + 1}
                      </p>
                      <p className="mt-1 font-display text-xl font-bold">{service.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
