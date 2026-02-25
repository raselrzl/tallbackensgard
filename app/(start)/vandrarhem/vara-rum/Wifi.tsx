"use client";

import { motion } from "framer-motion";
import { Wifi, Zap } from "lucide-react";

export default function WifiSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-md shadow-md overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-52 md:h-64 order-1 md:order-2">
          <img
            src="/vararum/wifi1.jpg"
            alt="Snabb WiFi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Heading centered on image */}
          <h2 className="absolute inset-0 font-julius flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center px-4">
            WiFi
          </h2>
        </div>

        {/* Content */}
        <div className="p-5 order-2 md:order-1">
          <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
            Vi har dragit in helt ny fiber på{" "}
            <span className="font-semibold text-gray-900">1000/1000 Mbit/s</span>{" "}
            till Tallbackens Gård och Vandrarhem som du kan använda fritt
            på hela anläggningen.
          </p>

          <div className="space-y-2 font-julius">
            <Feature icon={<Zap className="w-4 h-4" />} text="Snabb & stabil fiber" />
            <Feature icon={<Wifi className="w-4 h-4" />} text="Fri tillgång överallt" />
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