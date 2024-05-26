"use client";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface SlideProps {
  src: string;
}

interface CarouselProps {
  slides: SlideProps[];
}

export default function Carousel({ slides }: CarouselProps) {
  // Custom pagination bullets
  const renderBullet = (index: number, className: string) => {
    return `<span class="${className}" style="${"background-color: yellow; width: 12px; height: 12px;"}"></span>`;
  };

  return (
    <>
      <div className="lg:h-[80vh] h-[35vh] md:h-[22vh]">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
            renderBullet: renderBullet,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centeredSlides={true}
          freeMode={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="lg:h-full h-full rounded-lg"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide className="px-0 relative" key={idx}>
              <Image
                src={slide.src}
                alt="..."
                width={2000}
                height={1000}
                className="h-full"
              />
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold   absolute bottom-[30%] lg:bottom-[20%] left-5 lg:left-10 uppercase text-white w-[80%]">
                simple & decidely mordern
              </p>
              <p className="text-lg md:text-lg font-bold   absolute bottom-[15%] lg:bottom-[10%]  left-5  lg:left-10 uppercase text-white w-fit flex items-center">
                Shop Now
                <CgArrowTopRight stroke="500" />
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 lg:top-[28rem] lg:right-5 transform -translate-y-1/2 flex w-full lg:w-fit lg:flex lg:gap-5 justify-between px-4 z-50 ">
          <div className="swiper-button-prev w-10 h-10 lg:w-12 lg:h-12 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full">
            <BiLeftArrowAlt size={30} color="white" />
          </div>
          <div className="swiper-button-next w-10 h-10 lg:w-12 lg:h-12 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full">
            <BiRightArrowAlt size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
