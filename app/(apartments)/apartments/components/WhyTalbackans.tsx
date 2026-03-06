"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Flexibla Lösningar",
    text: "Vi anpassar boendet efter ert projekt, antal personer och tidsperiod.",
  },
  {
    title: "Boende Nära Arbetsplatsen",
    text: "Vi placerar era anställda nära arbetsplatsen för att spara tid och kostnader.",
  },
  {
    title: "Fullt Möblerade Lägenheter",
    text: "Alla lägenheter har kök, wifi och allt som behövs för ett bekvämt boende.",
  },
];

export default function WhyTalbackans() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-julius mb-16">
          Varför välja Talbackans
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}