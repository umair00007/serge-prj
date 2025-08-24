"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `"The quality never wanes. Continuing to offer 925 silver and high-end, quality jewellery at an alarmingly accessible price point"`,
    author: "Clash",
    logo: "/assets/images/clash.svg",
  },
  {
    text: `"Serge DeNimes has blended the traditionally clear line between fine jewelry and the fast-paced environment of the trend-dominated fashion industry"`,
    author: "Culted",
    logo: "/assets/images/culted.svg",
  },
  {
    text: `"London-based jewellery label Serge DeNimes creates animated signet rings every time"`,
    author: "Esquire",
    logo: "/assets/images/esquire.svg",
  },
  {
    text: `"Delivering goods straight out of London, Serge has maintained a strong presence through its frequent themed collections"`,
    author: "Highsnobiety",
    logo: "/assets/images/highsnobiety.svg",
  },
  {
    text: `"Serge DeNimes is the trend-centric brand that’s revolutionising the landscape of affordable jewellry"`,
    author: "GQ",
    logo: "/assets/images/gq.svg",
  },
  {
    text: `"Dive into a world where fashion meets emotion and every piece is a journey towards self-expression"`,
    author: "Fault",
    logo: "/assets/images/favo.svg",
  },
];

export default function OurBrandsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 flex flex-col items-center text-center">
      <div className="max-w-2xl relative">
        <button
          onClick={prevSlide}
          className="absolute left-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronLeft className="w-10 h-10 stroke-1 font-semibold text-gray-400" />
        </button>

        <div className="w-[80dvh] px-8 font-serge font-semibold transition-all duration-800">
          <p className="text-2xl italic text-gray-800">
            {testimonials[activeIndex].text}
          </p>
          <p className="mt-4 text-sm font-medium text-gray-600">
            {testimonials[activeIndex].author}
          </p>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[-3rem] top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronRight className="w-10 h-10 stroke-1 font-semibold text-gray-400" />
        </button>
      </div>
      <div className="mt-2 flex gap-20 items-center justify-center opacity-70 w-[70vh] h-[200px]">
        {[-1, 0, 1].map((offset) => {
          const index =
            (activeIndex + offset + testimonials.length) % testimonials.length;
          const item = testimonials[index];

          return (
            <div className="w-[200px] px-" key={index}>
              <img
                src={item.logo}
                alt={item.author}
                className={`h-[40px] transition-all duration-800 ${
                  offset === 0
                    ? "opacity-100 grayscale-0 scale-110"
                    : "opacity-40 grayscale"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
