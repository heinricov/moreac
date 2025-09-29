import AboutPage from "@/components/about/about-page";
import Contact from "@/components/about/contact";
import Preview from "@/components/about/preview";
import Services from "@/components/about/services";
import StackTech from "@/components/about/stacktech";
import {
  OrganizationStructuredData,
  ServiceStructuredData,
  BreadcrumbStructuredData,
} from "@/components/seo/structured-data";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Moreac Team",
  description:
    "Kenali tim Moreac yang berdedikasi menciptakan template website profesional berkualitas tinggi. Kami menyediakan solusi digital terbaik untuk mengembangkan bisnis Anda.",
  keywords: [
    "tentang moreac",
    "tim moreac",
    "developer template",
    "web developer indonesia",
    "template developer",
    "moreac team",
    "tentang perusahaan",
    "profil perusahaan",
  ],
  openGraph: {
    title: "Tentang Kami - Moreac Team | Template Website Profesional",
    description:
      "Kenali tim Moreac yang berdedikasi menciptakan template website profesional berkualitas tinggi untuk bisnis Anda.",
    url: "https://moreac.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Moreac Team - Tim Developer Template Website Profesional",
      },
    ],
  },
  twitter: {
    title: "Tentang Kami - Moreac Team",
    description:
      "Kenali tim Moreac yang berdedikasi menciptakan template website profesional berkualitas tinggi.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "https://moreac.com/about",
  },
};

export default function page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://moreac.com" },
    { name: "About", url: "https://moreac.com/about" },
  ];

  return (
    <>
      <OrganizationStructuredData />
      <ServiceStructuredData />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <AboutPage />
      <StackTech />
      <Services />
      <Preview />
      <Contact />
    </>
  );
}
