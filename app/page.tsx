import { HeroSection } from "@/components/sections/HeroSection";
import { LiveStatsBar } from "@/components/sections/LiveStatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveStatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <QuoteCalculator />
      <BeforeAfterGallery />
      <TestimonialsCarousel />
      <ServiceAreaSection />
      <FaqAccordion />
      <FinalCtaSection />
    </>
  );
}
