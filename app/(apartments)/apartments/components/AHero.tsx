"use client";
import { motion } from "framer-motion";
import React from "react";

const AHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white text-center overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/apartments.mp4" type="video/mp4" />
      </video>

      {/* Dark Elegant Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-2xl tracking-widest uppercase mb-4 font-julius text-[#47d7ac]"
        >
          Välkommen till
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-semibold leading-tight font-julius"
        >
          {/* Mobile */}
          <span className="block md:hidden">
            Tallbackens <br />
            Apartments
          </span>

          {/* Desktop */}
          <span className="hidden md:block whitespace-nowrap">
            Tallbackens Apartments
          </span>
        </motion.h1>

        {/* Small Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-base md:text-xl text-gray-200 max-w-2xl"
        >
          Moderna och fullt utrustade lägenheter för både kortare och längre vistelser.
          En bekväm lösning för företag, projekt och privatpersoner.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2 }}
          className="h-1 bg-[#47d7ac] mt-8"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded" />
        </div>
      </motion.div>
    </section>
  );
};

export default AHero;