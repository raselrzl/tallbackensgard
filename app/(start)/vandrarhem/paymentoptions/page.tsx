"use client";
import { motion } from "framer-motion";
import AdditionalServices from "../vara-rum/AdditionalService";
import PaymentInfo from "./PaymentInfo";

export default function PaymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
         <video
          src="/pay.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white">
            Betalningsalternativ
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* Payment Methods Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-6">

          <PaymentInfo />
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServices />
    </>
  );
}