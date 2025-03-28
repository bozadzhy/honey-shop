"use client";

import React, { FC } from "react";
import { useCategoryStore } from "@/store/category";
import { honeyCategories } from "@/app/constants/honeyCategories";
import { cn } from "@/lib/utils";
import Container from "../Container/Container";

interface Props {
  className?: string;
}

const HoneyCategories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        "border-t border-white flex gap-1 p-1 bg-white shadow-md",
        className
      )}
    >
      <Container className="flex gap-1 p-1">
        {honeyCategories.map(({ id, name }, index) => (
          <a
            href={`/#${name}`}
            key={index}
            className={cn(
              "flex items-center h-11 rounded-full px-5 text-amber-900 hover:transition-transform-color hover:text-amber-900/70",
              categoryActiveId === id &&
                "text-white bg-amber-900 hover:text-white"
            )}
          >
            <button>{name}</button>
          </a>
        ))}
      </Container>
    </div>
  );
};

export default HoneyCategories;
