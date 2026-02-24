import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeAttractions from "./components/HomeAttractions";
import HomeIntro from "./components/HomeIntro";
import HomeLink from "./components/HomeLink";
import HomeMap from "./components/HomeMap";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Shared Background Video */}
      <video
        autoPlay
        muted
        
        playsInline
        className="absolute top-0 left-0 w-full h-225 object-cover -z-20 bg-black"
      >
        <source src="/promo-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-225 bg-black/40 -z-10" />

      {/* Important: remove video from Hero if using shared video */}
      <Hero />
      <HomeIntro />
      <HomeLink />
      <HomeAttractions />
      <HomeMap />
    </div>
  );
}
