import Bedroom from "./components/Bedroom Kit Section/Bedroom";
import Furniture from "./components/Furniture section/Furniture";
import Glassware from "./components/Glassware Section/Glassware";
import Hero from "./components/Hero Section/Hero";
import LatestArrivals from "./components/Last Araival Section/LatestArrivals";
import Sculpture from "./components/Sculpture Vase Section/Sculpture";

import Testimonial from "./components/Testimonial Section/Testimonial";

export default function Home() {
  return (
    <>
      <div className="lg:px-10 md:px-28 lg:py-2 p-2 flex flex-col px-3 h-fit">
        <Hero/>
        <LatestArrivals/>
        <Sculpture/>
        <Bedroom/>
        <Furniture/>
        <Glassware/>
        <Testimonial/>
      </div>
      
    </>
  );
}
