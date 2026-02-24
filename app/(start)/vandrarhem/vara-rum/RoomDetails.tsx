"use client";
import { motion } from "framer-motion";
import { Wifi, Car, ShowerHead, User } from "lucide-react";
import { ReactElement } from "react";

export default function RoomDetails() {
  const rooms = [
    {
      title: "4 Bäddsrum",
      image: "/vararum/room.jpg",
      prices: [
        { persons: 1, price: 600 },
        { persons: 2, price: 800 },
        { persons: 3, price: 1000 },
        { persons: 4, price: 1100 },
      ],
      amenities: ["WiFi", "Parkering", "Egen dusch & toalett"] as const,
    },
    {
      title: "6 Bäddsrum",
      image: "/vararum/room.jpg",
      prices: [
        { persons: 1, price: 700 },
        { persons: 2, price: 900 },
        { persons: 3, price: 1000 },
        { persons: 4, price: 1100 },
        { persons: 5, price: 1200 },
        { persons: 6, price: 1300 },
      ],
      amenities: ["WiFi", "Parkering", "Egen dusch & toalett"] as const,
    },
  ];

  type Amenity = "WiFi" | "Parkering" | "Egen dusch & toalett";

  const amenityIcons: Record<Amenity, ReactElement> = {
    WiFi: <Wifi className="w-4 h-4 text-white" />,
    Parkering: <Car className="w-4 h-4 text-white" />,
    "Egen dusch & toalett": <ShowerHead className="w-4 h-4 text-white" />,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-inter">
      <div className="grid gap-10 md:grid-cols-2">
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row rounded-sm shadow-md hover:shadow-xl transition overflow-hidden bg-gray-100"
          >
            {/* Left: Image with title & amenities */}
            <div className="relative md:w-1/2 h-64 md:h-auto">
              <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-900/10" />
              <h3 className="absolute top-4 left-4 text-white text-2xl font-bold z-10">{room.title}</h3>
              <div className="absolute bottom-4 left-2 flex gap-2 z-10">
                {room.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1 bg-[#47d7ac]/70 px-1 py-.5 rounded-full text-white text-[10px] font-medium shadow"
                  >
                    {amenityIcons[amenity as Amenity]}
                    <span>{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Prices per person */}
            <div className="md:w-1/2 p-6 bg-gray-100 flex flex-col justify-center md:-ml-6 z-10">
              <h4 className="text-gray-800 font-semibold mb-4 text-lg">Pris per person</h4>
              <p className="text-gray-600 text-sm mb-4">
                Priserna inkluderar egen dusch och toalett, parkering och fritt WiFi.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {room.prices.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2 text-[#047d66] font-semibold px-4 py-2  text-sm rounded-sm hover:bg-[#47d7ac]/30 transition"
                  >
                    <User className="w-4 h-4 text-[#047d66]" />
                    <span>{p.persons} pers – {p.price} kr/natt</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}