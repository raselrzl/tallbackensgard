"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-100 sm:h-130 2xl:h-160 flex items-center justify-center bg-black">
        <video
          src="/ved8.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

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

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-700 leading-relaxed text-base md:text-lg">
          {/* Policy Section */}
          <div>
            <h2 className="text-2xl font-julius tracking-wide mb-4">
              Avbokning
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

            <ul className="list-disc list-inside space-y-3">
              <li>
                För vistelser om{" "}
                <span className="font-semibold">7 nätter eller fler</span> måste
                avbokning ske senast{" "}
                <span className="font-semibold">5 dagar före ankomst</span> för
                full återbetalning.
              </li>
              <li>
                För vistelser kortare än 7 nätter gäller avbokning senast{" "}
                <span className="font-semibold">2 dagar före ankomst</span>.
              </li>
              <li>Vid senare avbokning debiteras hela vistelsen.</li>
            </ul>

            <p className="mt-6">
              Avbokning görs via e-post till{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="underline underline-offset-4 hover:text-[#47d7ac] transition"
              >
                info@tallbackensgard.se
              </a>
              .
            </p>

            <p className="mt-4">
              Avbokningar som inkommer efter kl. 16:00 behandlas nästkommande
              arbetsdag.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
