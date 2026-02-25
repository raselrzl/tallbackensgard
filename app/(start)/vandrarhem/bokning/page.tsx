"use client";
import { motion } from "framer-motion";
import BookingInfo from "./BookingInfo";
import PaymentInfo from "./PaymentInfo";
import SearchBookingModal from "./SearchBookingModal"; // new modal component
import AdditionalServices from "../vara-rum/AdditionalService";

export default function BokningPage() {
  return (
    <>
      <section className="relative w-full h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bokning.jpg')",
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
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide font-julius">
            Bokning
          </h1>

          {/* Search Booking Button / Modal */}
          <div className="m-6">
            <SearchBookingModal />
          </div>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>
      </section>

      <BookingInfo />
      <PaymentInfo />
    </>
  );
}