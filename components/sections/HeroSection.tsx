"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/Card";
import { AvailabilityPulse } from "@/components/ui/AvailabilityPulse";
import { useQuote } from "@/components/ui/QuoteContext";

const headlineWords = [
  "Victoria's",
  "Plumbing",
  "Problem",
  "Solved",
  "—",
  "In",
  "Hours,",
  "Not",
  "Days.",
];

export function HeroSection() {
  const { open } = useQuote();

  return (
    <section className="relative isolate overflow-hidden bg-navy-gradient text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" aria-hidden />
      <div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-electric/30 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-copper/15 blur-[120px]"
        aria-hidden
      />

      {/* Animated pipe SVG (subtle) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="pipeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D6FFF" />
            <stop offset="100%" stopColor="#E8962E" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-50,300 Q300,150 600,350 T1200,400 T1500,200"
          stroke="url(#pipeGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-50,600 Q400,500 700,650 T1500,550"
          stroke="url(#pipeGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating water droplets */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-electric/40"
          style={{ left: `${(i * 8.3) % 100}%`, top: `${(i * 17) % 100}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
          aria-hidden
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-32 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-copper" />
          <span className="text-xs font-semibold tracking-wide">
            Trusted by 1,800+ Greater Victoria homes & businesses
          </span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="mr-[0.25em] inline-block"
            >
              {word === "Solved" ? (
                <span className="bg-gradient-to-r from-electric-300 to-copper bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 max-w-2xl text-lg text-white/75 sm:text-xl"
        >
          24/7 emergency response. Upfront flat-rate pricing. Background-checked, Red Seal
          journeymen who treat your home like their own. The plumber Victoria actually recommends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="xl" onClick={() => open()}>
            Book a Free Quote
          </Button>
          <Button
            size="xl"
            variant="outline"
            onClick={() => (window.location.href = `tel:${COMPANY.phoneRaw}`)}
          >
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-success" />
            Licensed BC #PL-48291
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-success" /> $5M Insured
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-success" /> Red Seal Certified
          </div>
        </motion.div>

        {/* Floating cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:absolute lg:bottom-12 lg:right-8 lg:mt-0 lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 20 }}
          >
            <GlassCard className="p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[47, 12, 44, 33].map((id) => (
                    <Image
                      key={id}
                      src={`https://i.pravatar.cc/60?img=${id}`}
                      alt=""
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-navy"
                      unoptimized
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-copper text-copper" />
                    ))}
                    <span className="ml-1 text-sm font-bold">4.9</span>
                  </div>
                  <p className="text-xs text-white/70">200+ Google Reviews</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
          >
            <GlassCard className="p-4 text-white">
              <AvailabilityPulse label="3 Technicians Online" tone="success" />
              <p className="mt-1.5 text-xs text-white/70">
                Next available: <span className="font-semibold text-white">Today, 2:30 PM</span>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
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
