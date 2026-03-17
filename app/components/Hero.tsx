"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // slow motion
    }
  }, []);

  return (
    <section className="relative w-full h-124 sm:h-134 2xl:h-164 flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        /* src="/promo2.mp4" */
        src="/v11.mp4" 
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
       {/*  <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mb-2 font-bold font-julius"
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
         {/*  <span className="block md:hidden font-julius">
            Tallbackens <br />
            Vandrarhem
          </span>

   
          <span className="hidden md:block whitespace-nowrap font-julius">
            Tallbackens Vandrarhem
          </span> */}
        </motion.h1>
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

export default Hero;