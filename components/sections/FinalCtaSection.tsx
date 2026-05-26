"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Clock, Phone, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { footerLeadSchema, type FooterLeadInput } from "@/lib/schemas";
import { useToast } from "@/components/ui/Toast";
import { sleep } from "@/lib/utils";

export function FinalCtaSection() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FooterLeadInput>({ resolver: zodResolver(footerLeadSchema) });

  const onSubmit = async (data: FooterLeadInput) => {
    await sleep(1200);
    console.log("[final cta]", data);
    toast(`On it ${data.name.split(" ")[0]} — expect a call within 15 minutes!`);
    reset();
  };

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 text-white sm:py-32">
      <div
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-electric/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-copper/20 blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                Limited Spots Today
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Don&apos;t Let a{" "}
              <span className="bg-gradient-to-r from-copper to-electric-300 bg-clip-text text-transparent">
                Plumbing Problem
              </span>{" "}
              Ruin Your Day.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-white/75">
              Whether it&apos;s an emergency or a project you&apos;ve been putting off — call now,
              text now, or fill the form. We&apos;ll get back to you in 15 minutes flat.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric shadow-glow-blue transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                    Talk to a human, now
                  </p>
                  <p className="font-display text-3xl font-bold tracking-tight">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Clock className="h-6 w-6 text-copper" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                    Open hours
                  </p>
                  <p className="font-semibold">
                    Mon–Fri {COMPANY.hours.weekday} • Sat–Sun {COMPANY.hours.weekend}
                  </p>
                  <p className="mt-0.5 text-sm text-copper">{COMPANY.hours.emergency}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-white p-8 text-navy shadow-2xl sm:p-10">
              <h3 className="font-display text-2xl font-bold">Request a callback</h3>
              <p className="mt-1 text-sm text-navy-400">
                A real human (not a bot) will call within 15 minutes.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <FieldWrapper label="Your name" error={errors.name?.message}>
                  <input {...register("name")} placeholder="Sarah Mitchell" className="form-input" />
                </FieldWrapper>
                <FieldWrapper label="Phone number" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="(250) 555-0123"
                    className="form-input"
                  />
                </FieldWrapper>
                <FieldWrapper label="Brief description (optional)">
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Tell us what's going on…"
                    className="form-input resize-none"
                  />
                </FieldWrapper>

                <Button type="submit" fullWidth size="lg" loading={isSubmitting}>
                  Call Me Back Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-navy-400">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-success" />
                Average callback time today: <span className="font-bold text-navy">8 min</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FieldWrapper({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-500">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-emergency">{error}</p>}
    </div>
  );
}
