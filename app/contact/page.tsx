import ContactPage from "@/components/contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - Konsultasi Template Website",
  description:
    "Hubungi tim Moreac untuk konsultasi template website profesional. Dapatkan bantuan pemilihan template yang tepat untuk bisnis Anda dan dukungan teknis terbaik.",
  keywords: [
    "hubungi moreac",
    "konsultasi template",
    "customer service",
    "bantuan template",
    "support template",
    "kontak moreac",
    "customer support",
    "layanan pelanggan",
  ],
  openGraph: {
    title: "Hubungi Kami - Konsultasi Template Website | Moreac",
    description:
      "Hubungi tim Moreac untuk konsultasi template website profesional dan dukungan teknis terbaik untuk bisnis Anda.",
    url: "https://moreac.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hubungi Moreac - Konsultasi Template Website Profesional",
      },
    ],
  },
  twitter: {
    title: "Hubungi Kami - Konsultasi Template Website | Moreac",
    description:
      "Hubungi tim Moreac untuk konsultasi template website profesional dan dukungan teknis terbaik.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://moreac.com/contact",
  },
};

export default function page() {
  return (
    <>
      <ContactPage />
    </>
  );
}
