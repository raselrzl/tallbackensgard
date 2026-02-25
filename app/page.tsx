"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center bg-black"
      
    >
      {/* Logo - top center */}
      <Link
        href="/"
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Image
          src="/logo/logoc.png"
          alt="Logo"
          width={400}
          height={400}
          priority
          className="h-40 md:h-60 w-auto"
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
      <section className="relative w-full h-screen flex items-end justify-center text-white text-center z-10 pb-12 md:pb-28">
        <div className="flex flex-col sm:flex-row gap-4 md:mr-9">
          <Link href="/vandrarhem">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="px-3 py-2 min-w-48 uppercase rounded text-white bg-linear-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all tracking-widest font-syncopate inline-block text-center"
            >
              Vandrarhem
            </motion.p>
          </Link>

          <Link href="/apartments">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="px-3 py-2 min-w-48 uppercase rounded text-white bg-linear-to-r from-[#47d7ac] to-[#6ba4b8] hover:from-[#6ba4b8] hover:to-[#47d7ac] transition-all tracking-widest font-syncopate inline-block text-center"
            >
              Apartments
            </motion.p>
          </Link>
        </div>
      </section>
    </div>
  );
}
