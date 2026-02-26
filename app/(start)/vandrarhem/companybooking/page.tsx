"use client";
import { motion } from "framer-motion";

export default function CompanyBookingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-100 sm:h-130 2xl:h-160 flex items-center justify-center bg-black">
        {/* Background Video */}
        <video
          src="/contact.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide font-julius">
            Företagsbokningar
          </h1>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          {/* Information Section */}
          <div>
            <h2 className="text-2xl font-julius tracking-wide mb-4 text-gray-900 dark:text-white">
              Information
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <ul className="list-disc list-inside space-y-2">
              <li>
                Företags- och föreningsbokningar kan inte göras via hemsidan.
              </li>
              <li>
                Vänligen kontakta oss direkt för att genomföra er bokning.
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-julius tracking-wide mb-4 text-gray-900 dark:text-white">
              Kontakt
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Telefon:</span>{" "}
                <a
                  href="tel:0103333536"
                  className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
                >
                  010-333 35 36
                </a>
              </li>
              <li>
                <span className="font-semibold">Mobil:</span>{" "}
                <a
                  href="tel:0708307411"
                  className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
                >
                  070-830 74 11
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
