import React from "react";
import Image from "next/image";

import { Cpu, Github, Lock, Sparkles, Zap } from "lucide-react";
import { NextJS, TailwindCSS, Vercel } from "./logo-tech";

export default function HeroSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="overflow-hidden py-10 md:py-10">
      <div className="mx-auto max-w-6xl space-y-2 px-6 md:space-y-5">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {title || "Title Product "}
          </h2>
          <p className="mt-6 text-lg">
            {description ||
              "Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface."}
          </p>
        </div>
        <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
          <div className="perspective-midrange">
            <div className="rotate-x-6 -skew-2">
              <div className="aspect-88/36 relative">
                <Image
                  src="/product/product-1.png"
                  className="absolute inset-0 z-10"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                />
                <Image
                  src="/product/product-1.png"
                  className="hidden dark:block"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                />
                <Image
                  src="/product/product-1.png"
                  className="dark:hidden rounded-lg"
                  alt="payments illustration light"
                  width={2797}
                  height={1137}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Vercel className="size-4" />
              <h3 className="text-sm font-medium">Vercel</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Digunakan untuk deploy website.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Github className="size-4" />
              <h3 className="text-sm font-medium">Github</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Digunakan sebagai version control system untuk mengelola
              repository.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TailwindCSS className="size-4" />
              <h3 className="text-sm font-medium">Tailwind CSS</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Digunakan untuk styling website.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <NextJS className="size-4" />

              <h3 className="text-sm font-medium">NextJS</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Digunakan untuk membuat website yang lebih cepat dan lebih baik.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <NextJS className="size-4" />

              <h3 className="text-sm font-medium">NextJS</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Digunakan untuk membuat website yang lebih cepat dan lebih baik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
