"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Script from "next/script";

export default function KarriarPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
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
      {/* 1. Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/v1.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white">
            Bli en del av vårt team
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-gray-700  text-base md:text-lg leading-relaxed">
        <p className="text-justify">
          Vi tar gärna emot spontana ansökningar från drivna och
          serviceinriktade personer som vill bidra till en personlig och
          välkomnande gästupplevelse.
        </p>
        <p className="text-justify">
          Oavsett om du är ny inom hotell- och servicebranschen eller har lång
          erfarenhet, erbjuder vår naturnära miljö en inspirerande arbetsplats
          där engagemang värderas högt.
        </p>
      </section>

      {/* 3. Application CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <Mail className="w-7 h-7 text-[#47d7ac]" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Skicka in din ansökan
              </h2>
              <p className="text-gray-600">
                Skicka ditt CV och en kort presentation av dig själv till vår
                e-postadress nedan. Märk gärna mejlet med{" "}
                <strong>“Jobbansökan”</strong>.
              </p>
            </div>
          </div>

          {/* Email Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-lg font-medium text-gray-800">
              info@tallbackensgard.se
            </span>
            <a
              href="mailto:info@tallbackensgard.se"
              className="flex items-center gap-2 bg-[#47d7ac] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" />
              Skicka CV
            </a>
          </div>

          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
              Vi kontaktar dig om din profil matchar våra behov. Tveka inte att
              höra av dig – vi ser fram emot att lära känna dig!
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. Why Work With Us */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-julius font-bold mb-2 text-gray-900 ">
            Varför jobba hos oss?
          </h3>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-4 rounded-full" />
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Naturnära och inspirerande arbetsmiljö</li>
            <li>Personlig och varm teamkänsla</li>
            <li>Möjlighet till utveckling och ansvar</li>
            <li>Flexibla arbetstider och lösningar</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
