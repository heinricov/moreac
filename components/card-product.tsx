"use client";

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

  const handleClick = () => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/product/${productSlug}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.images[0].alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay dengan description saat hover */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 flex items-center justify-center p-4 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="text-white text-sm text-center leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Badge category */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
