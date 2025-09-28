import { Logo03, Logo04, Logo05, Logo07 } from "@/components/logos";

export default function TechUsed() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col lg:flex-row lg:items-center justify-between gap-10 rounded-lg bg-background sm:shadow-lg dark:shadow-foreground/10 py-14 px-6 mb-10">
      <div className="">
        <h3 className="text-4xl font-semibold tracking-tighter">
          Teknologi yang Digunakan
        </h3>
        <p className="mt-6 text-lg max-w-xl lg:max-w-md xl:max-w-xl">
          Website ini dibuat dengan teknologi terbaru dan terbaik untuk membuat
          website yang lebih cepat dan lebih baik.
        </p>
      </div>

      <div className="flex max-w-sm flex-wrap lg:justify-end gap-6 lg:gap-10 *:h-8 sm:*:h-10 md:*:h-8 lg:*:h-10">
        <Logo03 />
        <Logo04 />
        <Logo05 />
        <Logo07 />
      </div>
    </div>
  );
}
