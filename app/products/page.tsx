import HeroProduct from "@/components/product/hero-product";
import Features from "@/components/product/feature";
import React from "react";
import Tech from "@/components/product/tech";

export default function page() {
  return (
    <>
      <HeroProduct />
      <Features />
      <Tech />
    </>
  );
}
