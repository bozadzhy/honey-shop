"use client";

import Container from "../components/Container/Container";
import { CreditCard, Truck, CheckCircle } from "lucide-react";

export default function PaymentDelivery() {
  return (
    <Container className="py-10 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Оплата та доставка</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Оплата */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Оплата</h2>
          <div className="flex items-center space-x-4">
            <CreditCard className="text-yellow-500" />
            <p className="text-lg">Ми приймаємо оплату через банківські картки Visa, MasterCard, а також через платіжні системи Apple Pay та Google Pay.</p>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-yellow-500" />
            <p className="text-lg">Безпечні та захищені транзакції для вашої зручності.</p>
          </div>
          <div className="flex items-center space-x-4">
            <CreditCard className="text-yellow-500" />
            <p className="text-lg">Також можливість оплатити при отриманні товару.</p>
          </div>
        </div>
        {/* Доставка */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Доставка</h2>
          <div className="flex items-center space-x-4">
            <Truck className="text-yellow-500" />
            <p className="text-lg">Ми здійснюємо доставку по всій Україні через кур'єрські служби та поштові компанії.</p>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-yellow-500" />
            <p className="text-lg">Термін доставки — 2-7 робочих днів в залежності від регіону.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Truck className="text-yellow-500" />
            <p className="text-lg">Безкоштовна доставка при замовленні від 1000 грн.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
