import Hero from "@/app/components/Hero";
import HomeAttractions from "@/app/components/HomeAttractions";
import HomeIntro from "@/app/components/HomeIntro";
import HomeLink from "@/app/components/HomeLink";
import HomeMap from "@/app/components/HomeMap";
import HomeIntroSlider from "@/app/components/HomeSlider";
import ServicesSlider from "@/app/components/ServicesSlider";

export default function VandrarhemHomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Shared Background Video */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-225 object-cover -z-20 bg-black"
      >
        <source src="/homevideo.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-225 bg-black/40 -z-10" />
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
