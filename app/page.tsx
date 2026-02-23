import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeAttractions from "./components/HomeAttractions";
import HomeIntro from "./components/HomeIntro";
import HomeLink from "./components/HomeLink";
import HomeMap from "./components/HomeMap";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* Shared Background */}
      <div
        className="absolute inset-0 h-225 bg-cover bg-black -z-10"
       /*  style={{ backgroundImage: "url('/b1.jpg')" }} */
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 h-225 bg-black/40 -z-10" />

      <Navbar />

      <Hero />
      <HomeIntro />
      <HomeLink />
      <HomeAttractions />
      <HomeMap />
      <Footer />
    </div>
  );
}