import { latest } from "@/app/data/data";
import ProductList from "../Reusable Product Component/ProductList";
import Marquees from "../Marquee Section/Marquees";

export default function LatestArrivals() {
  return (
    <div className="relative mb-24">
      <ProductList title={"Latest Arrivals"} products={latest} />
      <div className="bg-gray-100 uppercase font-bold text-3xl my-5 py-3 overflow-auto absolute right-0 left-0 w-full">
        <Marquees />
      </div>
    </div>
  );
}
