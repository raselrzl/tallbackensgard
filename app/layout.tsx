import type { Metadata } from "next";
import { Inter, Julius_Sans_One, Syncopate } from "next/font/google";
import Script from "next/script"; // ✅ ADD THIS
import "./globals.css";

// Julius Sans One
export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

// Syncopate
export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

// Inter
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","900"],
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
    <html lang="en">
      <body className={`${syncopate.variable} ${julius.variable} ${inter.variable} antialiased`}>

        {/* ✅ Google Tag */}
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

        {children}
      </body>
    </html>
  );
}