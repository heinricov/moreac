"use client";
import {
  ArrowBigRight,
  CircleCheck,
  Download,
  Folder,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProductSidebar() {
  const router = useRouter();
  const handleDownload = () => {
    router.push("/products/download");
  };
  return (
    <aside className="sticky top-32 flex flex-col gap-2">
      <div className="border-border bg-card mb-6 overflow-hidden rounded-lg border shadow-sm">
        <div className="border-border bg-muted/50 border-b px-5 py-4">
          <h3 className="flex items-center text-sm font-semibold">
            <CircleCheck className="text-muted-foreground mr-2.5 size-3.5" />
            Company Profile
          </h3>
        </div>
        <div className="p-5">
          <div className="text-foreground gap-4 text-lg font-semibold leading-snug">
            <p>The Complete Guide to Launching Your Startup</p>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-sm">Teknologi yang Digunakan</h3>
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Vercel"
              >
                <img
                  src="https://cdn.brandfetch.io/idDpCfN4VD/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1726463494344"
                  alt="Vercel"
                  className="size-5 dark:invert"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Github"
              >
                <img
                  src="https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980739"
                  alt="Github"
                  className="size-5 dark:invert"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="NextJS"
              >
                <img
                  src="https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1bxid64Mup7aczewSAYMX&t=1714556221292"
                  alt="NextJS"
                  className="size-5 dark:invert"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Tailwind CSS"
              >
                <img
                  src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
                  alt="Tailwind CSS"
                  className="size-5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-border bg-card mb-6 overflow-hidden rounded-lg border shadow-sm">
        <div className="border-border bg-muted/50 border-b px-5 py-4">
          <h3 className="flex items-center text-sm font-semibold">
            <Folder className="text-muted-foreground mr-2.5 size-3.5" />
            Version
          </h3>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Button
                className="w-full justify-between"
                variant="default"
                onClick={handleDownload}
              >
                Version 1.0 (Gratis)
                <ArrowBigRight className="ml-2 size-4" />
              </Button>
              <p className="text-muted-foreground text-xs">
                Versi standar yang sudah di fix (JSON Data).
              </p>
              <Button
                className="w-full justify-between"
                variant="outline"
                onClick={handleDownload}
              >
                Version 1.0 (Premium)
                <ArrowBigRight className="ml-2 size-4" />
              </Button>
              <p className="text-muted-foreground text-xs">
                Versi beta yang belum di fix (JSON Data).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-border bg-card mb-6 overflow-hidden rounded-lg border shadow-sm">
        <div className="border-border bg-muted/50 border-b px-5 py-4">
          <h3 className="flex items-center text-sm font-semibold">
            <Share2 className="text-muted-foreground mr-2.5 size-3.5" />
            Share this guide
          </h3>
        </div>
        <div className="p-5">
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Share on Instagram"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg"
                  alt="Instagram"
                  className="size-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Share on LinkedIn"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg"
                  alt="LinkedIn"
                  className="size-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Share on Product Hunt"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg"
                  alt="Product Hunt"
                  className="size-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                aria-label="Share on Twitter"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg"
                  alt="Twitter"
                  className="size-5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
