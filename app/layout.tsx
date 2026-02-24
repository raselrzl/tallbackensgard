import type { Metadata } from "next";
import { Julius_Sans_One } from "next/font/google"; // Import Julius Sans One
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Julius Sans One font (only 400 weight)
const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
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
      {/* Include the font variable class for optional use */}
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}