"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function VNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 👈 current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link style function
  const linkStyle = (path: string) =>
    `relative transition-colors duration-300 ${
      pathname === path
        ? "text-[#47d7ac]"
        : "text-white hover:text-[#47d7ac]"
    }`;

  return (
    <nav
      className={`w-full h-20 sm:h-24 fixed top-0 left-0 z-50 transition-all duration-300 font-julius
      ${
        scrolled
          ? "bg-black shadow-md"
          : "bg-linear-to-b from-black/80 via-black/40 to-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/vandrarhem" className="flex items-center md:pl-10">
          <Image
            src="/logo/logoc.png"
            alt="Logo"
            width={400}
            height={400}
            priority
            className="h-30 w-auto sm:h-40 md:h-48"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase">
          <Link href="/vandrarhem/vara-rum" className={linkStyle("/vandrarhem/vara-rum")}>
            Våra rum
          </Link>

          <Link href="/vandrarhem/bokning" className={linkStyle("/vandrarhem/bokning")}>
            Bokning
          </Link>

          <Link href="/vandrarhem/kontakta-oss" className={linkStyle("/vandrarhem/kontakta-oss")}>
            Kontakta oss
          </Link>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden w-8 h-4 flex flex-col justify-between items-end cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="h-0.5 w-7 bg-white rounded"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="h-0.5 w-5 rounded bg-[#47d7ac]"
            animate={
              menuOpen
                ? { rotate: 45, y: 8 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-white rounded"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black overflow-hidden mx-8 border-t-4 border-[#47d7ac]"
          >
            <div className="flex flex-col text-center py-6 gap-6 font-semibold text-sm uppercase">

              <Link
                href="/vandrarhem/vara-rum"
                className={linkStyle("/vandrarhem/vara-rum")}
                onClick={() => setMenuOpen(false)}
              >
                Våra rum
              </Link>

              <Link
                href="/vandrarhem/bokning"
                className={linkStyle("/vandrarhem/bokning")}
                onClick={() => setMenuOpen(false)}
              >
                Bokning
              </Link>

              <Link
                href="/vandrarhem/kontakta-oss"
                className={linkStyle("/vandrarhem/kontakta-oss")}
                onClick={() => setMenuOpen(false)}
              >
                Kontakta oss
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}