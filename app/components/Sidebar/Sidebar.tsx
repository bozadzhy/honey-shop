"use client";
import Link from "next/link";
import { useSideBarStore } from "./../../../store/sidebar";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSideBarStore((state) => state);

  const options = [
    { name: "Натуральний мед", link: "/natural-honey" },
    { name: "Мед з горіхами", link: "/honey-with-nuts" },
    { name: "Продукти бджільництва", link: "/bee-products" },
    { name: "Бджолопакети", link: "/bee-packages" },
    { name: "Про нас", link: "/about" },
    { name: "Оплата та доставка", link: "/payment-delivery" },
    { name: "Контакти", link: "/contacts" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isSidebarOpen ? "opacity-100 visible bg-black/50" : "opacity-0 invisible"
      }`}
      onClick={closeSidebar}
    >
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold">Меню</h2>
          <ul className="mt-4 space-y-2">
            {options.map((option) => (
              <li key={option.link} className="text-md hover:text-[#d19f0b]">
                <Link href={option.link}>
                  <p
                    onClick={closeSidebar}
                    role="button"
                    tabIndex={0}
                    className="cursor-pointer"
                  >
                    {option.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={closeSidebar}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            aria-label="Закрыть меню"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
