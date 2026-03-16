"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, CalendarCheck, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);


  const items = [
    {
      label: "+46 10-333 35 36",
      href: "tel:+46103333536",
      icon: Phone,
    },
    {
      label: "+46 70-830 74 11",
      href: "tel:+46708307411",
      icon: Phone,
    },
    {
      label: "Email Us",
      href: "mailto:info@tallbackensgard.se",
      icon: Mail,
    },
    {
      label: "Book Online",
      href: "/vandrarhem/bokning#booking",
      icon: CalendarCheck,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Drawer Items */}
      <AnimatePresence>
        {open &&
          items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-[#47d7ac] hover:text-white transition"
              >
                <Icon size={16} />
                {item.label}
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Main Floating Button */}
      {/*  <button
        onClick={() => setOpen(!open)}
        className="bg-[#47d7ac] text-white p-4 rounded-full shadow-lg hover:bg-[#36b795] transition"
      >
        <MessageCircle size={22} />
      </button> */}

      {/*   <button
        onClick={() => setOpen(!open)}
        className="rounded-full shadow-lg hover:scale-110 transition"
      >
        <Image
          src="/c1.gif"
          alt="Contact support"
          width={60}
          height={60}
          className="rounded-full"
        />
      </button> */}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full shadow-lg hover:scale-110 transition"
      >
        <Image
          src={open ? "/c5.gif" : "/c7.gif"}
          alt="Contact support"
          unoptimized
          width={60}
          height={60}
          className="rounded-full"
        />
      </button>
    </div>
  );
}
