"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { sleep } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    await sleep(1300);
    console.log("[contact submit]", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-card-hover sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[500px] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-success text-white shadow-[0_10px_40px_-10px_rgba(22,163,74,0.5)]"
            >
              <Check className="h-12 w-12" strokeWidth={3} />
            </motion.div>
            <h3 className="mt-8 font-display text-3xl font-bold text-navy">Message received!</h3>
            <p className="mt-3 max-w-sm text-navy-400">
              A real human from our team will reach out within 15 minutes during business
              hours, or first thing tomorrow morning.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm font-semibold text-electric hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-navy-400">
                Fill out what you can. We&apos;ll handle the rest.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  placeholder="Sarah Mitchell"
                  className="form-input"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="sarah@example.com"
                  className="form-input"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="(250) 555-0123"
                  className="form-input"
                />
              </Field>
              <Field label="Service needed" error={errors.service?.message}>
                <select {...register("service")} className="form-input">
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </Field>
            </div>

            <Field label="Preferred contact time">
              <select {...register("preferredTime")} className="form-input">
                <option value="">Any time</option>
                <option value="morning">Morning (8am–12pm)</option>
                <option value="afternoon">Afternoon (12pm–5pm)</option>
                <option value="evening">Evening (5pm–8pm)</option>
              </select>
            </Field>

            <Field label="Tell us about the job" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Describe what's going on, when it started, what you've tried…"
                className="form-input resize-none"
              />
            </Field>

            <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
              Send Message
              <Send className="h-4 w-4" />
            </Button>

            <p className="text-center text-xs text-navy-300">
              By submitting, you agree to be contacted by our team. We never share your info.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
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
