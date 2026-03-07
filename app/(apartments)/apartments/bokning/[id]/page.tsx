"use client";

import Image from "next/image";
import { apartments } from "../../data";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApartmentPage() {
  const params = useParams();
  const apartment = apartments.find((a) => a.id === params.id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!apartment) {
    return <div className="p-20 text-center text-xl">Apartment not found</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? apartment.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-40">
      <h1 className="text-4xl font-julius mb-8">{apartment.title}</h1>

      {/* Carousel */}
      <div className="relative w-full md:w-3/4 mx-auto mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={apartment.images[currentIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={apartment.images[currentIndex]}
              alt={apartment.title}
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-100"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          &#8594;
        </button>
      </div>

      <p className="text-gray-600 max-w-2xl mb-6">{apartment.description}</p>

      <ul className="flex flex-wrap gap-4 mb-6">
        {apartment.features.map((f, i) => (
          <li
            key={i}
            className="bg-gray-100 px-4 py-2 rounded-lg text-sm"
          >
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 p-6 bg-gray-100 rounded-xl inline-block">
        <p className="text-sm text-gray-500">Pris från</p>
        <p className="text-3xl font-bold">{apartment.price} kr / natt</p>
      </div>
    </section>
  );
}