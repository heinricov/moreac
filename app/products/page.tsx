import HeroProduct from "@/components/product/hero-product";
import Features from "@/components/product/feature";
import React from "react";
import BentoImages from "@/components/product/bento-images";
import ProductSidebar from "@/components/product/product-sidebar";

export default function page() {
  return (
    <>
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
