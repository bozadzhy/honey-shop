"use client";

import React, { FC } from "react";
import { useCategoryStore } from "@/store/category";
import { categories } from "@/app/constants/categories";
import { cn } from "@/lib/utils";
import Container from "../Container/Container";

interface Props {
  className?: string;
}

const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <Container>
    <div
      className={cn("flex gap-1 p-1 rounded-2xl bg-white shadow-md backdrop-blur-md", className)}
    >
      {categories.map(({ id, name }, index) => (
        <a
          href={`/#${name}`}
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5 text-black hover:text-black/70 hover:transition-transform hover:scale-105",
            categoryActiveId === id &&
              "text-primary bg-yellow-500/70"
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
    </Container>
  );
};

export default Categories;
