"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Cancellation Policy Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-julius font-bold tracking-wide text-center"
        >
          Avbokningspolicy
        </motion.h1>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        {/* Cancellation Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-50 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 mb-4">
            Avbokning
          </h2>
          <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
            <li>
              För vistelser om <span className="font-semibold">7 nätter eller fler</span> måste avbokning ske senast <span className="font-semibold">5 dagar före ankomst</span> för full återbetalning.
            </li>
            <li>
              För vistelser kortare än 7 nätter gäller avbokning senast <span className="font-semibold">2 dagar före ankomst</span>.
            </li>
            <li>
              Vid senare avbokning debiteras hela vistelsen.
            </li>
          </ul>

          <p className="text-gray-700 text-base md:text-lg mt-4">
            Avbokning görs via e-post till{" "}
            <a
              href="mailto:info@tallbackensgard.se"
              className="text-[#47d7ac] underline hover:text-[#36b795] transition"
            >
              info@tallbackensgard.se
            </a>.
          </p>

          <p className="text-gray-700 text-base md:text-lg mt-2">
            Avbokningar som inkommer efter kl. 16:00 behandlas nästkommande arbetsdag.
          </p>
        </motion.div>

      </section>
    </div>
  );
}