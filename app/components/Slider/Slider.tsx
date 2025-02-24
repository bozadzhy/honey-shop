"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "@/app/constants/products";

export default function Slider() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop
        dir="rtl"
        className="w-full h-full"
      >
        {products.map(
          ({ imageBackground, imageUrl, title, description }, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[75vh]">
                <Image
                  src={imageBackground}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="h-full w-full"
                />
              </div>
              <AnimatedImage
                imageUrl={imageUrl}
                title={title}
                index={index}
                description={description}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

const AnimatedImage = ({
  imageUrl,
  title,
  description,
  index,
}: {
  imageUrl: string;
  title: string;
  description: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, [index]);

  return (
    <div className="absolute left-32 bottom-24 w-96 h-96 flex items-center justify-center">
      <Image
        src={imageUrl}
        alt={`Slide ${index + 1}`}
        fill
        style={{ objectFit: "contain" }}
        className={`transition-all duration-[1300ms] ease-out transform ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-130%]"
        }`}
      />
      <h2
        className={` tracking-[2.7px] uppercase absolute text-4xl text-[#502409;] text-nowrap font-light left-96 bottom-12 transition-all duration-[1500ms] ease-out transform ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-100%]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};
