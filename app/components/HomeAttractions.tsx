"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PawPrint,
  ShoppingCart,
  Flag,
  Waves,
  Mountain,
} from "lucide-react";

const attractions = [
  {
    icon: PawPrint,
    text: "Kolmårdens Djurpark – ca 30 minuter",
  },
  {
    icon: ShoppingCart,
    text: "Ingelsta shoppingcentrum – ca 6 minuter",
  },
  {
    icon: Flag,
    text: "5 olika golfbanor – ca 6 till 25 minuter",
  },
  {
    icon: Waves,
    text: "Bad i sjön Glan – ca 3 minuter",
  },
  {
    icon: Mountain,
    text: "Klättring vid Ågelsjön – ca 15 minuter",
  },
];

const HomeAttractions: React.FC = () => {
  return (
    <section className="relative w-full h-120 md:h-130 flex items-center justify-center text-white overflow-hidden px-4">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/vh1.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 font-julius">
          Utflyktsmål
        </h2>

        {/* Attractions List */}
        <div className="grid gap-4 grid-cols-1 text-center items-center justify-center font-inter">
          {attractions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center sm:justify-center"
              >
                <Icon size={22} className="text-[#47d7ac] shrink-0" />
                <span className="text-sm sm:text-base md:text-lg">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeAttractions;