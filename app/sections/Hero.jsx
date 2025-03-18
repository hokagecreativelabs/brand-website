"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiArrowRight } from "react-icons/fi";

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

const images = [
  "b2b",
  "b2b",
  "b2b",
  "b2b",
  "b2b",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const typingText = "Hokage Creative Labs";

  // Typing effect for the H1
  useEffect(() => {
    if (textIndex < typingText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(typingTimeout);
    }
  }, [textIndex]);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for CTA button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowCTA(scrollPosition < 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/assets/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-[1046px] h-auto flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px]">
        {/* Typing Text Effect */}
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em]"
          aria-label="Hokage Creative Labs"
        >
          {displayedText}
        </h1>

        {/* Subtitle */}
        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi">
          Established in 2023, Hokage Creative Labs stands as a premier strategic
          branding and design agency.
        </p>

        {/* CTA Button with Micro-Interaction */}
        <button
          type="button"
          aria-label="Request a Quote"
          className={`mt-[10px] md:mt-[40px] mb-[-30px] flex items-center justify-center gap-[10px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition duration-300 ease-out ${
            showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 font-nohemi"
          }`}
        >
          Request a Quote
          <FiArrowRight className="w-5 h-5 text-green-600" />
        </button>

        {/* Mobile Image Carousel */}
        <div className="lg:hidden w-full h-[338px] mt-[60px] flex justify-center items-center">
          <img
            srcSet={`/assets/optimized/${images[currentIndex]}-300.webp 300w,
                    /assets/optimized/${images[currentIndex]}-600.webp 600w,
                    /assets/optimized/${images[currentIndex]}-900.webp 900w,
                    /assets/optimized/${images[currentIndex]}-1200.webp 1200w`}
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
            src={`/assets/optimized/${images[currentIndex]}-600.webp`}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <Carousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
