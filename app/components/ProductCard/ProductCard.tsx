"use client";

import Image from "next/image";
import { FC } from "react";
import { useCartStore } from "@/store/cart";
import { products } from "@/app/constants/products";
import { Check, Plus } from "lucide-react";

import Link from "next/link";

interface Props {
  id: number;
  categoryId: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
}

const ProductCard: FC<Props> = ({
  id,
  imageUrl,
  title,
  description,
  price,
}) => {
  const { addToCart, cartItems } = useCartStore();
  const isInCart = cartItems.some((item) => item.id === id);

  const handleClick = (id: number) => {
    const findOne = products.find((p) => p.id === id);
    if (findOne) {
      addToCart({ ...findOne, quantity: 1 });
    }
  };
  return (
    <div
      id={String(id)}
      className="bg-white rounded-2xl p-4 max-w-sm transition-transform hover:scale-105"
    >
      <Link href={`/products/${id}`} key={id}>
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
        <p className="text-amber-900 text-sm mt-2">{description}</p>{" "}
      </Link>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-amber-900">{price} $</span>

        <button
          onClick={() => handleClick(id)}
          className="flex bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          {isInCart ? (
            <span className="text-xs text-white mx-1">
              <Check />
            </span>
          ) : (
            <span className="text-xs text-white mx-1">
              <Plus />
            </span>
          )}
          <p>{isInCart ? "В кошику" : "Купить"}</p>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
