import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EmergencyContent } from "@/components/sections/EmergencyContent";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing",
  description:
    "Plumbing emergency in Victoria BC? Call (250) 555-0198 — we answer in 3 rings, dispatch in 5 minutes, on-site in under 30. 24/7, 365 days a year.",
};

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        tone="emergency"
        eyebrow="24/7 Emergency Service"
        title="We Answer in 3 Rings. Period."
        subtitle="Burst pipe. Flooding. No water. Sewage backup. Whatever's happening — we're already on our way."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Emergency" }]}
      />
      <EmergencyContent />
    </>
  );
}
