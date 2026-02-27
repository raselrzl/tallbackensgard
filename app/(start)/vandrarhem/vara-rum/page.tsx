"use client";
import { motion } from "framer-motion";
import RoomDetails from "./RoomDetails";
import Kitchen from "./Kitchen";
import Lounge from "./Lounge";
import WifiSection from "./Wifi";
import AdditionalServices from "./AdditionalService";
import PhotoGallery from "./PhotoGallery";
import KitchenSection from "./KitchenSection";

export default function VaraRumPage() {
  return (
    <div className="bg-gray-100">
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
         <video
          src="/ved7.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl md:text-5xl font-julius tracking-widest text-center"

        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide font-julius">
            Våra rum
          </h1>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>
      </section>

      <RoomDetails />

      <KitchenSection />

      <Lounge />
      
    {/*   <WifiSection /> */}
      <AdditionalServices />
      <PhotoGallery />
    </div>
  );
}
