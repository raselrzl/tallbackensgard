"use client";

import { motion } from "framer-motion";
import { ChefHat, Refrigerator, Snowflake, CookingPot } from "lucide-react";

export default function KitchenSection() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-10 font-inter " id="kok">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6 items-center bg-white p-6 rounded-2xl shadow-md overflow-hidden"
      >
        {/* Image RIGHT */}
        <div className="relative h-52 md:h-64 order-1 md:order-2">
          <img
            src="/vararum/kitchen.jpg"
            alt="Våra kök"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />

          <h2 className="absolute inset-0 font-julius flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center px-4">
            Kök
          </h2>
        </div>

        {/* Content LEFT */}
        <div className=" order-2 md:order-1 p-4">
          <p className="text-gray-600 leading-relaxed mb-5 text-sm text-justify">
            Vi erbjuder{" "}
            <span className="font-semibold text-gray-900">
              två fullt utrustade kök
            </span>{" "}
            för alla våra gäster. Här kan du enkelt laga frukost, middag eller
            förbereda måltider för en längre vistelse – i en trivsam och
            hemtrevlig miljö med allt du behöver.
          </p>

          <div className="space-y-1 font-julius p-4">
            <Feature icon={<ChefHat className="w-4 h-4" />} text="Två fullt utrustade kök" />
            <Feature icon={<Refrigerator className="w-4 h-4" />} text="Rymliga kylskåp & förvaring" />
            <Feature icon={<Snowflake className="w-4 h-4" />} text="Frys för längre vistelser" />
            <Feature icon={<CookingPot className="w-4 h-4" />} text="Diskmaskin & komplett köksutrustning" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      className="flex items-center gap-3 text-gray-700"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#47d7ac]/20 text-[#047d66]">
        {icon}
      </div>
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  );
}