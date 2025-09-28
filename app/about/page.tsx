import AboutPage from "@/components/about/about-page";
import Contact from "@/components/about/contact";
import Preview from "@/components/about/preview";
import Services from "@/components/about/services";
import StackTech from "@/components/about/stacktech";
import React from "react";

export default function page() {
  return (
    <>
      <AboutPage />
      <StackTech />
      <Services />
      <Preview />
      <Contact />
    </>
  );
}
