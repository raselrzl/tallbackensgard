"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "/vararum/room.jpg",
  "/vararum/kitchen.jpg",
  "/vararum/lounge1.jpg",
  "/vararum/wifi1.jpg",
  "/vararum/p1.jpg",
  "/vararum/p2.jpg",
  "/vararum/p3.jpg",
  "/vararum/p4.jpg",
  "/vararum/p5.jpg",
  "/vararum/p6.jpg",
  "/vh1.jpg",
  "/vh2.jpg",
  "/vh3.jpg",
  "/vh4.jpg",
  "/vh5.jpg",
];

export default function CoverflowCarousel() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const total = images.length;

  // Circular offset for carousel
  const getOffset = (index: number) => {
    let offset = index - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  // Popup image navigation
  const nextLightbox = () => {
    const currentIndex = images.indexOf(lightbox!);
    setLightbox(images[(currentIndex + 1) % total]);
    setZoom(false);
  };

  const prevLightbox = () => {
    const currentIndex = images.indexOf(lightbox!);
    setLightbox(images[(currentIndex - 1 + total) % total]);
    setZoom(false);
  };

  return (
    <div className="relative h-140 w-full bg-black flex items-center justify-center overflow-hidden">

      {/* Heading */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40">
        <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide font-julius">
          Bilder
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full max-w-7xl h-125 flex items-center justify-center perspective-[2000px]"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          const { clientX } = e;
          const middle = window.innerWidth / 2;
          if (clientX > middle) next();
          else prev();
        }}
      >
        {images.map((src, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;

          return (
            <motion.div
              key={index}
              animate={{
                x: offset * 260,
                rotateY: offset * -45,
                scale: isActive ? 1 : 0.8,
                zIndex: total - Math.abs(offset),
                opacity: Math.abs(offset) > 3 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-80 h-105 rounded-2xl overflow-hidden shadow-2xl">
                <img src={src} alt="" className="w-full h-full object-cover" />

                {!isActive && <div className="absolute inset-0 bg-black/60" />}

                {/* PLUS BUTTON (only active image) */}
                {isActive && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox(src);
                      setZoom(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="bg-black/20 backdrop-blur-md 
                                    w-16 h-16 rounded-full 
                                    flex items-center justify-center
                                    text-white text-3xl 
                                    hover:scale-110 transition"
                    >
                      +
                    </div>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FULLSCREEN POPUP */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setLightbox(null);
              setZoom(false);
            }}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
                setZoom(false);
              }}
              className="absolute top-6 right-6 text-white text-4xl z-50"
            >
              ×
            </button>

            {/* Popup Image */}
            <motion.img
              src={lightbox}
              drag={zoom} // Only draggable when zoomed
              dragConstraints={{ left: -500, right: 500, top: -300, bottom: 300 }}
              onClick={(e) => e.stopPropagation()}
              onPanEnd={(e, info) => {
                if (!zoom) {
                  if (info.offset.x < -50) nextLightbox();
                  if (info.offset.x > 50) prevLightbox();
                }
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: zoom ? 2 : 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className={`max-w-[90%] max-h-[90%] object-contain ${
                zoom ? "cursor-grab" : "cursor-zoom-in"
              }`}
              style={{ touchAction: "none" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}