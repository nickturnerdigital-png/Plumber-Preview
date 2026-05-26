"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/constants";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SectionHeading } from "./ServicesGrid";

export function BeforeAfterGallery() {
  const [index, setIndex] = useState(0);
  const current = BEFORE_AFTER[index];

  const next = () => setIndex((i) => (i + 1) % BEFORE_AFTER.length);
  const prev = () => setIndex((i) => (i - 1 + BEFORE_AFTER.length) % BEFORE_AFTER.length);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Work, Real Results"
          title="See the Difference. Drag to Reveal."
          subtitle="A small sample of recent transformations across Greater Victoria. Drag the slider to see before and after."
        />

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center"
        >
          <BeforeAfterSlider before={current.before} after={current.after} />

          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-electric">
              <MapPin className="h-3.5 w-3.5" />
              {current.location}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              {current.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-400">
              {current.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-100 text-navy transition hover:border-electric hover:text-electric"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white transition hover:bg-electric"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-3 flex gap-1.5">
                {BEFORE_AFTER.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-electric" : "w-1.5 bg-navy-100"
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
