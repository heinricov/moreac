import CtaSection from "@/components/home/cta";
import HeroSection from "@/components/home/hero-section";
import SectionProduct from "@/components/home/section-product";
import StatsSection from "@/components/home/stats";
import { WebsiteStructuredData } from "@/components/seo/structured-data";
import { generatePageMetadata } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <>
      <WebsiteStructuredData />
      <HeroSection />
      <SectionProduct />
      <CtaSection />
    </>
  );
}
