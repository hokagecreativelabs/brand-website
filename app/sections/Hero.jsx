"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

const images = [
  "/assets/images/itl-cover.png",
  "/assets/images/mfon-books.png",
  "/assets/images/enauf-cover.png",
  "/assets/images/puc-cover.png",
  "/assets/images/oladayo-cover.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect for the mobile image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/assets/images/bg-pattern.png')" }}
    >
      {/* Hero Content */}
      <div className="w-full max-w-[1046px] h-auto flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px]">
        <h1 className="font-vastago font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[120%]">
          Hokage Creative Labs
        </h1>
        <p className="w-full max-w-[598px] font-vastago text-[16px] sm:text-[18px] md:text-[20px] leading-[145%] px-2">
          Established in 2012, Hokage Creative Labs stands as a premier strategic branding and design agency, dedicated to elevating brands with groundbreaking ideas and propelling them into the next frontier of innovation.
        </p>

        <div>
          {/* CTA */}
          <button className="mt-[40px] flex items-center justify-center gap-[10px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition">
            Request a Quote
            <img src="/assets/images/right-arrow.png" alt="Play" className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Image (full-width on mobile) */}
        <div className="lg:hidden w-full h-[338px] mt-[60px] flex justify-center items-center">
          <div
            className="w-full h-full rounded-[24px] border border-gray-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
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
