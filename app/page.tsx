import CtaSection from "@/components/cta";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import { SectionProduct } from "@/components/section-product";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SectionProduct maxItems={3} />
      <StatsSection />
      <CtaSection />
    </>
  );
}
