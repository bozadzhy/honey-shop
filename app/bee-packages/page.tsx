"use client";

import Container from "../components/Container/Container";
import Image from "next/image";

const beePackages = [
  {
    id: 1,
    name: "Бджолопакет з 1 маткою",
    description: "Бджолопакет з однією маткою і робочими бджолами для початку пасічницької діяльності.",
    price: 1500,
    image: "/images/bee-package-1.jpg", // Adjust this path to your image location
  },
  {
    id: 2,
    name: "Бджолопакет з 2 матками",
    description: "Бджолопакет з двома матками для створення сильніших колоній.",
    price: 2000,
    image: "/images/bee-package-2.jpg", // Adjust this path to your image location
  },
  {
    id: 3,
    name: "Пакет з бджолами для відновлення пасіки",
    description: "Бджолопакет для відновлення пасіки, з сильною бджолою.",
    price: 1800,
    image: "/images/bee-package-3.jpg", // Adjust this path to your image location
  },
  {
    id: 4,
    name: "Бджолопакет для зимівлі",
    description: "Спеціальний бджолопакет для зимівлі, з маткою і підготовленими бджолами.",
    price: 2200,
    image: "/images/bee-package-4.jpg", // Adjust this path to your image location
  },
];

export default function BeePackages() {
  return (
    <Container className="py-10 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Бджолопакети</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {beePackages.map((packageItem) => (
          <div key={packageItem.id} className="border rounded-lg shadow-lg p-4 text-center">
            <Image
              src={packageItem.image}
              alt={packageItem.name}
              width={300}
              height={300}
              className="rounded-lg mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{packageItem.name}</h3>
            <p className="text-lg mb-4">{packageItem.description}</p>
            <div className="flex justify-center gap-4">
              <span className="text-lg font-semibold">{packageItem.price} грн</span>
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
