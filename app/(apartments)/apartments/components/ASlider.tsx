"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Updated items with different images
const items = [
  {
    title: "En smidig och kostnadseffektiv lösning",
    text: "Vi matchar dina behov med rätt boende – snabbt, enkelt och utan krångel, oavsett hur specifika eller tidskritiska önskemålen är.",
    image: "/vararum/room.jpg",
  },
  {
    title: "Kostnadseffektiva och skräddarsydda lösningar",
    text: "Vi skapar genomtänkta och kostnadseffektiva boendelösningar anpassade efter dina behov. Med fokus på flexibilitet och en sömlös upplevelse.",
    image: "/moc/21.png",
  },
  {
    title: "Fullt utrustade kök",
    text: "Njut av friheten att laga din egen mat i ett fullt utrustat kök – med allt du behöver för en bekväm och flexibel vardag.",
    image: "/card/kok.jpg",
  },
  {
    title: "Bekväma tvättmöjligheter",
    text: "För din komfort erbjuder vi smidiga tvättlösningar – antingen direkt i lägenheten eller via tillgång till fastighetens gemensamma faciliteter.",
    image: "/ap.jpg",
  },
  {
    title: "24/7 Support",
    text: "Vi finns här när du behöver oss. Med ett samtal ser vi till att allt fungerar smidigt – så att du kan fokusera på det som är viktigast.",
    image: "/moc/8.png",
  },
];

export default function ASlider() {
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perView = mobile ? 1 : 3;
  const maxIndex = items.length - perView;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + perView));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - perView));
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-julius text-center text-gray-900 mb-16">
          Vi förenklar för företag
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / perView)}%)`,
            }}
          >
            {items.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 shrink-0 px-4">
                <div className="bg-gray-50 rounded-xs overflow-hidden shadow-lg h-full flex flex-col">
                  <img
                    src={item.image}
                    alt="Tallbackens boende"
                    className="w-full h-56 md:h-64 object-cover rounded-xs"
                  />

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-julius text-xl font-bold text-gray-900 leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center items-center gap-8 mt-12">
          {/* LEFT */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* DOTS */}
          <div className="flex gap-3">
            {(mobile ? items : [0, 3]).map((_, i) => {
              const dotIndex = mobile ? i : i * 3;
              return (
                <motion.div
                  key={i}
                  animate={{ scale: index === dotIndex ? 1.3 : 1 }}
                  className={`rounded-full transition ${
                    index === dotIndex
                      ? "w-4 h-4 bg-[#3db190]"
                      : "w-3 h-3 bg-gray-300"
                  }`}
                />
              );
            })}
          </div>

          {/* RIGHT */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}