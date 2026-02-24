"use client";
import { motion } from "framer-motion";
import RoomDetails from "./RoomDetails";
import Kitchen from "./Kitchen";
import Lounge from "./Lounge";
import WifiSection from "./Wifi";

export default function VaraRumPage() {
  return (
    <><section className="relative w-full h-100 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/vararum/kitchen.jpg')", // change to your image path
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide">
          Våra rum
        </h1>

        {/* Elegant Divider */}
        <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
      </motion.div>
    </section>
    <RoomDetails />
    <Kitchen />
    <Lounge />
    <WifiSection />
    </>
    
  );
}
