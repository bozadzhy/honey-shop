"use client";

import Container from "../components/Container/Container";
import Image from "next/image";

export default function About() {
  return (
    <Container className="py-10 mt-16 h-[calc(100vh-112px)]">
      <h1 className="text-3xl font-bold text-center mb-6">Про нас</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0">
          <Image
            src="/about-us-image.jpg"
            alt="Our Bee Farm"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-lg">
          <p className="mb-4">
            Ми — сімейна бджолярська ферма, яка займається вирощуванням та
            продажем натурального меду та інших продуктів бджільництва. Ми
            прагнемо надавати найкращу продукцію, вирощену з любов'ю та турботою
            про наших бджіл.
          </p>
          <p className="mb-4">
            Наш мед має неповторний смак і аромат, а також відомий своєю
            корисністю для здоров'я. Ми використовуємо лише натуральні методи і
            технології для виготовлення меду та продуктів бджільництва.
          </p>
          <p>
            У нашій фермі ми дбаємо про кожну бджолу і зберігаємо екологічний
            баланс, щоб наша продукція була найкращою і безпечною для
            споживання. З нами ви можете бути впевнені, що купуєте тільки
            натуральне і корисне.
          </p>
        </div>
      </div>
    </Container>
  );
}
