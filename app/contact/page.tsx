import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pacific Crest Plumbing for service, quotes, or questions. Call (250) 555-0198 or use our quick form — we respond within 15 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Get That Plumbing Problem Sorted."
        subtitle="Call, email, or fill the form. We answer fast — usually within 15 minutes during business hours."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-ice py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <ContactForm />

            <div className="space-y-6">
              <div className="rounded-3xl bg-navy-gradient p-8 text-white">
                <h3 className="font-display text-2xl font-bold">Get in touch directly</h3>
                <div className="mt-6 space-y-5">
                  <ContactRow Icon={Phone} label="Phone" value={COMPANY.phone} href={`tel:${COMPANY.phoneRaw}`} />
                  <ContactRow Icon={Mail} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                  <ContactRow Icon={MapPin} label="Office" value={COMPANY.address} />
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy-100">
                <p className="flex items-center gap-2 font-semibold text-navy">
                  <Clock className="h-5 w-5 text-electric" />
                  Hours
                </p>
                <table className="mt-4 w-full text-sm">
                  <tbody>
                    <Row left="Monday – Friday" right={COMPANY.hours.weekday} />
                    <Row left="Saturday – Sunday" right={COMPANY.hours.weekend} />
                    <Row left="Emergency" right={COMPANY.hours.emergency} accent />
                  </tbody>
                </table>
              </div>

              <div className="aspect-video overflow-hidden rounded-3xl ring-1 ring-navy-100">
                <iframe
                  title="Pacific Crest Plumbing Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10406.871234567!2d-123.3656!3d48.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVictoria%2C%20BC!5e0!3m2!1sen!2sca!4v0000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-4 w-4 text-copper" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-white/50">{label}</p>
        <p className="mt-0.5 text-white">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 hover:text-copper">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}

function Row({
  left,
  right,
  accent,
}: {
  left: string;
  right: string;
  accent?: boolean;
}) {
  return (
    <tr className="border-b border-navy-100 last:border-0">
      <td className="py-2.5 text-navy-400">{left}</td>
      <td className={`py-2.5 text-right font-semibold ${accent ? "text-emergency" : "text-navy"}`}>
        {right}
      </td>
    </tr>
  );
}
