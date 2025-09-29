import HeroProduct from "@/components/product/hero-product";
import Features from "@/components/product/feature";
import React from "react";
import BentoImages from "@/components/product/bento-images";
import ProductSidebar from "@/components/product/product-sidebar";
import {
  ProductStructuredData,
  BreadcrumbStructuredData,
} from "@/components/seo/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Website Profesional - Fitur & Teknologi",
  description:
    "Jelajahi fitur-fitur lengkap template website profesional kami. Template modern dengan komponen UI yang lengkap, SEO-friendly, responsive, dan siap pakai untuk bisnis Anda.",
  keywords: [
    "template website fitur",
    "komponen UI template",
    "template responsive",
    "template SEO friendly",
    "nextjs components",
    "react components",
    "tailwind css components",
    "template teknologi",
  ],
  openGraph: {
    title: "Template Website Profesional - Fitur & Teknologi | Moreac",
    description:
      "Jelajahi fitur-fitur lengkap template website profesional kami. Template modern dengan komponen UI yang lengkap dan siap pakai.",
    url: "https://moreac.com/products",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Moreac - Template Website Profesional dengan Fitur Lengkap",
      },
    ],
  },
  twitter: {
    title: "Template Website Profesional - Fitur & Teknologi | Moreac",
    description:
      "Jelajahi fitur-fitur lengkap template website profesional kami.",
    images: ["/og-products.jpg"],
  },
  alternates: {
    canonical: "https://moreac.com/products",
  },
};

export default function page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://moreac.com" },
    { name: "Products", url: "https://moreac.com/products" },
  ];

  return (
    <>
      <ProductStructuredData />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <section className="py-32">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-12 md:gap-8">
          {/* sisi kiri */}
          <div className="order-last md:order-none md:col-span-4 px-5">
            <ProductSidebar />
          </div>
          {/* sisi kanan */}
          <div className="md:col-span-8 md:col-start-5">
            <HeroProduct />
            <Features />
            <BentoImages />
          </div>
        </div>
      </section>
    </>
  );
}
