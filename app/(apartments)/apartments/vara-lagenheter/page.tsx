"use client";

import { motion } from "framer-motion";
import ApartmentTypes from "../components/ApartmentTypes";
import WhyTalbackans from "../components/WhyTalbackans";
import ApartmentCTA from "../components/ApartmentCTA";
import LagenhetFeatures from "../components/LagenhetFeatures";
import CardForBokningPage from "../components/CardForBokningPage";

export default function VaraLagenheterPage() {
  return (
    <>
      <div className="bg-white">
        {/* 1. Hero Section */}
        <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            src="/lg1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center px-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-julius">
              Våra Lägenheter
            </h1>

            <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
          </motion.div>
        </section>
      </div>

      <LagenhetFeatures />
      <CardForBokningPage />
      {/*  <ApartmentTypes /> */}

      <ApartmentCTA />
      <WhyTalbackans />
      <section className="bg-[#f0f8ff]">
        <div className="max-w-7xl mx-auto pb-16 px-4 border-b border-gray-900/10 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "250+", desc: "Boendealternativ över hela Sverige" },
              { title: "250+", desc: "Nöjda företagskunder" },
              { title: "24/7", desc: "Support för våra gäster" },
              { title: "✓", desc: "Flexibla företagslösningar" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <h3 className="text-4xl font-extrabold text-[#47d7ac] ">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2 font-julius">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
