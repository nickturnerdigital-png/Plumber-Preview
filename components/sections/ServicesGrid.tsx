"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  Flame,
  Hammer,
  Pipette,
  Siren,
  Waves,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

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

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="From Drips to Disasters — We Handle It All"
          subtitle="Six core services. Hundreds of variations. One promise: do it right, on time, every time."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            const accent = ACCENT_MAP[service.accent as keyof typeof ACCENT_MAP];
            return (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-card-hover"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} translate-y-[-100%] transition-transform group-hover:translate-y-0`}
                  />
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">
                    {service.short}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
                    <span className="text-xs text-navy-300">
                      Starting at{" "}
                      <span className="font-bold text-navy">${service.startingPrice}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-electric transition-transform group-hover:translate-x-1">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="mb-4 animate-fade-in">
          <span className="inline-flex items-center rounded-full bg-electric/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-electric">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl animate-fade-in-up"
        style={{ animationDelay: '100ms' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-5 text-lg text-navy-400 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
