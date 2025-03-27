import { FC } from "react";
import { CartItem } from "@/store/cart";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { Minus, Plus, X } from "lucide-react";

interface CartTableProps {
  products: CartItem[];
}

const CartTable: FC<CartTableProps> = ({ products }) => {
  const { updateQuantity, removeCartItem } = useCartStore();
  

  return (
    <div className="overflow-x-auto p-4 w-full">
      <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white text-left">
            <th className="p-3 border"></th>
            <th className="p-3 border">Название</th>
            <th className="p-3 border">Цена</th>
            <th className="p-3 border">Количество</th>
            <th className="p-3 border">Стоимость</th>
            <th className="p-3 border"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`border ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition`}
            >
              <td className="p-3 border">
                <Image
                  width={50}
                  height={50}
                  src={product.imageUrl}
                  alt={product.title}
                  className="rounded-lg shadow-md"
                />
              </td>
              <td className="p-3 border font-medium">{product.title}</td>
              <td className="p-3 border text-gray-700 font-semibold">
                {product.price} ₽
              </td>
              <td className="p-3 border flex items-center gap-2">
                <button
                  className="p-2 bg-gray-300 rounded disabled:opacity-50"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                  disabled={product.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center">{product.quantity}</span>
                <button
                  className="p-2 bg-gray-300 rounded"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  <Plus size={16} />
                </button>
              </td>
              <td className="p-3 border text-black-600 font-semibold">
                {product.price * product.quantity} ₽
              </td>
              <td className=" text-center flex items-center">
                <button
                  className="flex items-center p-1 bg-black/5"
                  onClick={() => removeCartItem(product.id)}
                >
                  <X color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
