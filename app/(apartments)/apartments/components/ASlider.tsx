"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Tallbackens förvandlade fiskestugor till hem på Smøla i Norge",
    text: "Underhåll av 75 vindturbiner krävde 20 ingenjörer på plats i fem månader på en avlägsen ö.",
  },
  {
    title: "Enkelt och prisvärt boende för sjuksköterskor över hela Finland",
    text: "Tallbackens organiserade smidigt boende nära arbetsplatserna med kök och tvättmöjligheter.",
  },
  {
    title: "Konsult med regelbundna besök till huvudkontoret i Köpenhamn",
    text: "Konsulten bokade enkelt och prisvärt boende för 7 nätter via Tallbackens onlinebokning.",
  },
  {
    title: "Projektboende till 40 anställda i en bioproduktfabrik",
    text: "Tallbackens organiserade över 500 lägenheter för att matcha kundens behov i finska Lappland.",
  },
  {
    title: "Ett nytt hem till global familj – från Indien till Stockholm",
    text: "Tallbackens hjälpte familjen hitta långtidsboende när de flyttade från Bangalore till Stockholm.",
  },
  {
    title: "Hemtrevlig lägenhet för 3 chefer under en 10 dagars jobbresa",
    text: "Företagsledningen behövde boende i Finland under ett viktigt sammanslagningsprojekt.",
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

  const visible = items.slice(index, index + perView);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-julius text-center text-gray-900 mb-16">
          Hur företag använder Tallbackens
        </h2>

        {/* SLIDER */}
        <div className="grid md:grid-cols-3 gap-8 min-h-90">

          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src="/ap.jpg"
                  alt="Tallbackens boende"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 space-y-3">
                  <h3 className="font-julius text-xl text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

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
                  animate={{
                    scale: index === dotIndex ? 1.3 : 1,
                  }}
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