"use client";
import { motion } from "framer-motion";
import BookingInfo from "./BookingInfo";
import SearchBookingModal from "./SearchBookingModal"; 

export default function BokningPage() {
  return (
    <>
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
         <video
          src="/ved5.mp4" // video file in /public folder
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

    </>
  );
}