"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/b1.jpg')" }} // fallback image
    >
      {/* Logo - top center */}
      <Link
        href="/"
        className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Image
          src="/logo/logoc.png"
          alt="Logo"
          width={400}
          height={400}
          priority
          className="h-30 md:h-60 w-auto"
        />
      </Link>

      {/* Background Video */}
      <video
        autoPlay
        muted
        
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/promo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Hero Buttons at bottom center */}
      <section className="relative w-full h-screen flex items-end justify-center text-white text-center z-10 pb-12">
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-3 min-w-48 uppercase rounded-lg text-white bg-linear-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all tracking-widest font-julius"
          >
            Vandrarhem
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-3 min-w-48 uppercase rounded-lg text-white bg-linear-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all font-julius"
          >
            Apartments
          </motion.button>
        </div>
      </section>
    </div>
  );
}