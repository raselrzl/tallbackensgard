"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-25 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center md:pl-10">
          <Image src="/logo/logo.png" alt="Logo" width={220} height={80} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase">
          <Link href="#">Våra rum</Link>
          <Link href="#">Bokning</Link>
          <Link href="#">Kontakta oss</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden w-10 h-6 flex flex-col justify-between items-end cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Middle line (longest) */}
          <motion.span
            className="h-0.75 w-10 bg-black rounded"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Top line (shorter) */}
          <motion.span
            className="h-0.75 w-6 bg-black rounded"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Bottom line (medium) */}
          <motion.span
            className="h-0.75 w-8 bg-black rounded"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white border-t-4 shadow-md overflow-hidden mx-8"
          >
            <div className="flex flex-col text-center py-8 gap-6 font-semibold text-sm uppercase">
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Våra rum
              </Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Bokning
              </Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Kontakta oss
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
