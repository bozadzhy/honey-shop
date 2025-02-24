"use client";
import { FC, Fragment, useEffect, useRef, RefObject } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/app/constants/products";
import Container from "../Container/Container";
import { useIntersection } from "react-use"; //useIntersection=> хук для отлавливания скрола. еще можно использовать для оптимизации и подзагрузки с бека
import { useCategoryStore } from "@/store/category";

interface ProductsProps {
  className?: string;
  categoryId: number;
  title: string;
}

const Products: FC<ProductsProps> = ({ className, categoryId, title }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 0.8,
    }
  );

  useEffect(() => {
    // если блок в зоне видимости екрана
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div ref={intersectionRef} id={title}>
      <Container className={className}>
        <div>
          <div className="flex flex-col">
            <Fragment>
              <h2
                className="text-xl font-bold mb-4 text-center w-full"
                key={title}
              >
                {title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {products.map(
                  (product) =>
                    product.categoryId === categoryId && (
                      <ProductCard
                        key={product.id}
                        {...product}
                        id={String(product.categoryId)}
                      />
                    )
                )}
              </div>
            </Fragment>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
