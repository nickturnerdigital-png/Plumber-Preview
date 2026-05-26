"use client";

import { BadgeCheck, ShieldCheck, ThumbsUp } from "lucide-react";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { SectionHeading } from "./ServicesGrid";

const FEATURES = [
  {
    Icon: BadgeCheck,
    title: "Upfront Flat-Rate Pricing",
    body: "You see the price before we lift a wrench. No hourly meter, no surprise fees, no high-pressure upsells. Ever.",
    color: "from-electric to-electric-600",
  },
  {
    Icon: ShieldCheck,
    title: "Background-Checked Pros",
    body: "Every technician is Red Seal certified, criminally background checked, and drug tested. We protect your home like it's our own.",
    color: "from-copper to-copper-600",
  },
  {
    Icon: ThumbsUp,
    title: "Crest Promise Guarantee",
    body: "Not satisfied? We come back and make it right at no charge. 2-year workmanship guarantee on every job.",
    color: "from-success to-emerald-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ice py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Plumber Victoria Tells Their Friends About"
          subtitle="It's not magic. It's three habits we never break."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_24px_-12px_rgba(11,24,41,0.1)] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />
              <div
                className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
              >
                <feature.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">{feature.title}</h3>
              <p className="mt-3 text-navy-400 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-navy-300">
            Certified, Accredited & Vetted By
          </p>
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
