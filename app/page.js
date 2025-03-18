import Image from "next/image";
import Hero from "./sections/Hero";
import AboutSection from "./sections/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
    </div>
  );
}
