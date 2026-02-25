"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function KarriarPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="/karriar-hero.png" // byt till din hero-bild
          alt="Karriärmöjligheter Tallbackens Gård"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-2xl md:text-5xl font-julius font-bold tracking-wide text-center px-4"
        >
          Karriärmöjligheter
        </motion.h1>
      </section>

      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        <p className="text-justify">
          Vill du bli en del av vårt team på <span className="font-semibold">Tallbackens Gård & Vandrarhem</span>? 
          Vi söker engagerade och serviceinriktade personer som vill bidra till en varm och personlig gästupplevelse.
        </p>
        <p className="text-justify">
          Oavsett om du är nyexaminerad, erfaren inom hotell & service, eller bara vill arbeta i en naturnära och inspirerande miljö, 
          vill vi gärna höra från dig.
        </p>
      </section>

      {/* 3. Application CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Mail className="w-7 h-7 text-[#47d7ac]" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Skicka in din ansökan</h2>
              <p className="text-gray-600">
                Skicka ditt CV och en kort presentation av dig själv till vår e-postadress nedan. Märk gärna mejlet med <strong>“Jobbansökan”</strong>.
              </p>
            </div>
          </div>

          {/* Email Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-lg font-medium text-gray-800">info@tallbackensgard.se</span>
            <a
              href="mailto:info@tallbackensgard.se"
              className="flex items-center gap-2 bg-[#47d7ac] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" />
              Skicka CV
            </a>
          </div>

          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
              Vi kontaktar dig om din profil matchar våra behov. Tveka inte att höra av dig – vi ser fram emot att lära känna dig!
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. Why Work With Us */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 dark:text-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-julius font-bold mb-2 text-gray-900 dark:text-white">
            Varför jobba hos oss?
          </h3>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Naturnära och inspirerande arbetsmiljö</li>
            <li>Personlig och varm teamkänsla</li>
            <li>Möjlighet till utveckling och ansvar</li>
            <li>Flexibla arbetstider och lösningar</li>
          </ul>
        </motion.div>
      </section>

    </div>
  );
}