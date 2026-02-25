"use client";

import { motion } from "framer-motion";

export default function AdditionalServices() {
  return (
    <section className="relative w-full py-16 font-inter">
      {/* Background Image */}
      <img
        src="/vararum/service.jpg" // replace with your image
        alt="Tillägstjänster"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Tillägstjänster du kan köpa!
        </h2>

        <p className="text-gray-200 text-sm md:text-base mb-4 leading-relaxed">
          Handdukar och sängkläder till varje person i rummet kostar{" "}
          <span className="font-semibold text-white">100 kr/pp</span>.
        </p>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Mot en extraavgift på{" "}
          <span className="font-semibold text-white">250 kr</span> kan vi ta
          hand om städningen.
        </p>
      </motion.div>
    </section>
  );
}
