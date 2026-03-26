// app/layout.tsx
import type { Metadata } from "next";
import { Julius_Sans_One, Syncopate, Inter } from "next/font/google";
import Footer from "@/app/components/Footer";
import VNavbar from "@/app/(start)/vandrarhem/vandrarhemComponent/VNavbar";
import ApartmentsNavbar from "./components/apartmentsNavbar";
import FloatingButton from "./components/FloatingButton";
import FloatingButtonForVandrarhem from "./components/FloatingButton";
import FloatingButtonForApartment from "./components/FloatingButtonForApartment";
import Script from "next/script";

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
      {" "}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-799883623"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-799883623');
          `}
      </Script>
      <ApartmentsNavbar />
      {children}
      <FloatingButtonForApartment />
      <Footer />
    </>
  );
}
