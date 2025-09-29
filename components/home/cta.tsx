import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getContentConfig } from "@/lib/config";

export default function CtaSection() {
  const content = getContentConfig();
  return (
    <section>
      <div className="bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
            <span className="text-muted-foreground">{content.cta.title}</span>{" "}
            {content.cta.subtitle}
          </h2>
          <p className="mt-4 text-lg">{content.cta.description}</p>
          <div className="mt-8 flex gap-3">
            <Button asChild className="pr-2">
              <Link href="/products">
                {content.cta.buttons.primary}
                <ChevronRight
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" className="pl-2.5">
              <Link href="/products/download">
                <Calendar className="!size-3.5 opacity-50" strokeWidth={2.5} />
                {content.cta.buttons.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
