"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white text-center">
      {/* Background Image */}
      {/*   <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/b1.jpg')" }}
      /> */}

      {/* Background Video */}
      {/*    <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/homevideo.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay */}
      {/*  <div className="absolute inset-0 bg-black/20" /> */}

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
        {/*  <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mb-2 font-bold"
        >
          Välkommen till
        </motion.p> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          {/* Mobile */}
          {/* <span className="block md:hidden">
            Tallbackens <br />
            Gård & <br />
            Vandrarhem
          </span> */}

          {/* Desktop */}
          {/*  <span className="hidden md:block whitespace-nowrap">
            Tallbackens Gård & Vandrarhem
          </span> */}
        </motion.h1>

        {/* Buttons */}
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-180 sm:mr-8 items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-3 min-w-46 uppercase rounded-lg text-white bg-gradient-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all tracking-widest font-[50]"
          >
            Vandrarhem
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-3 min-w-46 uppercase rounded-lg text-white bg-linear-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all"
          >
            Apartments
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/*     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
