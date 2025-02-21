"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-black/40 h-16 fixed top-0 left-0 right-0 w-full p-4 text-white z-10 text-center text-xl font-bold transition-all duration-300 ${
        isScrolled ? "bg-black/70 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-center space-x-6">
        <Link href="/company" className="hover:text-gray-300">
          Company
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Our Products
        </Link>
        <Link
          href="/"
          className="hover:text-gray-300 bg-black/40 rounded-full px-4"
        >
          Bee Farm
        </Link>
        <Link href="/cart" className="hover:text-gray-300">
          Cart
        </Link>
        <Link href="/profile" className="hover:text-gray-300">
          Profile
        </Link>
      </nav>
    </header>
  );
}
