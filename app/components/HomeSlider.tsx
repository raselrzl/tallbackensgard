"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Check,
  CircleCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type IntroItem = {
  title: string;
  ic: string; // renamed from image -> ic
  points: string[];
};

const introData: IntroItem[] = [
  {
    title: "Vandrarhem",
    ic: "/ic/bed.png",
    points: ["60 bäddar", "Fyr- & sexbäddsrum", "Öppet året runt"],
  },
  {
    title: "Rum & Komfort",
    ic: "/ic/rum.png",
    points: ["Egen dusch & WC", "Privat uteplats", "Egna utemöbler"],
  },
  {
    title: "Familjevänligt",
    ic: "/ic/family.png",
    points: ["Lugnt område", "Trygg miljö", "Nära natur"],
  },
  {
    title: "Natur & Bad",
    ic: "/ic/nature.png",
    points: ["Badplatser", "Skog & promenader", "Avkoppling året runt"],
  },
  {
    title: "Utflykter",
    ic: "/ic/zoo.png",
    points: ["Nära Kolmården", "Flera golfbanor", "Norrköping centrum"],
  },
  {
    title: "Företagsboende",
    ic: "/ic/corporate.png",
    points: ["Perfekt för entreprenörer", "Projektboende", "Längre vistelser"],
  },
  {
    title: "Lägenheter",
    ic: "/ic/apartment.png",
    points: ["Fullt utrustade", "Flera adresser", "Självständigt boende"],
  },
];

export default function HomeIntroSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedData = [...introData, ...introData, ...introData];
  const middleIndexOffset = introData.length;

  useEffect(() => {
    const firstChild = carouselRef.current?.children[0] as HTMLElement | undefined;
    if (firstChild) {
      const width = firstChild.clientWidth + 24;
      setCardWidth(width);
      carouselRef.current!.scrollLeft = middleIndexOffset * width;
      setActiveIndex(0);
    }
  }, []);

  const scrollToIndex = (direction: "left" | "right") => {
    if (!carouselRef.current || !cardWidth) return;

    let newIndex = activeIndex + (direction === "right" ? 1 : -1);
    const normalizedIndex =
      (newIndex + introData.length) % introData.length;

    setActiveIndex(normalizedIndex);

    const currentScroll = carouselRef.current.scrollLeft;
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

    carouselRef.current.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let timeout: any;

    const handleScrollEnd = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += introData.length * cardWidth;
        } else if (
          carousel.scrollLeft >=
          2 * introData.length * cardWidth
        ) {
          carousel.scrollLeft -= introData.length * cardWidth;
        }
      }, 150);
    };

    carousel.addEventListener("scroll", handleScrollEnd);
    return () =>
      carousel.removeEventListener("scroll", handleScrollEnd);
  }, [cardWidth]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-left mb-12 font-julius"
        >
          Upptäck Tallbackens
        </motion.h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollToIndex("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollToIndex("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-6 scroll-smooth snap-x snap-mandatory"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {extendedData.map((item, index) => (
                <div
                  key={index}
                  className="min-w-70 bg-white rounded border border-gray-200 shadow-md snap-start shrink-0 flex flex-col items-start p-6"
                  style={{ minHeight: "300px" }}
                >
                  {/* ic image */}
                  <div className="mb-6">
                    <Image
                      src={item.ic}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 font-julius">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 text-[#47d7ac]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {introData.map((_, index) => (
              <button key={index} onClick={() => scrollToIndex("right")}>
                <CircleCheck
                  className={`w-4 h-4 ${
                    activeIndex === index
                      ? "text-[#47d7ac] scale-110"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}