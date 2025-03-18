import Image from "next/image";
import Hero from "./sections/Hero";
import AboutSection from "./sections/About";
import Services from "./sections/Services";
import WorksSection from "./sections/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mb-32">
        <AboutSection />
      </div>
      <div className="mt-48 md:mt-0">
        <Services />
      </div>
      <div className="-mt-24">
        <WorksSection />
      </div>
    </div>
  );
}
