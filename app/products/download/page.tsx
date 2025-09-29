import { DownloadProduct } from "@/components/product/download-product";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Template Website - Panduan Lengkap",
  description:
    "Download template website profesional kami dengan panduan lengkap. Pelajari cara menggunakan template dengan mudah, mulai dari instalasi hingga deployment. Template siap pakai untuk bisnis Anda.",
  keywords: [
    "download template website",
    "panduan template",
    "cara menggunakan template",
    "instalasi template",
    "deployment template",
    "tutorial template",
    "template guide",
    "download gratis",
  ],
  openGraph: {
    title: "Download Template Website - Panduan Lengkap | Moreac",
    description:
      "Download template website profesional dengan panduan lengkap. Pelajari cara menggunakan template dengan mudah untuk bisnis Anda.",
    url: "https://moreac.com/products/download",
    images: [
      {
        url: "/og-download.jpg",
        width: 1200,
        height: 630,
        alt: "Download Template Website - Panduan Lengkap Moreac",
      },
    ],
  },
  twitter: {
    title: "Download Template Website - Panduan Lengkap | Moreac",
    description:
      "Download template website profesional dengan panduan lengkap dan mudah diikuti.",
    images: ["/og-download.jpg"],
  },
  alternates: {
    canonical: "https://moreac.com/products/download",
  },
};

export default function page() {
  return (
    <>
      <DownloadProduct />
    </>
  );
}
