"use client";

import BookButton from "@/app/components/BookButton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BusinessTravelHousing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-julius mb-6">
            Smart boende för affärsresenärer
          </h2>

          <div className="w-20 h-1 bg-[#47d7ac] mb-6" />

          <p className="text-gray-600 leading-relaxed text-lg">
            Talbackans moderna lägenhetshotell och möblerade lägenheter erbjuder
            en flexibel lösning för företag som vill ge sina medarbetare ett
            bekvämt boende under arbetsresor.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4 text-lg">
            Oavsett om vistelsen gäller ett HQ-besök, ett projekt på annan ort
            eller en längre uppdragsperiod, hittar vi ett upplägg som passar
            era behov.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4 text-lg">
            Boka enkelt online eller be om offert så hjälper vi er att hitta
            rätt boendelösning.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-[#47d7ac] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Be om offert
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/ap1.png"
            alt="Talbackans företagsboende"
            width={600}
            height={450}
            className="rounded-xl shadow-xl object-cover w-full h-105"
          />
        </motion.div>

      </div>
    </section>
  );
}