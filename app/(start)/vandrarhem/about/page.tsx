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
          src="/v7.mp4"
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
          <h1 className="text-sm sm:text-4xl font-extrabold tracking-wide text-white font-julius">
            Om Tallbackens Gård & Vandrarhem
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* 2. About Us / Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">

        {/* Main Heading */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-julius">
           Skräddarsydda boendelösningar över hela Sverige
          </h2>

        </div>

        {/* Intro Text */}
        <p className="text-justify">
          Vi är din partner för flexibla och prisvärda boenden. Vi erbjuder allt från 
          enskilda rum till fullt möblerade lägenheter, helt anpassade efter era 
          specifika behov.
        </p>

        {/* Section Block */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-julius">
            Vi löser boendet – över hela landet
          </h4>
          <p className="text-justify">
            Vi har specialiserat oss på att skräddarsy boendelösningar för företag över 
            hela Sverige. Oavsett ort, omfattning eller tidsperiod hittar vi rätt 
            lösning för er personal. Vi erbjuder smidiga och kostnadseffektiva alternativ 
            till traditionella hotell, alltid till konkurrenskraftiga priser.
          </p>
        </div>

        {/* Section Block */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-julius">
            Ni har önskemålen – vi gör dem till verklighet
          </h4>
          <p className="text-justify">
            Vår verksamhet bygger på lyhördhet. Vi utgår från era unika krav och ser till 
            att logistiken kring boendet fungerar felfritt, så att ni kan fokusera på 
            er kärnverksamhet.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 border border-gray-300 rounded-xl shadow-sm">
            <h5 className="font-semibold mb-2 font-julius">Rikstäckande</h5>
            <p>Boende var ni än behöver det i Sverige.</p>
          </div>

          <div className="p-6 border border-gray-300 rounded-xl shadow-sm">
            <h5 className="font-semibold mb-2 font-julius">Flexibelt</h5>
            <p>Allt från enstaka rum till möblerade lägenheter.</p>
          </div>

          <div className="p-6 border border-gray-300 rounded-xl shadow-sm">
            <h5 className="font-semibold mb-2 font-julius">Prisvärt</h5>
            <p>Kvalitativa lösningar till konkurrenskraftiga priser.</p>
          </div>
        </div>

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
            Vår ägare, <span className="font-semibold">Centralis Group Invest AB</span>, 
            garanterar långsiktig stabilitet och professionalism i all verksamhet.
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
            Tallbackens Gård & Vandrarhem
            <br />
            Finspångsvägen 497, 605 80 Svärtinge
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#47d7ac]" />
            <a href="tel:+46103333536" className="hover:underline">
              +46 10-333 35 36
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#47d7ac]" />
            <a href="tel:+46708307411" className="hover:underline">
              +46 70-830 74 11
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
        </motion.div>
      </section>

    </div>
  );
}