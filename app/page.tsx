import Hero from "./components/Hero Section/Hero";
import Testimonial from "./components/Testimonial Section/Testimonial";

export default function Home() {
  return (
    <>
      <div className="lg:px-10 md:px-28 lg:py-2 p-2 flex flex-col px-3 h-fit">
        <Hero/>
        <Testimonial/>
      </div>
      
    </>
  );
}
