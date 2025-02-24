"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Categories from "../Categories/Categories";
import { useCategoryStore } from "@/store/category";
import {
  AlignJustify,
  AlignLeft,
  Search,
  ShoppingCart,
  UserIcon,
} from "lucide-react";
import Container from "./../Container/Container";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeId } = useCategoryStore((state) => state);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white/40 h-16 fixed top-0 left-0 right-0 w-full p-4 text-black z-10 text-center text-xl font-bold transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 shadow-md backdrop-blur-md"
          : "bg-black/70 shadow-md backdrop-blur-md"
      }`}
    >
      <Container>
        <nav className="flex justify-between space-x-6 ">
          <div>
            <Link
              href="/menu"
              className="flex items-center transition-transform hover:scale-105"
            >
              <AlignLeft />
              <span>Menu</span>
            </Link>
          </div>
          <div>
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
          </div>
          <div className="flex">
            <Link
              href="/cart"
              className=" px-2 transition-transform hover:scale-105"
            >
              <ShoppingCart />
            </Link>
            <Link
              href="/profile"
              className=" px-2 transition-transform hover:scale-105"
            >
              <Search />
            </Link>
            <Link
              href="/profile"
              className="px-2 transition-transform hover:scale-105"
            >
              <UserIcon />
            </Link>
          </div>
        </nav>
        <div
          className={`fixed top-16 left-0 w-full p-4 
    transition-all duration-700 ease-in-out transform
    ${
      isScrolled
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-60 pointer-events-none"
    }`}
        >
          <Categories className="bg-white/40 shadow-md backdrop-blur-md" />
        </div>
      </Container>
    </header>
  );
}
