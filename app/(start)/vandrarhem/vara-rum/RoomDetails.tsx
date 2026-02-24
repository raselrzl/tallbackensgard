"use client";
import { motion } from "framer-motion";
import { Wifi, Car, ShowerHead } from "lucide-react";
import { ReactElement } from "react";

export default function RoomDetails() {
  const rooms = [
    {
      title: "4 Bäddsrum",
      image: "/vararum/room.jpg",
      prices: ["1 pers 600 kr/natt", "2 pers 800 kr/natt", "3 pers 1000 kr/natt", "4 pers 1100 kr/natt"],
      amenities: ["WiFi", "Parkering", "Egen dusch & toalett"] as const,
    },
    {
      title: "6 Bäddsrum",
      image: "/vararum/room.jpg",
      prices: ["1 pers 700 kr/natt", "2 pers 900 kr/natt", "3 pers 1000 kr/natt", "4 pers 1100 kr/natt", "5 pers 1200 kr/natt", "6 pers 1300 kr/natt"],
      amenities: ["WiFi", "Parkering", "Egen dusch & toalett"] as const,
    },
  ];

  // Define the allowed amenity keys
  type Amenity = "WiFi" | "Parkering" | "Egen dusch & toalett";

  // Typed icons object
  const amenityIcons: Record<Amenity, ReactElement> = {
    WiFi: <Wifi className="w-5 h-5 text-[#47d7ac]" />,
    Parkering: <Car className="w-5 h-5 text-[#47d7ac]" />,
    "Egen dusch & toalett": <ShowerHead className="w-5 h-5 text-[#47d7ac]" />,
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-inter">
      <div className="grid gap-10 md:grid-cols-2">
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Room Image */}
            <div className="md:w-1/2 h-64 md:h-auto">
              <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
            </div>

            {/* Room Info */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{room.title}</h3>

                {/* Prices */}
                <ul className="space-y-2 text-gray-700 mb-4">
                  {room.prices.map((price, i) => (
                    <li key={i}>{price}</li>
                  ))}
                </ul>

                {/* Amenities */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      {amenityIcons[amenity as Amenity]}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Button */}
      <div className="text-center mt-12">
        <a
          href="/booking"
          className="inline-block px-8 py-4 bg-[#47d7ac] text-white font-semibold rounded-lg shadow hover:bg-[#3bb591] transition"
        >
          Till bokningen
        </a>
      </div>
    </section>
  );
}