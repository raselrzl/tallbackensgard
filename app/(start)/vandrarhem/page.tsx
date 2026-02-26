import Hero from "@/app/components/Hero";
import HomeAttractions from "@/app/components/HomeAttractions";
import HomeIntro from "@/app/components/HomeIntro";
import HomeLink from "@/app/components/HomeLink";
import HomeMap from "@/app/components/HomeMap";
import HomeIntroSlider from "@/app/components/HomeSlider";
import ServicesSlider from "@/app/components/ServicesSlider";

export default function VandrarhemHomePage() {
  return (
    <div className="relative overflow-hidden bg-black">
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
