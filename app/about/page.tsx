import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Sparkles, Wrench } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/ServicesGrid";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { COMPANY, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Pacific Crest Plumbing was founded in ${COMPANY.founded} in Victoria BC. Family-owned, Red Seal certified, and proud of every job we do.`,
};

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Honesty First",
    body: "We tell you what's wrong, what your options are, and what it costs — before we start. No surprises.",
  },
  {
    Icon: Wrench,
    title: "Craftsmanship",
    body: "Code-compliant work that lasts. Because doing it right the first time is cheaper than doing it twice.",
  },
  {
    Icon: HeartHandshake,
    title: "Local Roots",
    body: "Locally owned since 2001. We sponsor little league, support food banks, and live where we work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Plumbers Behind the Promise."
        subtitle="A family-owned business with deep Victoria roots and the highest standards in the trade."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-ice py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="One Truck. One Plumber. One Promise."
                align="left"
              />
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy-400">
                <p>
                  In 2001, Mike Crestwood bought a used Ford pickup, printed 500 business cards,
                  and started knocking on doors in Saanich. His pitch was simple: <em>show up
                  when promised, fix it right, charge a fair price.</em>
                </p>
                <p>
                  23 years later, we have 8 technicians, three vans, and 1,800+ five-star
                  reviews — but the promise hasn&apos;t changed. Every job, big or small, gets
                  the same standard Mike held himself to on day one.
                </p>
                <p>
                  We&apos;re proud to be the plumber Greater Victoria recommends to their
                  neighbors. And we&apos;d be honored to earn your recommendation too.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-electric-gradient opacity-20 blur-2xl" />
              <div className="overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-card-hover">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
                  By the Numbers
                </p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <StatBlock value="23" suffix=" years" label="Family-owned" />
                  <StatBlock value="8" label="Master plumbers" />
                  <StatBlock value="1,847" suffix="+" label="Happy customers" />
                  <StatBlock value="4.9" suffix="★" label="Average review" />
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="flex items-start gap-3 text-sm text-white/80">
                    <Sparkles className="mt-0.5 h-4 w-4 flex-none text-copper" />
                    Recognized by HomeStars as a &ldquo;Best of 2024&rdquo; service provider in
                    Greater Victoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="These aren't posters on the breakroom wall. They show up in every interaction."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-ice p-8 transition hover:bg-electric/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric text-white shadow-glow-blue">
                  <v.Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-navy-400">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="Meet the People Who Show Up"
            subtitle="Every Pacific Crest technician is Red Seal certified, background checked, and probably has more interesting hobbies than you'd think."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_-12px_rgba(11,24,41,0.1)] transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-100">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-copper">
                      {member.role}
                    </p>
                    <p className="font-display text-xl font-bold">{member.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-navy-400">{member.bio}</p>
                  <p className="mt-4 flex items-start gap-2 border-t border-navy-100 pt-4 text-xs text-navy-300">
                    <Award className="mt-0.5 h-3.5 w-3.5 flex-none text-copper" />
                    {member.cert}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-navy-300">
              Certifications, Memberships & Accolades
            </p>
            <div className="mt-6">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}

function StatBlock({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <p className="font-display text-4xl font-bold tracking-tight">
        {value}
        {suffix && <span className="text-copper">{suffix}</span>}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
