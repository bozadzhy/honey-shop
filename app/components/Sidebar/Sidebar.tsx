"use client";
import Link from "next/link";
import { useSideBarStore } from "./../../../store/sidebar";
import {
  CircleX,
  Boxes,
  Nut,
  Package,
  Users,
  Truck,
  PhoneCall,
  Box,
} from "lucide-react";
import { useState } from "react";

export const productOptions = [
  {
    name: "Натуральний мед",
    link: "/natural-honey",
    icon: <Boxes className="w-5 h-5" />,
    src: "https://cdn.pixabay.com/photo/2017/05/11/12/24/nuns-2304009_1280.jpg",
  },
  {
    name: "Мед з горіхами",
    link: "/honey-with-nuts",
    icon: <Nut className="w-5 h-5" />,
    src: "https://cdn.pixabay.com/photo/2017/05/11/12/24/nuns-2304009_1280.jpg",
  },
  {
    name: "Продукти бджільництва",
    link: "/bee-products",
    icon: <Box className="w-5 h-5" />,
    src: "https://cdn.pixabay.com/photo/2017/05/11/12/24/nuns-2304009_1280.jpg",
  },
  {
    name: "Бджолопакети",
    link: "/bee-packages",
    icon: <Package className="w-5 h-5" />,
    src: "https://cdn.pixabay.com/photo/2017/05/11/12/24/nuns-2304009_1280.jpg",
  },
  { name: "Про нас", link: "/about", icon: <Users className="w-5 h-5" /> },

  {
    name: "Оплата та доставка",
    link: "/payment-delivery",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    name: "Контакти",
    link: "/contacts",
    icon: <PhoneCall className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar: closeSidebarStore } = useSideBarStore(
    (state) => state
  );
  const [isClosing, setIsClosing] = useState(false);

  const closeSidebar = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeSidebarStore();
      setIsClosing(false);
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isSidebarOpen
          ? "opacity-100 visible bg-black/50"
          : "opacity-0 invisible"
      }`}
      onClick={closeSidebar}
    >
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isSidebarOpen && !isClosing ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 text-amber-950">
          <h2 className="text-2xl font-semibold mb-6">Меню</h2>
          <ul className="space-y-2">
            {productOptions.map((option) => (
              <li
                key={option.link}
                className="text-lg hover:text-yellow-500 flex items-center gap-2"
              >
                {option.icon}
                <Link href={option.link}>
                  <p
                    onClick={closeSidebar}
                    className="block cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
                  >
                    {option.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 hover:text-amber-800"
            aria-label="Закрити меню"
          >
            <CircleX />
          </button>
        </div>
      </div>
    </div>
  );
}
