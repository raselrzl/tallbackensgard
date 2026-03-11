"use client";
import { apartments } from "../(apartments)/apartments/data";
import ApartmentCard from "./ApartmentCard";

export default function ApartmentOffers() {
  return (
    <section className="py-24 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-julius mb-4">
            Höstens bästa erbjudanden för affärsresor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Från snabba arbetsresor till månadslånga projekt – Talbackans gör
            det enkelt att bo smart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} {...apartment} />
          ))}
        </div>
      </div>
    </section>
  );
}
