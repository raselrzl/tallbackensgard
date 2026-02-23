import Hero from "./components/Hero";
import HomeIntro from "./components/HomeIntro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <HomeIntro />
    </div>
  );
}