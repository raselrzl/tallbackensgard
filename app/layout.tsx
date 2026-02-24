import type { Metadata } from "next";
import { Julius_Sans_One } from "next/font/google"; // <-- import Julius Sans One
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Julius Sans One font (only 400 weight available)
const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400", // only 400 is supported
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
      <body className={`${julius.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}