"use client";
import React from "react";
import { motion } from "framer-motion";

const HomeAttractions: React.FC = () => {
  return (
    <section className="relative w-full h-120 flex items-center justify-center text-white overflow-hidden px-2">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/utflyktsmal.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Utflyktsmål
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Kolmårdens Djurpark – ca 30 minuter •
          Ingelsta shoppingcentrum – ca 6 minuter •
          5 olika golfbanor – ca 6 minuter till 25 minuter •
          Bad i sjön Glan – ca 3 minuter •
          Klättring vid Ågelsjön – ca 15 minuter
        </p>
      </motion.div>
    </section>
  );
};

export default HomeAttractions;