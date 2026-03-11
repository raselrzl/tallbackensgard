import Hero from "@/app/components/Hero";
import HomeAttractions from "@/app/components/HomeAttractions";
import HomeIntro from "@/app/components/HomeIntro";
import HomeLink from "@/app/components/HomeLink";
import HomeMap from "@/app/components/HomeMap";
import AHero from "./components/AHero";
import ASlider from "./components/ASlider";

export default function VandrarhemHomePage() {
  return (
    <div className="relative overflow-hidden">
      <AHero />
      <ASlider />
    </div>
  );
}
