"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  BedDouble,
  Wifi,
  CookingPot,
  Car,
  Tv,
  ShowerHead,
  WashingMachine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: BedDouble,
    title: "Fullt möblerade",
    text: "Bekväma sängar, soffor och arbetsytor så att du kan känna dig som hemma.",
  },
  {
    icon: Wifi,
    title: "Snabbt Wi-Fi",
    text: "Stabil och snabb internetuppkoppling i alla lägenheter.",
  },
  {
    icon: CookingPot,
    title: "Fullt utrustat kök",
    text: "Kök med allt du behöver för att laga mat under din vistelse.",
  },
  {
    icon: WashingMachine,
    title: "Tvättmöjligheter",
    text: "Tvättmaskin eller tvättstuga i byggnaden.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    text: "Koppla av efter jobbet med streaming och underhållning.",
  },
  {
    icon: ShowerHead,
    title: "Modernt badrum",
    text: "Fräscha badrum med dusch och alla nödvändigheter.",
  },
  {
    icon: Car,
    title: "Parkering",
    text: "Många av våra lägenheter erbjuder parkering nära boendet.",
  },
];

export default function LagenhetFeatures() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { current } = sliderRef;
    const scrollAmount = 300;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
           {/* Slider Controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pr-6 snap-x snap-mandatory no-scrollbar"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="min-w-70 max-w-70 bg-white p-6 rounded-xl shadow-sm hover:shadow-md shrink-0 snap-start transition"
              >
                <Icon size={32} className="text-[#47d7ac] mb-4" />
                <h3 className="font-julius text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}