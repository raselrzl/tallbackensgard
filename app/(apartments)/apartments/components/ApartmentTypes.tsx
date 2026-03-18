"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apartments = [
  {
    title: "Enkelrum",
    text: "Prisvärda enkelrum för kortare projekt eller enskilda konsulter.",
    img: "/ap1.png", 
  },
  {
    title: "Möblerade Lägenheter",
    text: "Fullt möblerade lägenheter med kök, wifi och bekväma arbetsytor.",
    img: "/moc/11.png",
  },
  { 
    title: "Projektboende",
    text: "Flexibla lösningar för större team under längre projekt.",
    img: "/vara-rum.jpg",
  },
];

export default function ApartmentTypes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-julius text-center mb-16">
          Boendelösningar
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {apartments.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white shadow-lg rounded-xs overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={350}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3  font-julius">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}