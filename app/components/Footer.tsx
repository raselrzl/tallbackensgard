"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-2 font-inter border-t font-julius border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid: 1 column mobile / 2 tablet / 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Section 1 – Follow */}
          <div>
            {/*  <h3 className="text-lg font-bold mb-4">Följ oss på</h3> */}

            <div className="flex items-center">
              <Image
                src="/logotra.png"
                alt="Social logo"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Section 2 – Kontakt */}
          <div className="font-julius">
            <h3 className="text-lg font-bold mb-2 font-julius">
              Tallbackens Gård & Vandrarhem
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-julius">
              Finspångsvägen 497 <br />
              605 80 Svärtinge
            </p>
            <a
              href="mailto:info@tallbackensgard.se"
              className="block mt-4 text-sm text-gray-300 underline hover:text-white transition"
            >
              info@tallbackensgard.se
            </a>
            {/* Phone */}
            <a
              href="tel:+46103333536"
              className="block  text-sm text-gray-300 underline hover:text-white transition"
            >
              010-333 35 36 
            </a>

            <p className="text-[10px] text-gray-500 mt-1 font-julius">
              Telefontider för bokningar & förfrågningar <br />
              10:00–17:00 alla dagar.
            </p>
          </div>

          {/* Section 3 – Företag */}
          <div className="font-julius">
            <h3 className="text-lg font-bold mb-4 font-julius">Företagsbokningar</h3>

            <a
              href="tel:+46103333536"
              className="block text-sm text-gray-300 underline hover:text-white transition"
            >
              010-333 35 36
            </a>

            <a
              href="tel:+46708307411"
              className="block text-sm text-gray-300 underline hover:text-white transition"
            >
              070-830 74 11
            </a>
            <Link
              href="/vandrarhem/companybooking"
              className="block text-sm text-gray-300 underline hover:text-white transition mb-4"
            >
              Bokningsinformation
            </Link>

            <br />
          </div>

          {/* Section 4 – Övrigt */}
          <div className="font-julius">
             <h3 className="text-lg font-bold mb-2 font-julius">
              Info
            </h3>
           <Link
              href="/vandrarhem/privacy-policy"
              className="block text-gray-300 underline text-sm font-bold hover:text-white transition"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/vandrarhem/cancellationpolicy"
              className="block text-sm font-bold text-gray-300 underline hover:text-white transition "
            >
              Avbokning
            </Link>
             <Link
              href="/vandrarhem/bokning#betalningsalternativ"
              className="block text-sm font-bold text-gray-300 underline hover:text-white transition "
            >
              Betalningsalternativ
            </Link>
             <Link
              href="/vandrarhem/about"
              className="block text-sm font-bold text-gray-300 underline hover:text-white transition"
            >
              Om oss
            </Link>
              <Link
              href="/vandrarhem/karriar"
              className="block text-sm font-bold text-gray-300 underline hover:text-white transition mb-4"
            >
              Karriärmöjligheter
            </Link>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      {/*    <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Tallbackens Gård & Vandrarhem
      </div> */}
    </footer>
  );
};

export default Footer;
