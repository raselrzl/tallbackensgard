import type { Metadata } from "next";
import { Inter, Julius_Sans_One, Syncopate } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  weight: ["300","400","500","600","700","900"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ SEO Metadata (Expanded but Clean)
export const metadata: Metadata = {
  metadataBase: new URL("https://tallbackensgard.se"),

  title: {
    default: "Företagslägenheter i Norrköping | Tallbackens",
    template: "%s | Tallbackens",
  },

  description:
    "Boka företagslägenheter i Norrköping. Boende för företag, arbetare och projekt. Perfekt för korttids- och långtidsboende i Östergötland.",

  keywords: [
    // Core
    "företagslägenhet norrköping",
    "företagslägenheter norrköping",
    "företagsboende östergötland",

    // Workers / hostel
    "vandrarhem för arbetare",
    "vandrarhem för företag",
    "boende för arbetare norrköping",

    // Rental types
    "projektboende",
    "övernattningslägenhet företag",
    "korttidsboende norrköping",

    // English
    "long stay apartment norrköping",
    "short term rental norrköping",
    "corporate housing norrköping",

    // Variations
    "lägenhet för företag norrköping",
    "boende norrköping företag",
    "uthyrning lägenhet norrköping företag"
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Företagsboende i Norrköping | Tallbackens",
    description:
      "Prisvärda företagslägenheter och vandrarhem i Norrköping för företag och arbetare.",
    url: "https://tallbackensgard.se",
    siteName: "Tallbackens",
    locale: "sv_SE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${syncopate.variable} ${julius.variable} ${inter.variable} antialiased`}>

        {/* Google Tag */}
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

        {/* ✅ Structured Data (Enhanced for SEO) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Tallbackens Vandrarhem & Apartments",
            url: "https://tallbackensgard.se",
            telephone: "+46103333536",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Finspångsvägen 497",
              addressLocality: "Norrköping",
              postalCode: "605 80",
              addressRegion: "Östergötland",
              addressCountry: "SE",
            },
            areaServed: {
              "@type": "City",
              name: "Norrköping",
            },
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}