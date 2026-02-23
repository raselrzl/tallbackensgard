"use client";
import { motion } from "framer-motion";
import React from "react";

const links = [
  { title: "Våra rum", image: "/card/rum.jpg" },
  { title: "Kök", image: "/card/kok.jpg" },
  { title: "Lounge/Matsal", image: "/card/lounge.jpg" },
  { title: "WiFi", image: "/card/wifi.jpg" },
];

const HomeLink: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

          {links.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-70 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* Center Text */}
              <div className="relative z-10 flex items-center justify-center h-full text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HomeLink;