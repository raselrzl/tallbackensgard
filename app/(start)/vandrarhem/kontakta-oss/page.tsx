"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm"; // Private person form
import CorporateContactForm from "./CorporateContactForm"; // Corporate form
import HomeMap from "@/app/components/HomeMap";
import ContactInfoCard from "@/app/components/ContactInfoCard";

export default function ContactOssPage() {
  const [activeModal, setActiveModal] = useState<
    "private" | "corporate" | null
  >(null);

  const options = [
    {
      title: "Privatperson",
      description:
        "Letar du efter ett boende för dig själv eller familjen? Vi hjälper dig att hitta det perfekta boendet.",
      buttonText: "Kontakta oss",
      action: () => setActiveModal("private"),
    },
    {
      title: "Företag / Projektboende",
      description:
        "Söker du tillfälligt boende för projektanställda eller företagsflytt? Vi kan hjälpa dig.",
      buttonText: "Få offert",
      action: () => setActiveModal("corporate"),
    },
  ];

  const modalWrapperClasses =
    "fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4";
  const modalContentClasses =
    "bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-xl m-2 overflow-hidden relative";

  return (
    <>
      {/* Hero Section */}
      <section className="relative font-julius w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
  src="/v4.mp4"
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
            Kontakta oss
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* Options Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 font-julius"
          >
            Välj typ av boende
          </motion.h1>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 font-julius">
                    {option.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={option.action}
                    className="bg-[#47d7ac] hover:bg-[#36b795] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full w-full sm:w-auto transition text-xs"
                  >
                    {option.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactInfoCard />
      {/* Map Section */}
      <HomeMap />

      {/* Private Person Modal */}
      <AnimatePresence>
        {activeModal === "private" && (
          <motion.div
            className={modalWrapperClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)} // click on backdrop closes modal
          >
            <motion.div
              className={modalContentClasses}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl sm:text-3xl"
              >
                ×
              </button>
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Modal */}
      <AnimatePresence>
        {activeModal === "corporate" && (
          <motion.div
            className={modalWrapperClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)} // click on backdrop closes modal
          >
            <motion.div
              className={modalContentClasses}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl sm:text-3xl"
              >
                ×
              </button>
              <CorporateContactForm onClose={() => setActiveModal(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
