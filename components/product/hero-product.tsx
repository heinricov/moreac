import React from "react";
import Image from "next/image";

import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function HeroSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
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
              <img
                className="h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="GitHub Logo"
                height="16"
                width="auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/openai.svg"
                alt="OpenAI Logo"
                height="24"
                width="auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and businesses.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                className="h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                alt="Tailwind CSS Logo"
                height="16"
                width="auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                className="h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/vercel.svg"
                alt="Vercel Logo"
                height="20"
                width="auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
