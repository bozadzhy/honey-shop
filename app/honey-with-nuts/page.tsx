"use client";

import Container from "../components/Container/Container";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HoneyWithNuts() {
  return (
    <Container className="py-10 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Мед з горіхами</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image of the product */}
        <div className="flex justify-center">
          <Image
            src="/honey-with-nuts.jpg" // Replace with your image path
            alt="Мед з горіхами"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Що таке мед з горіхами?</h2>
          <p className="text-lg mb-4">
            Мед з горіхами — це унікальна комбінація ніжного натурального меду та корисних горіхів,
            що додають йому чудовий смак і текстуру. Ми використовуємо тільки свіжі, якісні горіхи, щоб
            створити продукт, який не тільки смачний, але й корисний для здоров'я.
          </p>
          <p className="text-lg mb-4">
            Цей мед багатий на корисні жири, білки та антиоксиданти, що допомагають зміцнювати імунну
            систему, покращують роботу серця та підтримують загальне здоров'я.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Переваги меду з горіхами:</h3>
            <ul className="list-disc pl-5 text-lg">
              <li>Натуральний мед з додаванням свіжих горіхів</li>
              <li>Багатий на корисні жири та білки</li>
              <li>Поліпшує здоров'я серця і судин</li>
              <li>Зміцнює імунну систему</li>
              <li>Містить антиоксиданти, які підтримують здоров'я</li>
            </ul>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <span className="ml-2 text-lg">(5/5 - 150 відгуків)</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
