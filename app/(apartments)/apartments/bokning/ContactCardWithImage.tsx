"use client";

import Image from "next/image";
import {
  Building2,
  Hotel,
  Home,
  TreePine,
  BedDouble,
  Users,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

export default function ContactCardWithImage() {
  return (
    <section className="w-full bg-gray-100 py-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch gap-10">
        
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Top Content */}
          <div>
            <h2 className="text-2xl md:text-4xl mb-4 font-julius font-semibold text-gray-900 leading-snug">
              Varje förfrågan är unik.
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-lg mb-8">
              Kontakta oss direkt så skapar vi en skräddarsydd och optimal
              boendelösning för just dina behov.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Lägenhet", icon: <Building2 size={20} /> },
                { label: "Hotell", icon: <Hotel size={20} /> },
                { label: "Lägenhetshotell", icon: <BedDouble size={20} /> },
                { label: "Stuga", icon: <TreePine size={20} /> },
                { label: "Vandrarhem", icon: <Users size={20} /> },
                { label: "Hus", icon: <Home size={20} /> },
                { label: "Modulboende", icon: <Warehouse size={20} /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white  text-black shadow-md shadow-[#47d7ac]/30 py-6 px-4 flex flex-col items-center justify-center text-center gap-2 hover:scale-[1.03] transition group"
                >
                  {/* Icon */}
                  <div className="text-[#47d7ac] group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <span className="text-sm md:text-base font-julius font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Button bottom aligned */}
          <Link href="/apartments/kontakta-oss" className="mt-10 font-julius w-fit bg-[#47d7ac] hover:bg-[#36b795] text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold transition">
            Kontakta oss
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-full min-h-100 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/moc/4.png"
              alt="Boende"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}