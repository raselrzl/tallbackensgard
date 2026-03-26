"use client";
import { motion } from "framer-motion";
import { Phone, Smartphone } from "lucide-react";
import Script from "next/script";

export default function CompanyBookingPage() {
  return (
    <div className="bg-white">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-799883623"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-799883623');
          `}
      </Script>
      {/* Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center bg-black">
        {/* Background Video */}
        <video
          src="/contact.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <h1 className="text-white text-2xl md:text-6xl font-extrabold tracking-wide font-julius">
            Företagsbokningar
          </h1>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-[#47d7ac] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Information & Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-16 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          {/* Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-julius tracking-wide mb-4 text-gray-900 dark:text-white">
              Information
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <p className="mb-6">
              Företags- och föreningsbokningar kan inte göras via hemsidan, men
              vi utvecklar gärna skräddarsydda lösningar som passar just er.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Anpassade boenden för grupper, föreningar och företag</li>
              <li>Flexibla lösningar för byggföretag och entreprenadprojekt</li>
              <li>
                Möjlighet till längre vistelser med fullt utrustade rum och kök
              </li>
              <li>Personlig service och rådgivning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl md:text-3xl font-julius tracking-wide mb-4 text-gray-900 dark:text-white">
              Kontakt
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#47d7ac]" />
                <span className="font-semibold"></span>
                <a
                  href="tel:+46103333536"
                  className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
                >
                  +46 10‑333 35 36
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Smartphone size={16} className="text-[#47d7ac]" />
                <span className="font-semibold"></span>
                <a
                  href="tel:+46708307411"
                  className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
                >
                  +46 70‑830 74 11
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
