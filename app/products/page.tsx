import HeroProduct from "@/components/product/hero-product";
import Features from "@/components/product/feature";
import React from "react";
import TemplateUse from "@/components/product/template-use";
import BentoImages from "@/components/product/bento-images";

export default function page() {
  return (
    <>
      <HeroProduct />
      <Features />
      <BentoImages />
      <TemplateUse />
    </>
  );
}
