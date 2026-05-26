"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteInput } from "@/lib/schemas";
import { SERVICES, COMPANY } from "@/lib/constants";
import { Button } from "./Button";
import { useToast } from "./Toast";
import { sleep, cn } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({ open, onClose, defaultService }: QuoteModalProps) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: defaultService ?? "" },
  });

  useEffect(() => {
    if (!open) reset({ service: defaultService ?? "" });
  }, [open, reset, defaultService]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSubmit = async (data: QuoteInput) => {
    await sleep(1200);
    console.log("[quote submit]", data);
    toast(`Thanks ${data.name.split(" ")[0]}! We'll call you within 15 minutes.`);
    onClose();
    reset();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-navy/70 backdrop-blur sm:items-center animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl animate-scale-in"
        style={{ animationDelay: '50ms' }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-navy/10"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-navy-gradient px-7 py-6 text-white">
          <h3 className="font-display text-2xl font-bold">Get a Free Quote</h3>
          <p className="mt-1 text-sm text-white/80">
            We&apos;ll text you a quote within 15 minutes. No spam, no obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-7 py-6">
          <Field label="Your Name" error={errors.name?.message}>
            <input
              {...register("name")}
              placeholder="Sarah Mitchell"
              className="form-input"
              autoFocus
            />
          </Field>

          <Field label="Phone Number" error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              placeholder="(250) 555-0123"
              className="form-input"
            />
          </Field>

          <Field label="Service Needed" error={errors.service?.message}>
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

          <Field label="Tell us more (optional)" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={3}
              placeholder="What's going on?"
              className="form-input resize-none"
            />
          </Field>

          <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
            Get My Free Quote
          </Button>

          <p className="text-center text-xs text-navy-300">
            Or call directly: <span className="font-semibold text-navy">{COMPANY.phone}</span>
          </p>
        </form>
      </div>
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
