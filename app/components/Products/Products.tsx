"use client";
import { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/app/constants/products";
import Container from "../Container/Container";

interface ProductsProps {
  className?: string;
}

const Products: FC<ProductsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="mt-24">
        <h2 className="text-xl font-bold mb-4 text-center w-full">Мед</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
