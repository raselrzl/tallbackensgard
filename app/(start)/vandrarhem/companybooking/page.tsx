"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyBookingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Company Booking Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-julius font-bold tracking-wide text-center"
        >
          Företagsbokningar
        </motion.h1>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        {/* Booking Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-50 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 mb-4">
            Företagsbokningar
          </h2>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

          <p className="text-gray-700 text-base md:text-lg">
            Företags- och föreningsbokningar kan inte göras via hemsidan.
          </p>
          <p className="text-gray-700 text-base md:text-lg mt-2">
            Vänligen kontakta oss direkt för att genomföra er bokning.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-gray-700 text-base md:text-lg">
              <span className="font-semibold">Telefon:</span>{" "}
              <a
                href="tel:0103333536"
                className="text-[#47d7ac] hover:underline"
              >
                010-333 35 36
              </a>
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              <span className="font-semibold">Mobil:</span>{" "}
              <a
                href="tel:0708307411"
                className="text-[#47d7ac] hover:underline"
              >
                070-830 74 11
              </a>
            </p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}