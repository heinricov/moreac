import FAQ from "@/components/pricing/faq";
import PricingPage from "@/components/pricing/pricing-page";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga Template Website - Paket Terbaik untuk Bisnis Anda",
  description:
    "Lihat paket harga template website profesional kami. Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Harga terjangkau dengan kualitas premium dan dukungan teknis lengkap.",
  keywords: [
    "harga template website",
    "paket template",
    "harga website template",
    "template murah",
    "template premium",
    "paket bisnis",
    "harga terjangkau",
    "template indonesia",
  ],
  openGraph: {
    title: "Harga Template Website - Paket Terbaik untuk Bisnis Anda | Moreac",
    description:
      "Lihat paket harga template website profesional kami. Pilih paket yang sesuai dengan kebutuhan bisnis Anda dengan harga terjangkau.",
    url: "https://moreac.com/pricing",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Harga Template Website - Paket Terbaik Moreac",
      },
    ],
  },
  twitter: {
    title: "Harga Template Website - Paket Terbaik untuk Bisnis Anda | Moreac",
    description:
      "Lihat paket harga template website profesional kami dengan harga terjangkau.",
    images: ["/og-pricing.jpg"],
  },
  alternates: {
    canonical: "https://moreac.com/pricing",
  },
};

export default function page() {
  return (
    <>
      <PricingPage />
      <FAQ />
    </>
  );
}
