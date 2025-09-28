import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section>
      <div className="bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
            <span className="text-muted-foreground">
              Buat Website Anda Sekarang.
            </span>{" "}
            Mulai Sekarang
          </h2>
          <p className="mt-4 text-lg">
            Kami membantu Anda membuat website yang menarik dan profesional
            untuk usaha Anda.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild className="pr-2">
              <Link href="#">
                Mulai Sekarang
                <ChevronRight
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" className="pl-2.5">
              <Link href="#">
                <Calendar className="!size-3.5 opacity-50" strokeWidth={2.5} />
                Lihat Sample
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
