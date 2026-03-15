"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BusinessTravelHousing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* Left Boxes */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {/* Top two boxes */}
            <div className="bg-[#47d7ac]/20 p-6 rounded-xl shadow-md flex-1">
              <h3 className="font-julius font-bold text-lg mb-2">Flexibla boenden</h3>
              <p className="text-gray-700 text-sm">
                Vi erbjuder möblerade lägenheter som passar både korta och längre uppdrag.
              </p>
            </div>
            <div className="bg-[#47d7ac]/20 p-6 rounded-xl shadow-md flex-1">
              <h3 className="font-julius font-bold text-lg mb-2">Centrala lägen</h3>
              <p className="text-gray-700 text-sm">
                Våra boenden finns nära affärsdistrikt och transport för enkel tillgång.
              </p>
            </div>
          </div>

          {/* Bottom box */}
          <div className="bg-[#47d7ac]/20 p-6 rounded-xl shadow-md flex-1">
            <h3 className="font-julius font-bold text-lg mb-2">Allt-i-ett lösning</h3>
            <p className="text-gray-700 text-sm">
              Komplett service med möbler, internet, städning och support för företag.
            </p>
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
            className="rounded-xl shadow-xl object-cover w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  );
}