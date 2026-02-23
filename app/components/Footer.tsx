"use client";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white">
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
                className="w-60 h-auto"
              />
            </div>
          </div>

          {/* Section 2 – Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tallbackens Gård & Vandrarhem <br />
              Finspångsvägen 497 <br />
              605 80 Svärtinge
            </p>

            <p className="mt-4 text-sm text-gray-300">
              010-333 35 36
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Telefontider för bokningar & förfrågningar <br />
              10:00–17:00 alla dagar.
            </p>

            <p className="mt-4 text-sm text-gray-300">
              info@tallbackensgard.se
            </p>
          </div>

          {/* Section 3 – Företag */}
          <div>
            <h3 className="text-lg font-bold mb-4">Företag</h3>

            <p className="text-sm text-gray-300">
              Företagsbokningar
            </p>
            <p className="text-sm text-gray-300">
              010-333 35 36
            </p>
            <p className="text-sm text-gray-300 mb-4">
              070-830 74 11
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              Företags- och föreningsbokningar kan inte göras via hemsidan.
              Vänligen kontakta oss direkt.
            </p>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Avbokning: <br />
              7+ nätter: 5 dagar före ankomst. <br />
              Kortare vistelser: 2 dagar före ankomst. <br />
              Senare avbokning debiteras fullt.
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Avbokning via e-post till info@tallbackensgard.se
            </p>
          </div>

          {/* Section 4 – Övrigt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Övrigt</h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Tallbackens Gård & Vandrarhem drivs av
              Centralis Group Invest AB.
            </p>

            <p className="mt-4 text-sm text-gray-400 cursor-pointer hover:text-white transition">
              GDPR / Integritetspolicy
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Tallbackens Gård & Vandrarhem
      </div>
    </footer>
  );
};

export default Footer;