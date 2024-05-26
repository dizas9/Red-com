"use client";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";

interface SlideProps {
  src: string;
}

interface CarouselProps {
  slides: SlideProps[];
}

export default function Carousel({ slides }: CarouselProps) {
  return (
    <>
      <div className="lg:h-[80vh] ">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay:3000,
            disableOnInteraction:false,
          }}
          slidesPerView={1}
          centeredSlides={true}
          freeMode={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="lg:h-full rounded-lg"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide className="px-0" key={idx}>
              <Image src={slide.src} alt="..." width={2000} height={1000} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4 z-50">
          <div className="swiper-button-prev w-10 h-10 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full">
            <BiLeftArrowAlt size={30} color="white" />
          </div>
          <div className="swiper-button-next w-10 h-10 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full">
            <BiRightArrowAlt size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
