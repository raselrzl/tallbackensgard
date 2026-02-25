"use client";

import { motion } from "framer-motion";
import { Utensils, Refrigerator, Snowflake, CookingPot } from "lucide-react";

export default function Kitchen() {
  return (
    <section id="kok" className="relative w-full h-140 md:h-100 flex items-center justify-center font-inter overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/vararum/kitchen.jpg"
        alt="Våra kök"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-left px-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-julius">
          Våra kök
        </h2>

        <p className="text-gray-200 mb-10 leading-relaxed text-md md:text-lg text-justify">
          På <span className="font-semibold text-white">
            Tallbackens Gård & Vandrarhem
          </span>{" "}
          finns 2 nyrenoverade kök, renoverade så sent som november 2017.
          Tillgång till diskmaskin, kylskåp och frys samt allt övrigt du
          behöver för ett bekvämt självhushåll.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          <Feature icon={<CookingPot className="w-5 h-5" />} text="Diskmaskin" />
          <Feature icon={<Refrigerator className="w-5 h-5" />} text="Kylskåp" />
          <Feature icon={<Snowflake className="w-5 h-5" />} text="Frys" />
          <Feature icon={<Utensils className="w-5 h-5" />} text="Fullt utrustat kök" />
        </div>
      </motion.div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition"
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
}