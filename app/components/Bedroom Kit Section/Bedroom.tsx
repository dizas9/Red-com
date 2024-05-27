import { bedroom } from "@/app/data/data";
import ProductList from "../Reusable Product Component/ProductList";

export default function Bedroom() {
  return (
    <div className="relative mb-24">
      <ProductList title={"Bedroom Kit"} products={bedroom} />
    </div>
  );
}
