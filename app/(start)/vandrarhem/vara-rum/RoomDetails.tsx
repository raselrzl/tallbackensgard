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
            className="flex flex-col md:flex-row rounded-md shadow-lg hover:shadow-2xl transition overflow-hidden bg-gray-100"
          >
            {/* Left: Image */}
            <div className="relative md:w-1/2 min-h-64 md:h-auto">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              {/* Room Title */}
              <h3 className="absolute bottom-4 uppercase font-julius left-4 text-white text-2xl font-bold z-10">
                {room.title}
              </h3>
              <div className="absolute top-4 right-0 flex flex-col gap-1 z-10">
                {room.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1 bg-[#47d7ac]/80 px-2 py-1 rounded-l-full text-white text-xs font-medium shadow"
                  >
                    {amenityIcons[amenity as Amenity]}
                    <span>{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Prices */}
            <div className="md:w-1/2 p-6 bg-white flex flex-col justify-start">
              <h4 className="text-gray-800 font-semibold mb-2 text-lg md:text-right font-julius">
                Pris per person
              </h4>
              <p className="text-gray-600 text-xs mb-4 md:text-right">
                Priserna inkluderar egen dusch och toalett, parkering och fritt
                WiFi.
              </p>
              <div className="flex flex-col gap-3">
                {room.prices.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className={`flex items-center justify-between font-semibold px-4 py-2 text-sm text-[#047d66]
    ${i % 2 === 0 ? "bg-gray-200" : "bg-gray-200"} hover:bg-[#47d7ac]/30 transition`}
                  >
                    <div className="flex items-center gap-2 text-black font-julius">
                      <User className="w-4 h-4 text-black" />
                      <span>{p.persons}</span>
                    </div>
                    <p className="font-bold text-black font-julius">
                      {p.price}
                      <span className="text-gray-600 text-[8px] pl-2">
                        Kr/Natt
                      </span>{" "}
                    </p>
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
