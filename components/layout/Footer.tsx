"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import { Logo } from "./Logo";
import { footerLeadSchema, type FooterLeadInput } from "@/lib/schemas";
import { useToast } from "@/components/ui/Toast";
import { sleep } from "@/lib/utils";

export function Footer() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FooterLeadInput>({ resolver: zodResolver(footerLeadSchema) });

  const onSubmit = async (data: FooterLeadInput) => {
    await sleep(1000);
    console.log("[footer lead]", data);
    toast("Got it — we'll be in touch shortly!");
    reset();
  };

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"
      />
      <div className="absolute -top-32 left-1/3 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Locally owned and operated since {COMPANY.founded}. Licensed, insured, and
              proudly serving Greater Victoria with honesty, craftsmanship, and lightning-fast
              response times.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Need a callback? Drop your info.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-white/40 focus:border-electric focus:outline-none"
                />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-white/40 focus:border-electric focus:outline-none"
                />
              </div>
              {(errors.name || errors.phone) && (
                <p className="text-xs text-copper">
                  {errors.name?.message ?? errors.phone?.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold shadow-glow-blue transition hover:bg-electric-600 disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Request Callback"}
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-2">
            <FooterCol title="Services">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Company">
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/70 hover:text-white">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-sm text-white/70 hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#service-area" className="text-sm text-white/70 hover:text-white">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency"
                  className="text-sm font-semibold text-emergency hover:text-red-400"
                >
                  Emergency Service
                </Link>
              </li>
            </FooterCol>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-electric" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-electric" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-electric" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-electric" />
                <div>
                  <div>Mon–Fri: {COMPANY.hours.weekday}</div>
                  <div>Sat–Sun: {COMPANY.hours.weekend}</div>
                  <div className="text-copper">{COMPANY.hours.emergency}</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              <SocialLink href={COMPANY.social.facebook} aria="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={COMPANY.social.instagram} aria="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={COMPANY.social.google} aria="Google">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M21.35 11.1H12v3.2h5.35c-.5 2.4-2.55 4.1-5.35 4.1a5.95 5.95 0 110-11.9c1.55 0 2.95.6 4 1.55l2.4-2.4A9.5 9.5 0 002.55 12 9.5 9.5 0 1021.5 12c0-.3-.05-.6-.15-.9z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. {COMPANY.license}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function SocialLink({
  href,
  aria,
  children,
}: {
  href: string;
  aria: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={aria}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-electric hover:text-white"
    >
      {children}
    </a>
  );
}
