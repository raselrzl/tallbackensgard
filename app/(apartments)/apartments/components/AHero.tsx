"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

const CounterCircle = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, 9000, {
      duration: 2.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full border-4 border-[#47d7ac] bg-white shadow-lg">
      <motion.span className="text-3xl font-bold text-[#47d7ac]">
        {rounded}
      </motion.span>
      <span className="text-sm text-gray-600 text-center leading-tight">
        Nöjda kunder
      </span>
    </div>
  );
};

const AHero: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black text-white">
        <video
          src="/apartments.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-2xl tracking-widest uppercase mb-4 font-julius text-[#47d7ac]"
          >
            Välkommen till
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-semibold leading-tight font-julius"
          >
            <span className="block md:hidden">
              Tallbackens <br />
              Apartments
            </span>
            <span className="hidden md:block whitespace-nowrap">
              Tallbackens Apartments
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-base md:text-xl text-gray-200 max-w-2xl text-center"
          >
            Moderna och fullt utrustade lägenheter i hela Sverige. Perfekt för
            företag, projekt och längre vistelser.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2 }}
            className="h-1 bg-[#47d7ac] mt-8"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded" />
          </div>
        </motion.div>
      </section>

      {/* SECTION WITH CARD */}
      <section className="w-full bg-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          <div className="order-1 md:order-2 w-full md:w-1/2 relative pb-32 md:pb-0">
            <img
              src="/ap.jpg"
              alt="Apartments"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-2 w-full md:w-1/2 px-6 py-20 flex flex-col justify-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-julius font-bold text-gray-900">
              Flexibla boendelösningar för företag
            </h2>
            <p className="text-lg text-gray-700">
              Som en pålitlig partner inom företagsboende hjälper Tallbackens
              Apartments dig att hitta rätt lösning – oavsett om det gäller ett
              kort besök på huvudkontoret eller ett längre projekt i en annan
              stad.
            </p>
            <button className="w-fit bg-[#3db190] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
              Läs mer
            </button>
          </motion.div>
        </div>
      </section>

      {/* CORPORATE SECTION */}
      <section className="relative w-full overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end relative md:h-125 lg:h-150">
            {/* Mobile */}
            <Image
              src="/map15.png"
              alt="Apartments"
              width={600}
              height={600}
              priority
              className="w-full md:hidden object-contain"
            />

            {/* Desktop */}
            <Image
              src="/map15.png"
              alt="Apartments"
              width={800}
              height={800}
              priority
              className="
    hidden md:block 
    absolute top-0 
    -right-4 lg:-right-4 xl:-right-80
    h-full w-[120%] 
    object-cover
  "
            />
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 w-full md:w-1/2 max-w-lg space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-julius font-bold text-gray-900 pt-10">
              Boendelösningar i hela Sverige
            </h2>
            <p className="text-lg text-gray-700">
              Vi erbjuder moderna och möblerade lägenheter för företag över hela
              Sverige.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <CounterCircle />
            </motion.div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-[#47d7ac]">150+</p>
                <p className="text-sm text-gray-600">Städer i Sverige</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#47d7ac]">1600</p>
                <p className="text-sm text-gray-600">Nya lägenheter / år</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#47d7ac]">400</p>
                <p className="text-sm text-gray-600">Lokala experter</p>
              </div>
            </div>

            <button className="mt-6 mb-4 bg-[#3db190] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
              Kontakta
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION */}
      <section className="w-full bg-sky-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          <div className="order-1 w-full md:w-1/2 relative">
            <img
              src="/ap2.png"
              alt="Apartments"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 left-4 bg-white rounded-full w-24 h-24 md:w-30 md:h-30 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-gray-700">
                up till
              </span>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">
                -25%
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-700">
                på boende
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 w-full md:w-1/2 px-6 py-20 flex flex-col justify-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-julius font-bold text-gray-900">
              Flexibla boendelösningar för företag
            </h2>
            <p className="text-lg text-gray-700">
              Som Europas ledande aktör inom möblerade lägenheter hjälper vi dig
              att hitta rätt lösning – oavsett om det gäller ett kort besök på
              huvudkontoret eller ett längre uppdrag i en annan stad.
            </p>
            <button className="w-fit bg-[#3db190] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
              Läs mer
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AHero;
