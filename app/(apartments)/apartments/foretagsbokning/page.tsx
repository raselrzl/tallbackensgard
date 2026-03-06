"use client";

import { motion } from "framer-motion";
import { BedDouble, Wifi, CookingPot, Car } from "lucide-react";

export default function Foretagsbokning() {
  return (
    <div className="bg-white">

      {/* 1. Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
          src="/fore.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-julius">
            foretagsbokning
          </h1>

          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>

      </section>

    </div>
  );
}