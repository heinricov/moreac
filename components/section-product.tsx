import { CardProduct } from "@/components/card-product";
import { product } from "@/lib/product";

interface SectionProductProps {
  className?: string;
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

export const SectionProduct = ({
  title = "Produk - Produk Kami Yang Bisa Anda Miliki Untuk Usaha Anda",
  maxItems = 8,
}: SectionProductProps) => {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div>
            <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">
              {title}
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {product.slice(0, maxItems).map((productItem, index) => (
              <CardProduct
                key={`${productItem.name}-${index}`}
                product={productItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
