"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";""

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Bee Farm</h3>
            <p>Займаємось виробництвом та продажем натурального меду та бджолопродуктів.</p>
            <p>Контактний телефон: +380123456789</p>
            <p>Адреса: м. Київ, вул. Природна 10</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Швидкі посилання</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-yellow-500">Головна</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500">Про нас</Link>
              </li>
              <li>
                <Link href="/payment-delivery" className="hover:text-yellow-500">Оплата та доставка</Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-yellow-500">Контакти</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ми в соцмережах</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-white hover:text-yellow-500">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-white hover:text-yellow-500">
                <Instagram size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-white hover:text-yellow-500">
                <Twitter size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-yellow-500">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Підпишись на новини</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Введіть ваш email"
                className="p-2 mb-4 border-2 border-gray-300 rounded-lg"
              />
              <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">
                Підписатися
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 border-t pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bee Farm. Всі права захищено.
          </p>
        </div>
      </Container>
    </footer>
  );
}
