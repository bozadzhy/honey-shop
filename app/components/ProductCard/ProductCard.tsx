"use client";

import Image from "next/image";
import { FC } from "react";

interface Props {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  addToCart?: () => void;
  inCart?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  isAddedToCart?: boolean;
}

const ProductCard: FC<Props> = ({ imageUrl, title, description, price, id }) => {
  return (
    <div id={id} className="bg-white rounded-2xl p-4 max-w-sm transition-transform hover:scale-105">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt="Honey Jar"
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-yellow-600">{price} $</span>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
          Купить
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
