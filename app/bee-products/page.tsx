"use client";

import Container from "../components/Container/Container";
import Image from "next/image";

const beeProducts = [
  {
    id: 1,
    name: "Мед з квітів",
    description: "Натуральний мед з різноманітних квітів.",
    price: 150,
    image: "/images/flower-honey.jpg", // Adjust this path to your image location
  },
  {
    id: 2,
    name: "Бджолиний віск",
    description: "Віск високої якості, натуральний продукт.",
    price: 200,
    image: "/images/beeswax.jpg", // Adjust this path to your image location
  },
  {
    id: 3,
    name: "Прополіс",
    description: "Прополіс з бджолиного вулика, натуральний антибіотик.",
    price: 180,
    image: "/images/propolis.jpg", // Adjust this path to your image location
  },
  {
    id: 4,
    name: "Мед з акації",
    description: "Мед з акації, дуже смачний та ароматний.",
    price: 220,
    image: "/images/acacia-honey.jpg", // Adjust this path to your image location
  },
];

export default function BeeProducts() {
  return (
    <Container className="py-10 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Продукти бджільництва</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {beeProducts.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex justify-center gap-4">
              <span className="text-lg font-semibold">{product.price} грн</span>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">
                Додати в кошик
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
