import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import Header from "./components/Header/Header";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Honey shop",
  description: "pure honey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={barlow.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
