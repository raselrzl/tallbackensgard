import type { Metadata } from "next";
import { Julius_Sans_One, Syncopate } from "next/font/google"; // import both
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Julius Sans One (for button)
export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

// Syncopate (for global text)
export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tallbackens",
  description: "Tallbackens Gård & Vandrarhem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Include both font variables */}
      <body className={` ${julius.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}