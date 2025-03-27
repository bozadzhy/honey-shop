"use client";

import Container from "../components/Container/Container";
import Image from "next/image";
import { Star } from "lucide-react";

export default function NaturalHoney() {
  return (
    <Container className="py-10 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Натуральний мед</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image of the product */}
        <div className="flex justify-center">
          <Image
            src="/natural-honey.jpg" // Replace with your image path
            alt="Натуральний мед"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Що таке натуральний мед?</h2>
          <p className="text-lg mb-4">
            Наш натуральний мед — це продукт, виготовлений без додавання цукру та консервантів. Він
            отримується з найкращих квіткових медів, зібраних нашими бджолами в екологічно чистих
            районах. Цей мед зберігає всі корисні властивості та вітаміни, що робить його ідеальним для
            підтримки здоров'я.
          </p>
          <p className="text-lg mb-4">
            Натуральний мед багатий на антиоксиданти, вітаміни та мінерали. Він зміцнює імунну систему,
            покращує травлення та допомагає у боротьбі з простудними захворюваннями.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Переваги натурального меду:</h3>
            <ul className="list-disc pl-5 text-lg">
              <li>100% натуральний продукт без домішок</li>
              <li>Багатий на антиоксиданти та вітаміни</li>
              <li>Підтримує імунну систему</li>
              <li>Поліпшує здоров'я шкіри та волосся</li>
              <li>Допомагає при застудах та грипі</li>
            </ul>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <span className="ml-2 text-lg">(5/5 - 200 відгуків)</span>
          </div>
        </div>
      </div>
      
    </Container>
  );
}
