"use client";

import { motion } from "framer-motion";
import { Tv, Wifi, Coffee } from "lucide-react";

export default function Lounge() {
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
        <div className="relative h-52 md:h-64">
          <img
            src="/vararum/lounge1.jpg"
            alt="Lounge och Matsal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Heading centered on image */}
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center px-4 font-julius">
            Lounge / Matsal
          </h2>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-gray-600 leading-relaxed mb-5 text-sm">
            Stort ljust sällskapsrum och matsal där du kan titta på TV
            eller äta frukost och middag. I loungen kan du med fri Wifi
            planera ditt besök på exempelvis Kolmårdens djurpark eller
            Norrköping.
          </p>

          <div className="space-y-2">
            <Feature icon={<Tv className="w-4 h-4" />} text="TV & Avkoppling" />
            <Feature icon={<Wifi className="w-4 h-4" />} text="Fri Wifi" />
            <Feature icon={<Coffee className="w-4 h-4" />} text="Frukost & Middag" />
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