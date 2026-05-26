import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service residential and commercial plumbing in Victoria BC. Emergency, drain cleaning, water heaters, leaks, renovations, sewer line — all guaranteed.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Plumbing Done Right. Every Time."
        subtitle="From a leaking faucet at midnight to a full bathroom renovation — we handle every job with the same craftsmanship and care."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesDetail />
      <FinalCtaSection />
    </>
  );
}
