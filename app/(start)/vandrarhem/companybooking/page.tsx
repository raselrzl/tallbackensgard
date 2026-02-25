"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyBookingPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/hero.png"
          alt="Företagsbokningar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-2xl md:text-5xl font-julius tracking-widest text-center px-4"
        >
          Företagsbokningar
        </motion.h1>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-700 leading-relaxed text-base md:text-lg">

          {/* Section */}
          <div>
            <h2 className="text-2xl font-julius tracking-wide mb-4">
              Information
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <p>
              Företags- och föreningsbokningar kan inte göras via hemsidan.
            </p>
            <p className="mt-4">
              Vänligen kontakta oss direkt för att genomföra er bokning.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-julius tracking-wide mb-4">
              Kontakt
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <p className="mb-3">
              <span className="font-semibold">Telefon:</span>{" "}
              <a
                href="tel:0103333536"
                className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
              >
                010-333 35 36
              </a>
            </p>

            <p>
              <span className="font-semibold">Mobil:</span>{" "}
              <a
                href="tel:0708307411"
                className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
              >
                070-830 74 11
              </a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}