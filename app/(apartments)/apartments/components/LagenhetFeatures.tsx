"use client";

import { motion } from "framer-motion";
import { BedDouble, Wifi, CookingPot, Car, Tv, ShowerHead, WashingMachine } from "lucide-react";

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
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-julius text-gray-900">
            Vad ingår i våra lägenheter
          </h2>
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

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
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Icon
                  size={36}
                  className="text-[#47d7ac] mb-4"
                />

                <h3 className="font-julius text-xl text-gray-900 mb-2">
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