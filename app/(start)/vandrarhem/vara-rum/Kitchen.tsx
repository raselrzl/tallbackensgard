"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Kitchen() {
  return (
    <section id="kok" className="w-full bg-gray-100 py-20 font-inter">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-16 items-center">
            {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
            <Feature 
              icon="/ic/dishwasher.png" 
              title="Diskmaskin"
              description="Gör det enkelt att hålla köket rent under vistelsen."
            />
            <Feature 
              icon="/ic/fridge.png" 
              title="Kylskåp"
              description="Rymligt kylskåp för mat och dryck."
            />
            <Feature 
              icon="/ic/freezer.png" 
              title="Frys"
              description="Perfekt för längre vistelser och förvaring."
            />
            <Feature 
              icon="/ic/kitchen1.png" 
              title="Fullt utrustat kök"
              description="Allt du behöver för att laga din egen mat."
            />
          </div>
        </motion.div>
        {/* Left Image with Centered Title */}
      {/*   <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-110 rounded-md overflow-hidden shadow-lg"
        >
          <Image
            src="/vararum/kitchen.jpg"
            alt="Våra kök"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-julius tracking-wide">
              Våra kök
            </h2>
          </div>
        </motion.div> */}

    

      </div>
    </section>
  );
}

function Feature({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string; 
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-start text-left 
                 bg-white 
                 px-6 py-8 
                 rounded-md                 
                 border border-gray-200 
                 hover:shadow-md
                 transition duration-300"
    >
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}