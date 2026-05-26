"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeading } from "./ServicesGrid";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-ice py-24 sm:py-32">
      <div className="absolute top-20 left-10 text-electric/5">
        <Quote className="h-64 w-64" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Our Neighbors Say"
          title="200+ Five-Star Reviews. And Counting."
        />

        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <StarRating rating={4.9} size={20} />
            <span className="font-display text-2xl font-bold text-navy">4.9</span>
            <span className="text-sm text-navy-400">/ 5</span>
          </div>
          <span className="h-6 w-px bg-navy-200" />
          <span className="text-sm font-semibold text-navy-400">200+ Reviews</span>
          <span className="h-6 w-px bg-navy-200" />
          <div className="flex items-center gap-3 text-xs font-bold text-navy-400">
            <span>GOOGLE</span>
            <span className="text-navy-200">•</span>
            <span>HOMESTARS</span>
            <span className="text-navy-200">•</span>
            <span>BBB A+</span>
          </div>
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-card-hover sm:p-12"
            >
              <Quote className="h-10 w-10 text-electric/30" />
              <p className="mt-5 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-between gap-6 border-t border-navy-100 pt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-ice"
                    unoptimized
                  />
                  <div>
                    <p className="font-bold text-navy">{t.name}</p>
                    <p className="flex items-center gap-1.5 text-sm text-navy-400">
                      <MapPin className="h-3 w-3" /> {t.neighborhood}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={t.rating} />
                  <p className="mt-1 text-xs text-navy-300">
                    {t.source} • {t.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-electric" : "w-2 bg-navy-200"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
