"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";

type IntroItem = {
  title: string;
  img: string;
  points: string[];
};

const introData: IntroItem[] = [
  { title: "Vandrarhem", img: "/b1.jpg", points: ["60 bäddar", "Fyr- & sexbäddsrum", "Öppet året runt"] },
  { title: "Rum & Komfort", img: "/b1.jpg", points: ["Egen dusch & WC", "Privat uteplats", "Egna utemöbler"] },
  { title: "Familjevänligt", img: "/b1.jpg", points: ["Lugnt område", "Trygg miljö", "Nära natur"] },
  { title: "Natur & Bad", img: "/b1.jpg", points: ["Badplatser", "Skog & promenader", "Avkoppling året runt"] },
  { title: "Utflykter", img: "/b1.jpg", points: ["Nära Kolmården", "Flera golfbanor", "Norrköping centrum"] },
  { title: "Företagsboende", img: "/b1.jpg", points: ["Perfekt för entreprenörer", "Projektboende", "Längre vistelser"] },
  { title: "Lägenheter", img: "/b1.jpg", points: ["Fullt utrustade", "Flera adresser", "Självständigt boende"] },
];

export default function HomeIntroSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate items for infinite effect
  const extendedData = [...introData, ...introData, ...introData]; // left-clone + original + right-clone
  const middleIndexOffset = introData.length; // middle set starting index

  useEffect(() => {
    const firstChild = carouselRef.current?.children[0] as HTMLElement | undefined;
    if (firstChild) {
      setCardWidth(firstChild.clientWidth + 24);
      // Start in the middle set
      carouselRef.current!.scrollLeft = middleIndexOffset * (firstChild.clientWidth + 24);
      setActiveIndex(0);
    }
  }, []);

  const scrollToIndex = (direction: "left" | "right") => {
    if (!carouselRef.current || !cardWidth) return;

    let newIndex = activeIndex + (direction === "right" ? 1 : -1);

    // Keep within original data length for active indicator
    const normalizedIndex = (newIndex + introData.length) % introData.length;
    setActiveIndex(normalizedIndex);

    // Scroll carousel
    const currentScroll = carouselRef.current.scrollLeft;
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
    carouselRef.current.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  // Infinite loop adjustment after scroll ends
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let timeout: any;

    const handleScrollEnd = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // If scroll is beyond the middle set, reset to middle
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += introData.length * cardWidth;
        } else if (carousel.scrollLeft >= 2 * introData.length * cardWidth) {
          carousel.scrollLeft -= introData.length * cardWidth;
        }
      }, 150);
    };

    carousel.addEventListener("scroll", handleScrollEnd);
    return () => carousel.removeEventListener("scroll", handleScrollEnd);
  }, [cardWidth]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
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

          {/* Carousel wrapper hides scrollbar */}
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-6 scroll-smooth snap-x snap-mandatory"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {extendedData.map((item, index) => (
                <div
                  key={index}
                  className="min-w-70 md:min-w-85 bg-white rounded-xl overflow-hidden shadow-md snap-start shrink-0"
                >
                  <div className="relative h-48 w-full">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 text-[#47d7ac] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CircleCheck Indicators */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {introData.map((_, index) => (
              <button key={index} onClick={() => scrollToIndex("right")} className="transition">
                <CircleCheck
                  className={`w-4 h-4 transition-transform ${
                    activeIndex === index ? "text-[#47d7ac] scale-110" : "text-gray-300 scale-100"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}