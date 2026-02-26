"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/v7.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-sm sm:text-4xl font-extrabold tracking-wide text-white">
            Om Tallbackens Gård & Vandrarhem
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
        <p className="text-justify">
          Tallbackens Gård & Vandrarhem drivs av{" "}
          <span className="font-semibold">Centralis Group Invest AB</span> och
          ligger idylliskt vid Finspångsvägen i Svärtinge. Vi erbjuder en unik
          kombination av charmigt boende, natursköna omgivningar och modern
          komfort.
        </p>
        <p className="text-justify">
          Vårt mål är att skapa en personlig och varm atmosfär där
          privatpersoner, familjer och grupper kan känna sig som hemma. Oavsett
          om du planerar en weekend, längre vistelse eller företagsevent,
          erbjuder vi flexibla lösningar anpassade efter dina behov.
        </p>
      </section>

      {/* 3. Features / Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 dark:text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
            Charmigt boende
          </h3>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <p>Personligt inredda rum med fokus på komfort och trivsel.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
            Natursköna omgivningar
          </h3>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <p>Njut av skog, sjöar och promenadstråk direkt utanför dörren.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
            Företagsvänligt
          </h3>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <p>Flexibla lösningar för företagsbokningar och gruppvistelser.</p>
        </motion.div>
      </section>

      {/* 4. Company Info / Ownership */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 dark:text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 dark:text-white">
            Vår verksamhet
          </h2>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <p className="text-justify">
            Tallbackens Gård & Vandrarhem är en plats för avkoppling, naturnära
            upplevelser och högkvalitativt boende. Vi har ett starkt fokus på
            personlig service och kvalitet, vilket gör att våra gäster alltid
            känner sig välkomna och trygga.
          </p>
          <p className="text-justify">
            Vi drivs av{" "}
            <span className="font-semibold">Centralis Group Invest AB</span>,
            vilket säkerställer professionalism, långsiktighet och stabilitet i
            all vår verksamhet.
          </p>
        </motion.div>
      </section>

      {/* 5. Contact Info */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 dark:text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 dark:text-white">
            Kontaktinformation
          </h2>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <p>
            <span className="font-semibold">Adress:</span>
            <br />
            Tallbackens Gård & Vandrarhem
            <br />
            Finspångsvägen 497, 605 80 Svärtinge
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#47d7ac]" />
            <a href="tel:0103333536" className="hover:underline">
              010-333 35 36
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#47d7ac]" />
            <a href="tel:0708307411" className="hover:underline">
              070-830 74 11
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#47d7ac]" />
            <a
              href="mailto:info@tallbackensgard.se"
              className="underline hover:text-[#36b795] transition"
            >
              info@tallbackensgard.se
            </a>
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Telefontider för bokningar & förfrågningar: 10:00–17:00 alla dagar.
          </p>
        </motion.div>
      </section>

    </div>
  );
}