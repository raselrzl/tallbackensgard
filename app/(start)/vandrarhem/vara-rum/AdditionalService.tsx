"use client";

import { motion } from "framer-motion";

export default function AdditionalServices() {
  return (
    <section className="relative w-full py-20 font-julius overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-30 bg-linear-to- from-black to-transparent pointer-events-none z-20" />

      
      {/* Background Image */}
      <img
        src="/vararum/service.jpg"
        alt="Tillägstjänster"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Stronger Overlay for Smooth Blend */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Gradient (blends with gallery) */}
     
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-30 max-w-4xl mx-auto px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Tillägstjänster du kan köpa
        </h2>

        <p className="text-gray-200 text-base mb-6 leading-relaxed">
          Handdukar och sängkläder till varje person i rummet kostar{" "}
          <span className="font-semibold text-white">100 kr/pp</span>.
        </p>

        <p className="text-gray-200 text-base leading-relaxed">
          Mot en extraavgift på{" "}
          <span className="font-semibold text-white">250 kr</span> kan vi ta
          hand om städningen.
        </p>
      </motion.div>
       <div className="absolute bottom-0 left-0 w-full h-30 bg-linear-to-t from-black to-transparent pointer-events-none z-20" />

    </section>
  );
}