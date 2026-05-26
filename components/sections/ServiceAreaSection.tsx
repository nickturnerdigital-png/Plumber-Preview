"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { COMPANY, NEIGHBORHOODS } from "@/lib/constants";
import { SectionHeading } from "./ServicesGrid";

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Service Area"
              title="Proudly Serving All of Greater Victoria"
              subtitle="From downtown to Sooke, Oak Bay to Sidney — we're never more than 30 minutes from your door."
              align="left"
            />

            <div className="mt-10 flex flex-wrap gap-2">
              {NEIGHBORHOODS.map((n, i) => (
                <motion.span
                  key={n}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-full bg-electric/5 px-4 py-2 text-sm font-semibold text-navy ring-1 ring-electric/15 transition hover:bg-electric hover:text-white hover:ring-electric"
                >
                  <MapPin className="mr-1 inline h-3 w-3" />
                  {n}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-ice p-6">
              <p className="text-sm font-semibold text-navy">Not sure if we serve your area?</p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-electric hover:text-electric-600"
              >
                <Phone className="h-4 w-4" />
                Call {COMPANY.phone}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-navy-gradient p-8">
              <div
                className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"
                aria-hidden
              />
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="zoneGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1D6FFF" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#1D6FFF" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#1D6FFF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Coverage circles (concentric pulse) */}
                {[180, 130, 80].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx="200"
                    cy="200"
                    r={r}
                    fill="url(#zoneGradient)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                  />
                ))}
                {/* Vancouver Island silhouette (simplified) */}
                <path
                  d="M120,140 Q140,100 200,110 Q260,115 290,150 Q310,200 280,250 Q250,300 200,300 Q150,295 120,260 Q100,210 120,140 Z"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                />

                {/* Neighborhood pins */}
                {[
                  { x: 200, y: 200, label: "Victoria", size: 6 },
                  { x: 230, y: 175, label: "Oak Bay", size: 4 },
                  { x: 175, y: 170, label: "Esquimalt", size: 4 },
                  { x: 195, y: 145, label: "Saanich", size: 4 },
                  { x: 145, y: 195, label: "Colwood", size: 4 },
                  { x: 220, y: 130, label: "Sidney", size: 4 },
                  { x: 165, y: 220, label: "Langford", size: 4 },
                  { x: 130, y: 240, label: "Sooke", size: 4 },
                ].map((pin) => (
                  <g key={pin.label}>
                    <motion.circle
                      cx={pin.x}
                      cy={pin.y}
                      r={pin.size}
                      fill="#E8962E"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    />
                    <motion.circle
                      cx={pin.x}
                      cy={pin.y}
                      r={pin.size}
                      fill="#E8962E"
                      opacity="0.4"
                      animate={{ r: [pin.size, pin.size * 3, pin.size], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                    <text
                      x={pin.x + pin.size + 4}
                      y={pin.y + 3}
                      fill="white"
                      fontSize="10"
                      fontWeight="600"
                      className="font-sans"
                    >
                      {pin.label}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-lg ring-1 ring-white/20">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    Coverage radius
                  </p>
                  <p className="text-lg font-bold">~40km from downtown</p>
                </div>
                <div className="text-right text-white">
                  <p className="text-xs uppercase tracking-wider text-white/60">Active techs</p>
                  <p className="flex items-center gap-1.5 text-lg font-bold">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-success" />8 today
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
