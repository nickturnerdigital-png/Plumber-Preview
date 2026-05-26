"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeading } from "./ServicesGrid";

const SWIPE_THRESHOLD = 50;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const go = useCallback((i: number) => {
    setIndex(i);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <StarRating rating={4.9} size={20} />
            <span className="font-display text-2xl font-bold text-navy">4.9</span>
            <span className="text-sm text-navy-400">/ 5</span>
          </div>
          <span className="hidden h-6 w-px bg-navy-200 sm:block" />
          <span className="text-sm font-semibold text-navy-400">200+ Reviews</span>
          <span className="hidden h-6 w-px bg-navy-200 sm:block" />
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
          {/* Swipeable / draggable card area */}
          <div
            className="relative overflow-hidden"
            onPointerDown={(e) => { dragStartX.current = e.clientX; }}
            onPointerUp={(e) => {
              const delta = dragStartX.current - e.clientX;
              if (Math.abs(delta) > SWIPE_THRESHOLD) delta > 0 ? next() : prev();
            }}
          >
            <div
              key={t.name}
              className="mx-auto max-w-3xl cursor-grab active:cursor-grabbing select-none rounded-3xl bg-white p-8 shadow-card-hover sm:p-12 transition-opacity duration-300"
            >
              <Quote className="h-10 w-10 text-electric/30" />
              <p className="mt-5 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col gap-4 border-t border-navy-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
                <div className="sm:text-right">
                  <StarRating rating={t.rating} />
                  <p className="mt-1 text-xs text-navy-300">
                    {t.source} • {t.date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls row: prev arrow · dots · next arrow */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy transition hover:border-electric hover:text-electric"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-electric" : "w-2 bg-navy-200 hover:bg-navy-400"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition hover:bg-electric"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-navy-300">
            Swipe or drag to browse
          </p>
        </div>
      </div>
    </section>
  );
}
