
import Image from "next/image";
import Carousel from "./Carousel";

export default function Hero() {
  // slide images
  const slides = [
    { src: "/images/hero/hero1.jpg" },
    { src: "/images/hero/hero2.webp" },
    { src: "/images/hero/hero3.jpg" },
  ];
  return (
    <>
      <div className="relative w-full my-5 ">
        <Carousel slides={slides}/>
      </div>
    </>
  );
}
