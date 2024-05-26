"use client";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import useScreenResize from "@/app/lib/screenSize";
import { testimonials } from "@/app/data/data";
import StarRating from "./StarRating";

export default function TestimonialCarousel() {
  const [delay, setDelay] = useState(false);
  const screenSize = useScreenResize();
  // Custom pagination bullets
  const renderBullet = (index: number, className: string) => {
    return `<span class="${className}" style="${"background-color: yellow; width: 12px; height: 12px;"}"></span>`;
  };

  //apply delay before loading user testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //modify pagination wrpper container
  useEffect(() => {
    const customPagination = document.querySelector(".custom-pagination");
    if (customPagination) {
      customPagination.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; padding: 10px; position: absolute; bottom:-3rem;"
      );
    }
  }, []);

  return (
    <>
      <div className="lg:h-[60vh] h-[45vh] md:h-[27vh]  mx-5 relative mb-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
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
          slidesPerView={screenSize >= 1024 ? 3 : screenSize >= 768 ? 2 : 1}
          centeredSlides={false}
          freeMode={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="lg:h-full h-full "
        >
          {delay &&
            testimonials.map((item, idx) => (
              <SwiperSlide
                className=" bg-white flex items-center relative"
                key={idx}
              >
                <div className="lg:h-[80%] lg:w-full h-full w-full bg-gray-200 lg:absolute lg:bottom-[10%] rounded-xl flex flex-col gap-5 px-5 py-12">
                  <FaQuoteLeft size={55} />
                  <StarRating />
                  <p className="">{item.comment}</p>
                  <p className="text-xl font-bold">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Custom Pagination Wrapper */}
        <div className="custom-pagination"></div>
      </div>
    </>
  );
}
