import Image from "next/image";
import Hero from "./sections/Hero";
import AboutSection from "./sections/About";
import Services from "./sections/Services";
import WorksSection from "./sections/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Services />
      <WorksSection />
    </div>
  );
}
