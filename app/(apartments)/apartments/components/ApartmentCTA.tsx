"use client";

import Link from "next/link";

export default function ApartmentCTA() {
  return (
    <section className="relative py-30 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/moc/4.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-julius mb-6 font-extrabold">
          Behöver ditt företag boende?
        </h2>

        <p className="mb-10 text-lg text-gray-200">
          Kontakta Talbackans så hjälper vi er hitta rätt boendelösning för era
          anställda.
        </p>

        <Link
          href="/apartments/kontakta-oss"
          className="bg-[#47d7ac] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
        >
          Kontakta Oss
        </Link>
      </div>
    </section>
  );
}
