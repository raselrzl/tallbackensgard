import Hero from "@/app/components/Hero";
import HomeAttractions from "@/app/components/HomeAttractions";
import HomeLink from "@/app/components/HomeLink";
import ServicesSlider from "@/app/components/ServicesSlider";
import Script from "next/script";

export default function VandrarhemHomePage() {
  return (
    <div className="relative overflow-hidden bg-black">
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
      <Hero />
      {/*  <HomeIntro /> */}
      {/* <HomeIntroSlider /> */}
      <ServicesSlider />
      <HomeAttractions />
      <HomeLink />
      {/*  <HomeMap /> */}
    </div>
  );
}
