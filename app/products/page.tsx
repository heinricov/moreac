import HeroProduct from "@/components/product/hero-product";
import Features from "@/components/product/feature";
import React from "react";
import TechUsed from "@/components/product/tech-used";
import TemplateUse from "@/components/product/template-use";
import BentoImages from "@/components/product/bento-images";

export default function page() {
  return (
    <>
      <HeroProduct />
      <Features />
      <TechUsed />
      <BentoImages />
      <TemplateUse />
    </>
  );
}
