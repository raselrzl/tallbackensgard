// app/layout.tsx
import type { Metadata } from "next";
import { Julius_Sans_One, Syncopate, Inter } from "next/font/google";
import VNavbar from "./vandrarhemComponent/VNavbar";
import Footer from "@/app/components/Footer";
import FloatingButton from "@/app/(apartments)/apartments/components/FloatingButton";

// Fonts
export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tallbackens",
  description: "Tallbackens Vandrarhem & Apartments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VNavbar />
      {children}
      <FloatingButton />
      <Footer />
    </>
  );
}
