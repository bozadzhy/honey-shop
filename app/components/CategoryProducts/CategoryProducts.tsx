import React, { FC } from "react";
import Link from "next/link";
import { productOptions } from "../Sidebar/Sidebar";

interface CategoryProductsProps {
  setIsOpenCategoryProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryProducts: FC<CategoryProductsProps> = ({
  setIsOpenCategoryProducts,
}) => {
  return (
    <div
      onClick={() => setIsOpenCategoryProducts(false)}
      className="fixed inset-0 bg-transparent flex justify-center items-start pt-20 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 rounded-2xl shadow-2xl  w-full h-[calc(100vh-4rem)] flex flex-wrap justify-center gap-6"
      >
        {productOptions
          .filter((item) => item.src)
          .map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="w-80 h-72 border rounded-2xl shadow-xl bg-white p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-44 object-cover rounded-xl"
              />
              <p className="mt-3 text-lg font-semibold">
                {item.name}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
