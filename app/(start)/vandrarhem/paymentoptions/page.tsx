"use client";
import { motion } from "framer-motion";
import AdditionalServices from "../vara-rum/AdditionalService";
import PaymentInfo from "../bokning/PaymentInfo";

export default function PaymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/payment-bg.jpg')", // Replace with your image
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black" />

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide font-julius">
            Betalningsalternativ
          </h1>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <PaymentInfo />
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServices />
    </>
  );
}