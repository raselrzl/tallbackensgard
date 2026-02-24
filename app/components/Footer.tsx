"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-2 font-inter">
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
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>

            <p className="text-md text-gray-300 font-bold ">
              Tallbackens Gård & Vandrarhem
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Finspångsvägen 497 <br />
              605 80 Svärtinge
            </p>

            {/* Phone */}
            <a
              href="tel:+46103333536"
              className="block mt-4 text-sm text-gray-300 underline hover:text-white transition"
            >
              010-333 35 36
            </a>

            <p className="text-sm text-gray-400 mt-1">
              Telefontider för bokningar & förfrågningar <br />
              10:00–17:00 alla dagar.
            </p>

            {/* Email */}
            <a
              href="mailto:info@tallbackensgard.se"
              className="block mt-4 text-sm text-gray-300 underline hover:text-white transition"
            >
              info@tallbackensgard.se
            </a>
          </div>

          {/* Section 3 – Företag */}
          <div>
            <h3 className="text-lg font-bold mb-4">Företag</h3>

            <p className="text-md text-gray-300 font-bold ">
              Företagsbokningar
            </p>

            <a
              href="tel:+46103333536"
              className="block text-sm text-gray-300 underline hover:text-white transition"
            >
              010-333 35 36
            </a>

            <a
              href="tel:+46708307411"
              className="block text-sm text-gray-300 underline hover:text-white transition mb-4"
            >
              070-830 74 11
            </a>

            <p className="text-sm text-gray-400 leading-relaxed">
              Företags- och föreningsbokningar kan inte göras via hemsidan.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Vänligen kontakta oss direkt för att genomföra er bokning.
            </p>
            <br />
            <p className="text-md text-gray-300 font-bold ">
              Avbokning för företag
            </p>
            <p className=" text-sm text-gray-400 leading-relaxed">
              För vistelser om 7 nätter eller fler krävs avbokning senast 5
              dagar före ankomst för full återbetalning.
            </p>
            <br/>
            <p className="text-sm text-gray-400 leading-relaxed">
              För vistelser kortare än 7 nätter gäller avbokning senast 2 dagar
              före ankomst.
            </p>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Vid senare avbokning debiteras hela vistelsen.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Avbokning via e-post till{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="underline hover:text-white transition"
              >
                info@tallbackensgard.se
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Avbokningar som inkommer efter kl. 16:00 behandlas nästkommande
              arbetsdag.
            </p>
          </div>

          {/* Section 4 – Övrigt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Övrigt</h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Tallbackens Gård & Vandrarhem drivs av Centralis Group Invest AB.
            </p>

            <Link href="/vandrarhem/privacy-policy" className="block text-sm text-gray-300 underline hover:text-white transition mb-4">
              GDPR / Integritetspolicy
            </Link>
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
