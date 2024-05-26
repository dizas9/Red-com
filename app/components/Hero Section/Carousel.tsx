"use client";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from 'swiper/modules';


interface SlideProps {
  src: string;
}

interface CarouselProps {
  slides: SlideProps[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  // previous navigation
  const prev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? slides.length - 1 : prevState - 1
    );
  };

  // next navigation
  const next = () => {
    setCurrent((prevState) =>
      prevState === slides.length - 1 ? 0 : prevState + 1
    );
  };

  // auto slide
  useEffect(() => {
    const slideInterval = setInterval(next, 5000);

    // clear
    return () => clearInterval(slideInterval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div className="relative" {...handlers}>
      <div className="flex overflow-hidden rounded-lg lg:h-[80vh]">
        {slides.map((item, idx) => (
          <div
            className="w-full flex-shrink-0 transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
            key={idx}
          >
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={item.src}
                  width={3000}
                  height={500}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4">
        <button
          className="w-10 h-10 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full"
          onClick={prev}
        >
          <BiLeftArrowAlt size={30} color="white" />
        </button>
        <button
          className="w-10 h-10 bg-[rgba(51,68,81,0.5)] hover:bg-[rgba(51,68,81,0.9)] flex items-center justify-center rounded-full"
          onClick={next}
        >
          <BiRightArrowAlt size={30} color="white" />
        </button>
      </div>
    </div>
  );
}
