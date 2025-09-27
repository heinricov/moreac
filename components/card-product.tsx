"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProductImage {
  url: string;
  alt: string;
  description: string;
}

interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  images: ProductImage[];
}

interface CardProductProps {
  product: Product;
  className?: string;
}

export const CardProduct = ({ product, className }: CardProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleLihatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const productSlug = product.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/product/${productSlug}`);
  };

  const handleBeliClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implementasi logika pembelian
    console.log("Beli produk:", product.name);
  };

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.images[0].alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay dengan description dan buttons saat hover */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="text-white text-sm text-center leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLihatClick}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                Lihat
              </Button>
              <Button
                size="sm"
                onClick={handleBeliClick}
                className="bg-primary hover:bg-primary/90"
              >
                Beli
              </Button>
            </div>
          </div>

          {/* Badge category */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
