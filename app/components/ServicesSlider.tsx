"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Phone,
  Home,
  Box,
  CreditCard,
  Wifi,
  CircleCheck,
  ChevronRight,
  ChevronLeft,
  Circle,
  CircleFadingPlus,
  Headphones,
  HousePlus,
  ShelvingUnit,
  BadgeDollarSign,
  MessagesSquare,
  Car,
  Truck,
  UtensilsCrossed,
  CookingPot,
  WashingMachine,
  ShieldCheck,
  BedDouble,
  Bath,
} from "lucide-react";

type ServiceItem = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const servicesData: ServiceItem[] = [
  {
    title: "Företags- & projektboende",
    icon: <HousePlus className="w-10 h-10 text-[#47d7ac]" />,
    points: [
      "Skräddarsytt boende för företag, föreningar och byggprojekt",
      "Kort- eller långtidsvistelser, helt anpassat efter era behov",
    ],
  },
  {
    title: "WiFi",
    icon: <Wifi className="w-10 h-10 text-[#47d7ac]" />,
    points: [
      "Ny fiber 1000/1000 Mbit/s",
      "Fritt att använda på hela anläggningen",
    ],
  },
  {
    title: "Fri och trygg parkering",
    icon: <Car className="w-10 h-10 text-[#47d7ac]" />,
    points: [
      "Kostnadsfri parkering för personbil, skåpbil och lastbil",
      "Kameraövervakad parkering för din trygghet",
    ],
  },
  {
    title: "Två fullt utrustade kök",
    icon: <CookingPot className="w-10 h-10 text-[#47d7ac]" />,
    points: [
      "Tillgång till två fullt utrustade kök",
      "Laga dina egna måltider under vistelsen",
    ],
  },
  {
    title: "Tvättmöjligheter",
    icon: <WashingMachine className="w-10 h-10 text-[#47d7ac]" />,
    points: [
      "Tillgång till gemensam tvättstuga",
      "Enkelt att tvätta under din vistelse",
    ],
  },
  {
    title: "Kundservice 24/7",
    icon: <Headphones className="w-10 h-10 text-[#47d7ac]" />,
    points: ["Tillgängliga dygnet runt", "Ett samtal bort när du behöver oss"],
  },
  {
    title: "Mer utrymme för avkoppling",
    icon: <BedDouble className="w-10 h-10 text-[#47d7ac]" />,
    points: ["Rymliga och bekväma rum", "Privat dusch och WC i alla rum"],
  },
];

export default function ServicesSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedData = [...servicesData, ...servicesData, ...servicesData];
  const middleIndexOffset = servicesData.length;

  useEffect(() => {
    const firstChild = carouselRef.current?.children[0] as
      | HTMLElement
      | undefined;
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
      (newIndex + servicesData.length) % servicesData.length;
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
          carousel.scrollLeft += servicesData.length * cardWidth;
        } else if (carousel.scrollLeft >= 2 * servicesData.length * cardWidth) {
          carousel.scrollLeft -= servicesData.length * cardWidth;
        }
      }, 150);
    };

    carousel.addEventListener("scroll", handleScrollEnd);
    return () => carousel.removeEventListener("scroll", handleScrollEnd);
  }, [cardWidth]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-left mb-12 font-julius"
        >
          Så här fungerar det
        </motion.h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => scrollToIndex("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scrollToIndex("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel */}
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
                  className="w-70 h-80 bg-white rounded-xl border border-gray-200 shadow-md snap-start shrink-0 flex flex-col items-start p-6"
                  style={{ minHeight: "260px" }}
                >
                  {/* Bigger Icon */}
                  <div className="mb-6">{item.icon}</div>

                  <h3 className="text-xl font-semibold mb-4 font-julius">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {servicesData.map((_, index) => (
              <button key={index} onClick={() => scrollToIndex("right")}>
                <CircleFadingPlus
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
