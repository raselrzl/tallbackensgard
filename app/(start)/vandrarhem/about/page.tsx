"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Users, Home, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Tallbackens Gård Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-julius font-bold tracking-wide text-center px-4"
        >
          Om Tallbackens Gård & Vandrarhem
        </motion.h1>
      </section>

      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-gray-700 dark:text-gray-300">
          Tallbackens Gård & Vandrarhem drivs av{" "}
          <span className="font-semibold">Centralis Group Invest AB</span> och
          ligger idylliskt vid Finspångsvägen i Svärtinge. Vi erbjuder en unik
          kombination av charmigt boende, natursköna omgivningar och modern
          komfort.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Vårt mål är att skapa en personlig och varm atmosfär där
          privatpersoner, familjer och grupper kan känna sig som hemma. Oavsett
          om du planerar en weekend, längre vistelse eller företagsevent,
          erbjuder vi flexibla lösningar anpassade efter dina behov.
        </p>
      </section>

      {/* Features / Philosophy (No Icons) */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 gap-12 text-gray-700 dark:text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
              Charmigt boende
            </h3>
            <p>Personligt inredda rum med fokus på komfort och trivsel.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
              Natursköna omgivningar
            </h3>
            <p>Njut av skog, sjöar och promenadstråk direkt utanför dörren.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
              Företagsvänligt
            </h3>
            <p>Flexibla lösningar för företagsbokningar och gruppvistelser.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. Company Info / Ownership */}
      <section className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 dark:text-white">
            Vår verksamhet
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tallbackens Gård & Vandrarhem är en plats för avkoppling, naturnära
            upplevelser och högkvalitativt boende. Vi har ett starkt fokus på
            personlig service och kvalitet, vilket gör att våra gäster alltid
            känner sig välkomna och trygga.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Vi drivs av{" "}
            <span className="font-semibold">Centralis Group Invest AB</span>,
            vilket säkerställer professionalism, långsiktighet och stabilitet i
            all vår verksamhet.
          </p>
        </motion.div>

        {/* 5. Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 dark:text-gray-300"
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
