"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { Info, Mail, MapPin, Phone, Smartphone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-2 font-inter border-t font-julius border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Section 1 – Logo / Branding */}
          <section aria-label="Tallbackens logo and description">
            <div className="flex items-center">
              <Image
                src="/logotra.png"
                alt="Tallbackens Vandrarhem & Apartments logo"
                width={200}
                height={200}
                className="w-60 h-auto"
              />
            </div>
            <p className="text-black mt-2 leading-relaxed text-[1px] sr-only">
              Företagslägenheter och vandrarhem i Norrköping för företag, arbetare och långtidboende i Östergötland.
            </p>
          </section>

          {/* Section 2 – Contact */}
          <section aria-label="Kontaktinformation">
            <h3 className="text-sm font-bold mb-2 font-julius">
              Tallbackens Vandrarhem & Apartments
            </h3>
            <address className="not-italic text-xs text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#47d7ac] mt-1" />
                <span>
                  Finspångsvägen 497 <br />
                  605 80 Svärtinge
                </span>
              </div>

              <a
                href="mailto:info@tallbackensgard.se"
                className="flex items-center gap-2 mt-2 underline hover:text-white"
              >
                <Mail size={14} className="text-[#47d7ac]" />
                info@tallbackensgard.se
              </a>

              <a
                href="tel:+46103333536"
                className="flex items-center gap-2 underline hover:text-white"
              >
                <Phone size={14} className="text-[#47d7ac]" />
                +46 10-333 35 36
              </a>
            </address>
          </section>

          {/* Section 3 – Företagsbokningar */}
          <section aria-label="Företagsbokningar">
            <h3 className="text-sm font-bold mb-4 font-julius">
              Företagsbokningar
            </h3>

            <a
              href="tel:+46103333536"
              className="flex items-center gap-2 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Phone size={14} className="text-[#47d7ac]" />
              +46 10-333 35 36
            </a>

            <a
              href="tel:+46708307411"
              className="flex items-center gap-2 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Smartphone size={14} className="text-[#47d7ac]" />
              +46 70-830 74 11
            </a>

            <Link
              href="/vandrarhem/companybooking"
              className="flex items-center gap-2 text-xs text-gray-300 underline hover:text-white transition mb-4"
            >
              <Info size={14} className="text-[#47d7ac]" />
              Bokningsinformation
            </Link>
          </section>

          {/* Section 4 – Info */}
          <section aria-label="Övrig information">
            <h3 className="text-sm font-bold mb-2 font-julius">Info</h3>
            <div className="flex flex-col gap-1 text-xs text-gray-300">
              <Link href="/vandrarhem/privacy-policy" className="underline hover:text-white">
                Integritetspolicy
              </Link>
              <Link href="/vandrarhem/cancellationpolicy" className="underline hover:text-white">
                Avbokning
              </Link>
              <Link href="/vandrarhem/paymentoptions" className="underline hover:text-white">
                Betalningsalternativ
              </Link>
              <Link href="/vandrarhem/about" className="underline hover:text-white">
                Om oss
              </Link>
              <Link href="/vandrarhem/karriar" className="underline hover:text-white">
                Karriärmöjligheter
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-1 text-[10px] text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <div></div>

          {/* Social Links */}
          <div className="order-1 md:order-3">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <p className="order-2 md:order-1 text-gray-500 text-[10px] text-center md:text-left font-julius">
            © {new Date().getFullYear()} Tallbackens Vandrarhem & Apartments
            <a
              href="https://www.souveral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-[10px] underline hover:text-white transition ml-1"
            >
              Support
            </a>
          </p>
        </div>
      </div>

      {/* Structured Data for Footer (LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Tallbackens Vandrarhem & Apartments",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Finspångsvägen 497",
              postalCode: "605 80",
              addressLocality: "Svärtinge",
              addressRegion: "Östergötland",
              addressCountry: "SE",
            },
            telephone: "+46103333536",
            email: "info@tallbackensgard.se",
            url: "https://tallbackensgard.se",
          }),
        }}
      />
    </footer>
  );
};

export default Footer;