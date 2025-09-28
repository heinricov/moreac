import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TemplateUse() {
  return (
    <section>
      <div className="py-12 mb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
                Digunakan Template Ini
              </h2>
            </div>
            <div className="flex justify-end gap-3">
              <Button asChild variant="outline" size="lg">
                <Link href="#">Gunakan Template</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="#">Lihat Template</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
