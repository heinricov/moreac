import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Integrations() {
  const logos = [
    {
      name: "Vercel",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      name: "Astro",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Supabase",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-6 w-auto",
    },
    {
      name: "Figma",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Astro",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-6 w-auto",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="space-y-6 text-center">
          <h2 className="text-foreground text-2xl font-semibold">
            Integrate with your favorite tools :{" "}
          </h2>
          <div className="*:bg-foreground/5 mx-auto flex max-w-xl flex-wrap justify-center gap-0.5 *:rounded *:p-6 *:first:rounded-l-xl *:last:rounded-r-xl">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="#">More Integrations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
