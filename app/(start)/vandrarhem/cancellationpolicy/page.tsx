"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/hero.png"
          alt="Avbokningspolicy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-2xl md:text-5xl font-julius tracking-widest text-center px-4"
        >
          Avbokningspolicy
        </motion.h1>
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
                <span className="font-semibold">7 nätter eller fler</span>{" "}
                måste avbokning ske senast{" "}
                <span className="font-semibold">5 dagar före ankomst</span>{" "}
                för full återbetalning.
              </li>
              <li>
                För vistelser kortare än 7 nätter gäller avbokning senast{" "}
                <span className="font-semibold">2 dagar före ankomst</span>.
              </li>
              <li>
                Vid senare avbokning debiteras hela vistelsen.
              </li>
            </ul>

            <p className="mt-6">
              Avbokning görs via e-post till{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="underline underline-offset-4 hover:text-[#47d7ac] transition"
              >
                info@tallbackensgard.se
              </a>.
            </p>

            <p className="mt-4">
              Avbokningar som inkommer efter kl. 16:00 behandlas nästkommande arbetsdag.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}