"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "../HoneyCategories/HoneyCategories";
import {
  AlignLeft,
  Boxes,
  CircleX,
  Phone,
  Search,
  ShoppingCart,
  UserIcon,
} from "lucide-react";
import Container from "./../Container/Container";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { useSideBarStore } from "@/store/sidebar";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

export default function Header() {
  const toggleSidebar = useSideBarStore((state) => state.toggleSidebar);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCartStore((state) => state);
  const [isOpenSrearch, setIsOpenSearch] = useState(false);
  const [isOpenCategoryProducts, setIsOpenCategoryProducts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-white/50 p-2 text-center text-xl font-bold text-[#502409;]   backdrop-blur-16 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 shadow-md backdrop-blur-md"
          : "bg-black/70 shadow-md backdrop-blur-md"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between space-x-6">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="flex items-center transition-transform hover:scale-105"
            >
              <AlignLeft />
              <span>Menu</span>
            </button>
            <div className="hidden lg:block relative flex items-center justify-center gap-2">
              <button
                onClick={() => setIsOpenCategoryProducts((prev) => !prev)}
                className="group relative inline-flex items-center justify-center bg-white overflow-hidden rounded-full border px-6 py-3 text-lg font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md"
              >
                <span className="relative z-10 flex items-center">
                  <Boxes />
                  Продукція пасіки
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
              {isOpenCategoryProducts && (
                <CategoryProducts
                  setIsOpenCategoryProducts={setIsOpenCategoryProducts}
                />
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-105"
            >
              <Image
                src="/logo/pngimg.com - bee_PNG74680.png"
                alt="logo"
                width={40}
                height={40}
              />
              Bee Farm
            </Link>
            <Link
              href={"/contacts"}
              className="group relative inline-flex items-center justify-center bg-white overflow-hidden rounded-full border px-6 py-3 text-lg font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md"
            >
              <span className="relative z-10 flex items-center">Контакти</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href={"/about"}
              className="group relative inline-flex items-center justify-center bg-white overflow-hidden rounded-full border px-6 py-3 text-lg font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md"
            >
              <span className="relative z-10 flex items-center">Про нас</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex items-center">
              {isOpenSrearch && (
                <div className="absolute top-12 right-0 z-50 w-80 rounded-lg bg-white">
                  <button
                    onClick={() => setIsOpenSearch(false)}
                    className="absolute right-2 top-[50%] translate-y-[-50%] text-amber-900 hover:text-amber"
                    aria-label="Close Modal"
                  >
                    <CircleX />
                  </button>
                  <input
                    type="text"
                    placeholder="Пошук..."
                    className="w-full rounded-md border p-1 text-lg shadow-md focus:outline-none"
                  />
                </div>
              )}
              <button
                onClick={() => setIsOpenSearch((prev) => !prev)}
                className="px-2 transition-transform hover:scale-105"
              >
                <Search />
              </button>
            </div>

            <a
              href="tel:+380123456789"
              className="px-2 transition-transform hover:scale-105"
            >
              <Phone />
            </a>

            <Link
              href="/cart"
              className="flex px-2 transition-transform hover:scale-105"
            >
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="font-bold text-primary">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="px-2 transition-transform hover:scale-105"
            >
              <UserIcon />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
