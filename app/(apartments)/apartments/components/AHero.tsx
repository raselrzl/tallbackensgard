"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch relative">
            {/* LEFT - TEXT BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 bg-stone-100 rounded-2xl p-8 md:p-12 flex flex-col justify-center z-10"
            >
              <div className="max-w-md space-y-6">
                {/* Small label */}
                <span className="text-sm uppercase tracking-widest text-[#47d7ac] font-semibold">
                  För företag
                </span>

                {/* Heading */}
                <h2 className="text-xl md:text-3xl font-julius font-bold text-gray-900 leading-tight">
                  Flexibla boendelösningar
                </h2>

                {/* Text */}
                <p className="text-gray-700 text-base md:text-sm leading-relaxed">
                  Upptäck smidiga och bekväma boendelösningar från möblerade
                  lägenheter till andra flexibla boendeformer, anpassade efter ditt företags behov. Perfekta för både kortare och längre vistelser,
                  där varje lösning skräddarsys för att just er.
                </p>

                {/* Button */}
                <Link
                  href="/apartments/bokning"
                  className="w-fit bg-[#47d7ac] font-julius px-8 py-3 rounded-full text-white font-semibold hover:bg-[#36b795] transition"
                >
                  Boka nu
                </Link>
              </div>
            </motion.div>

            {/* RIGHT - IMAGE */}
            <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
              <div className="relative w-full h-full min-h-100 md:-ml-20">
                <Image
                  src="/tal.png"
                  alt="Apartments"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE SECTION */}
      <section className="relative w-full overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE (MAP - unchanged) */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end relative md:h-125 lg:h-150">
            {/* Mobile */}
            <Image
              src="/map18.png"
              alt="Apartments"
              width={600}
              height={600}
              priority
              className="w-full md:hidden object-contain"
            />

            {/* Desktop */}
            <Image
              src="/map18.png"
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
            className="order-2 md:order-1 w-full md:w-1/2 max-w-lg space-y-10"
          >
            <h2 className="text-xl md:text-2xl font-julius font-bold text-gray-900 pt-10">
              Boendelösningar i hela Sverige
            </h2>

            <p className="text-sm text-gray-700">
              Vi erbjuder moderna och flexibla boendelösningar över hela
              Sverige, anpassade efter företag och projekt av alla storlekar.
            </p>

            <div className="relative w-full h-160 md:h-150">
              {[
                {
                  text: "Shortstay",
                  style: "top-6 left-6 scale-110",
                  mobileStyle: "top-4 left-1/4",
                },
                {
                  text: "Longstay",
                  style: "top-0 right-10",
                  mobileStyle: "top-20 left-3/4",
                },
                {
                  text: "Entreprenadboende",
                  style: "top-24 left-0",
                  mobileStyle: "top-36 left-1/4",
                },
                {
                  text: "Projektboende",
                  style: "top-32 right-0 scale-105",
                  mobileStyle: "top-48 left-3/4",
                },
                {
                  text: "Vandrarhem",
                  style: "bottom-20 left-10",
                  mobileStyle: "top-60 left-1/4",
                },
                {
                  text: "Lägenheter",
                  style: "bottom-10 right-16 scale-110",
                  mobileStyle: "top-80 left-1",
                },
                {
                  text: "Lägenhetshotell",
                  style: "top-1/2 left-1/2",
                  mobileStyle: "top-84 left-1/2",
                },
                {
                  text: "Stugor",
                  style: "bottom-0 left-1/3 scale-95",
                  mobileStyle: "top-96 left-1/3",
                },
                {
                  text: "Hus",
                  style: "top-16 left-1/2",
                  mobileStyle: "top-108 left-2/3",
                },
                {
                  text: "Modulboende",
                  style: "bottom-8 right-1/3",
                  mobileStyle: "top-120 left-8",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
        absolute
        ${item.mobileStyle} md:${item.style}
        flex items-center justify-center
        rounded-full h-26 w-26
        text-[9px] font-medium
        text-gray-800 font-julius
        backdrop-blur-md bg-white/60
         border-[#47d7ac]
        shadow-lg
        hover:scale-110 hover:bg-[#47d7ac] hover:text-white
        transition duration-300 shadow-[#47d7ac]
        cursor-pointer
      `}
                >
                  {item.text}
                </div>
              ))}

              {/* Soft gradient glow behind */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#47d7ac]/10 via-transparent to-[#47d7ac]/10 blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CIRCLE DISCOUNT SECTION */}
      <section className="w-full bg-sky-100 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          {/* LEFT - IMAGE */}
          <div className="order-1 w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg m-5">
            <img
              src="/moc/16.png" // you can replace with new image
              alt="Apartments"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />

            {/* CIRCLE DISCOUNT / SERVICE */}
{/*             <div className="absolute top-6 left-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-3">
              <span className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
                Upp till
              </span>
              <span className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                -25%
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                på boende
              </span>
            </div> */}
          </div>

          {/* RIGHT - TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 w-full md:w-1/2 px-6 py-10 flex flex-col justify-center space-y-6"
          >
            <h2 className="text-xl md:text-3xl font-julius font-bold text-gray-900">
              Flexibla boendelösningar för alla
            </h2>
            <p className="text-lg text-gray-700">
              Upptäck smidiga och bekväma boenden i möblerade lägenheter, hus
              eller stugor – perfekta för både företag och privatpersoner. Dra
              nytta av våra rabatter och välj lösningar som passar just dina
              behov.
            </p>
            <Link
              href="/apartments/kontakta-oss"
              className="w-fit bg-[#3db190] font-julius px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              Kontakta oss
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AHero;
