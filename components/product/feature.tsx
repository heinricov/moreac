"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Component,
  Database,
  FileJson,
  Fingerprint,
  Globe,
  IdCard,
  Layers,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  type ImageKey =
    | "komponen-yang-digunakan"
    | "halaman"
    | "nextjs-seo"
    | "responsive-website";
  const [activeItem, setActiveItem] = useState<ImageKey>(
    "komponen-yang-digunakan"
  );

  const features = [
    {
      key: "komponen-yang-digunakan",
      title: "Komponen yang digunakan",
      description:
        "Teridiri dari berbagai komponen yang digunakan pada masing - masing halaman, komponen yang mudah dikelola dan diubah.",
      image: "/charts.png",
      icon: <Component className="size-4" />,
    },
    {
      key: "halaman",
      title: "Halaman",
      description:
        "Teridiri dari berbagai halaman yang digunakan pada masing - masing halaman, halaman yang mudah dikelola dan diubah.",
      image: "/music.png",
      icon: <Layers className="size-4" />,
    },
    {
      key: "nextjs-seo",
      title: "NextJS SEO",
      description:
        "Teridiri dari berbagai NextJS SEO yang digunakan pada masing - masing halaman, NextJS SEO yang mudah dikelola dan diubah.",
      image: "/mail2.png",
      icon: <Globe className="size-4" />,
    },
    {
      key: "responsive-website",
      title: "Responsive Website",
      description:
        "Teridiri dari berbagai Responsive Website yang digunakan pada masing - masing halaman, Responsive Website yang mudah dikelola dan diubah.",
      image: "/payments.png",
      icon: <MonitorSmartphone className="size-4" />,
    },
    {
      key: "json-data",
      title: "Json Data",
      description:
        "Teridiri dari berbagai Json Data yang digunakan pada masing - masing halaman, Json Data yang mudah dikelola dan diubah.",
      image: "/json.png",
      icon: <FileJson className="size-4" />,
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Fitur - Fitur Yang Tersedia
          </h2>
          <p className="mt-6 text-lg">
            Kami membantu Anda membuat website yang modular dan mudah dikelola.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-1 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            {features.map((feature) => (
              <AccordionItem key={feature.key} value={feature.key}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    {feature.icon}
                    {feature.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* <div className="">
            <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
              <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
              <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                <Image
                  src="/product/product-1-d.png"
                  className="size-full object-cover object-left-top dark:mix-blend-lighten"
                  alt="Feature image"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
