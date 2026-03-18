"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Sofa } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Flexibla Lösningar",
    text: "Vi anpassar boendet efter ert projekt, antal personer och tidsperiod.",
  },
  {
    icon: MapPin,
    title: "Boende Nära Arbetsplatsen",
    text: "Vi placerar era anställda nära arbetsplatsen för att spara tid och kostnader.",
  },
  {
    icon: Sofa,
    title: "Fullt Möblerade Lägenheter",
    text: "Alla lägenheter har kök, wifi och allt som behövs för ett bekvämt boende.",
  },
];

export default function WhyTalbackans() {
  return (
    <section className="py-24 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl md:text-5xl font-extrabold leading-tight text-center mb-2 text-[#47d7ac] font-julius"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Varför välja Tallbackens?
        </motion.h2>

        <motion.p
          className="text-center text-sm text-gray-600 mt-2 font-semibold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Flexibla, fullt utrustade boenden för företag över hela Sverige.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#47d7ac]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#47d7ac]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 font-julius">{item.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
