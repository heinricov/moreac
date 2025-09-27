import { CardProduct } from "@/components/card-product";
import { product } from "@/lib/product";
import { cn } from "@/lib/utils";

interface SectionProductProps {
  className?: string;
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

export const SectionProduct = ({
  className,
  title = "Produk Kami",
  subtitle = "Solusi digital terbaik untuk bisnis Anda",
  maxItems,
}: SectionProductProps) => {
  const productsToShow = maxItems ? product.slice(0, maxItems) : product;

  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {productsToShow.map((productItem, index) => (
            <CardProduct
              key={`${productItem.name}-${index}`}
              product={productItem}
            />
          ))}
        </div>

        {/* View All Button */}
        {maxItems && product.length > maxItems && (
          <div className="text-center mt-12">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Lihat Semua Produk
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
