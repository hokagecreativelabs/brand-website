"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = ({ images }) => {
  return (
    <div className="hidden lg:flex relative w-full max-w-[1832px] h-[338px] mt-[60px] justify-center items-center overflow-hidden">
      <Swiper
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        slidesPerView={3} // Show three images on desktop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-[600px] h-[338px] rounded-[24px] border border-gray-300 overflow-hidden">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
