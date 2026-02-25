"use client";

import { motion } from "framer-motion";

const images = [
  "/vararum/room.jpg",
  "/vararum/kitchen.jpg",
  "/vararum/lounge1.jpg",
  "/vararum/wifi1.jpg",
  "/vararum/room.jpg",
  "/vararum/kitchen.jpg",
  "/vararum/lounge1.jpg",
  "/vararum/wifi1.jpg",
];

// Layout: custom column/row spans to simulate gallery hanging
const layout = [
  { mobileCol: 2, mobileRow: 2, desktopCol: 2, desktopRow: 2 },
  { mobileCol: 1, mobileRow: 1, desktopCol: 1, desktopRow: 2 },
  { mobileCol: 1, mobileRow: 2, desktopCol: 1, desktopRow: 1 },
  { mobileCol: 2, mobileRow: 1, desktopCol: 2, desktopRow: 1 },
  { mobileCol: 1, mobileRow: 1, desktopCol: 1, desktopRow: 1 },
  { mobileCol: 1, mobileRow: 1, desktopCol: 1, desktopRow: 2 },
  { mobileCol: 2, mobileRow: 1, desktopCol: 2, desktopRow: 2 },
  { mobileCol: 2, mobileRow: 1, desktopCol: 1, desktopRow: 1 },
];

export default function ArtGallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 font-inter">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 auto-rows-[150px] md:auto-rows-[200px]">
        {images.map((src, idx) => {
          const span = layout[idx % layout.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`
                relative w-full overflow-hidden
                col-span-${span.mobileCol} row-span-${span.mobileRow}
                md:col-span-${span.desktopCol} md:row-span-${span.desktopRow}
              `}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover border-4 border-white"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}