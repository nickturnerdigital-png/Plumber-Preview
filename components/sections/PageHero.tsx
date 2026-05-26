"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  tone?: "navy" | "emergency";
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  tone = "navy",
}: PageHeroProps) {
  const bg = tone === "emergency" ? "bg-gradient-to-br from-emergency to-red-800" : "bg-navy-gradient";
  return (
    <section className={`relative overflow-hidden ${bg} pb-24 pt-20 text-white sm:pb-32 sm:pt-28`}>
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-electric/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-copper/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-white/60">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="transition hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
          >
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full text-ice"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,21.3C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,80L0,80Z"
        />
      </svg>
    </section>
  );
}
