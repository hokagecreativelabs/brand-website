"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

const images = [
  "itl-cover",
  "mfon-books",
  "enauf-cover",
  "puc-cover",
  "oladayo-cover",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/assets/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-[1046px] h-auto flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px]">
        <h1 className="font-vastago font-semibold text-[96px] leading-[120%]">
          Hokage Creative Labs
        </h1>
        <p className="max-w-[598px] text-[20px] leading-[145%]">
          Established in 2023, Hokage Creative Labs stands as a premier strategic branding and design agency.
        </p>
        <button className="mt-[10px] md:mt-[40px] mb-[-30px] flex items-center justify-center gap-[10px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition">
            Request a Quote
            <img src="/assets/images/right-arrow.webp" alt="Play" className="w-[20px] h-[10px]" />
          </button>
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
        <div className="hidden lg:block">
          <Carousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
