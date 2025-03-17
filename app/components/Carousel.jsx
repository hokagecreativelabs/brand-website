"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
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
            <div
              className="w-[600px] h-[338px] rounded-[24px] border border-gray-300 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
