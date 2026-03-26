"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

export default function CancellationPolicyPage() {
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
        <video
          src="/ved8.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white">
            Avbokningspolicy
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* Dark Premium Cancellation Policy Section */}
      <section className="relative bg-gray-200 py-24 px-6 md:px-12 text-gray-200">
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-3xl p-12 md:p-16 border border-gray-700 shadow-xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-julius font-bold tracking-wider text-[#47d7ac]">
              Avbokning
            </h2>
            <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-linear-to-r from-[#47d7ac] to-[#2bbf9c]" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-base md:text-lg leading-relaxed">
            <ul className="space-y-4 list-disc list-inside marker:text-[#47d7ac]">
              <li>
                För vistelser om{" "}
                <span className="font-semibold text-white">
                  7 nätter eller fler
                </span>{" "}
                måste avbokning ske senast{" "}
                <span className="font-semibold text-white">
                  5 dagar före ankomst
                </span>{" "}
                för full återbetalning.
              </li>
              <li>
                För vistelser kortare än 7 nätter gäller avbokning senast{" "}
                <span className="font-semibold text-white">
                  2 dagar före ankomst
                </span>
                .
              </li>
              <li>Vid senare avbokning debiteras hela vistelsen.</li>
            </ul>

            <p>
              Avbokning görs via e-post till{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="text-[#47d7ac] font-medium underline underline-offset-4 hover:text-[#2bbf9c] transition"
              >
                info@tallbackensgard.se
              </a>
              .
            </p>

            <p>
              Avbokningar som inkommer efter kl. 16:00 behandlas nästkommande
              arbetsdag.
            </p>
          </div>
        </div>

        {/* Accent Circles */}
        <div className="absolute top-10 left-1/4 w-56 h-56 bg-[#47d7ac]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#2bbf9c]/20 rounded-full blur-2xl pointer-events-none" />
      </section>
    </div>
  );
}
