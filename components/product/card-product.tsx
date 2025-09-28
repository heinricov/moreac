"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "../ui/badge";

interface Product {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface CardProductProps {
  product: Product;
  className?: string;
}

export default function CardProduct({ product, className }: CardProductProps) {
  return (
    <Card key={product.id} className="shadow-none py-0 gap-3">
      <CardHeader className="p-2 pb-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          {/* Badge positioned on top of image */}
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-white/90 text-black hover:bg-white"
            >
              {product.label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-5 px-5">
        <h3 className="mt-4 text-[1.4rem] font-semibold tracking-tight">
          {product.title}
        </h3>
      </CardContent>
    </Card>
  );
}
