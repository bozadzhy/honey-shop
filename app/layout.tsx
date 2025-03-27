import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honey shop",
  description: "pure honey",
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={barlow.className}>
        <Header />
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
