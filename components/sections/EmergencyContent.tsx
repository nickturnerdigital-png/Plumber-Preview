"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Clock, Phone, Shield, Zap } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { emergencySchema, type EmergencyInput } from "@/lib/schemas";
import { useToast } from "@/components/ui/Toast";
import { sleep } from "@/lib/utils";
import { AvailabilityPulse } from "@/components/ui/AvailabilityPulse";

const EMERGENCY_LIST = [
  "Burst or leaking pipe",
  "Active flooding",
  "No water in the house",
  "Sewage backup or overflow",
  "Water heater failure (no hot water)",
  "Gas line concern (smell of gas)",
  "Frozen or burst exterior pipe",
  "Toilet overflowing repeatedly",
];

const STEPS = [
  { Icon: Phone, title: "Call us", body: "Live answer in under 3 rings, day or night." },
  { Icon: Zap, title: "We dispatch", body: "Nearest tech is en route within 5 minutes." },
  { Icon: Clock, title: "We arrive", body: "Average on-site time under 30 minutes." },
  { Icon: Shield, title: "We fix it", body: "Flat-rate quote on the spot before any work." },
];

export function EmergencyContent() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmergencyInput>({ resolver: zodResolver(emergencySchema) });

  const onSubmit = async (data: EmergencyInput) => {
    await sleep(900);
    console.log("[emergency callback]", data);
    toast("Got it — we're calling you right back. Stay on the line.", "success");
    reset();
  };

  return (
    <>
      <section className="bg-ice py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emergency to-red-700 p-10 text-white shadow-[0_20px_60px_-20px_rgba(220,38,38,0.5)] sm:p-14"
          >
            <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <AvailabilityPulse label="Live operator standing by" tone="emergency" className="text-white" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Call directly. We answer every call live.
                </p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="mt-3 block font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl lg:text-8xl"
                >
                  {COMPANY.phone}
                </a>
                <p className="mt-4 max-w-md text-white/80">
                  Average answer time: <span className="font-bold text-white">11 seconds</span>.
                  Average response to your door: <span className="font-bold text-white">29 minutes</span>.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-sm font-bold uppercase tracking-wider">Or — call me back</p>
                <p className="mt-1 text-xs text-white/70">Drop your number. We'll call within 60 seconds.</p>
                <input
                  {...register("phone")}
                  placeholder="(250) 555-0123"
                  className="mt-4 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-white">{errors.phone.message}</p>
                )}
                <Button
                  type="submit"
                  loading={isSubmitting}
                  fullWidth
                  className="mt-4 bg-white text-emergency hover:bg-white/90"
                >
                  Call Me Now
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            What Happens When You Call
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl bg-ice p-6"
              >
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-emergency text-sm font-bold text-white">
                  {i + 1}
                </div>
                <s.Icon className="mt-2 h-8 w-8 text-emergency" />
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-navy-400">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency/10 px-3.5 py-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-emergency" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-emergency">
                What counts as an emergency
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">
              Don&apos;t wait. If any of these are happening, call right now.
            </h2>
            <ul className="mt-8 space-y-3">
              {EMERGENCY_LIST.map((e) => (
                <li key={e} className="flex items-start gap-3 text-navy">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emergency" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-navy-gradient p-8 text-white sm:p-10">
            <h3 className="font-display text-2xl font-bold">Emergency Pricing — No Games</h3>
            <p className="mt-2 text-white/70">
              We charge fairly even after hours. Here's exactly what to expect:
            </p>
            <div className="mt-6 space-y-4">
              <PriceRow label="Emergency dispatch fee" value="$0" note="We don't charge to show up." />
              <PriceRow label="After-hours surcharge" value="$49" note="Flat fee, no per-hour bump." />
              <PriceRow label="On-the-spot quote" value="Free" note="Flat-rate, before any work begins." />
              <PriceRow
                label="Diagnostic & assessment"
                value="$0"
                note="Waived when you book the repair."
              />
            </div>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-emergency py-4 text-lg font-bold text-white shadow-[0_10px_40px_-10px_rgba(220,38,38,0.6)] transition hover:bg-red-700"
            >
              <Phone className="h-5 w-5" /> Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PriceRow({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-xs text-white/60">{note}</p>
      </div>
      <p className="font-display text-2xl font-bold text-copper">{value}</p>
    </div>
  );
}
