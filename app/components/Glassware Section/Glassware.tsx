import { glasses } from "@/app/data/data";
import ProductList from "../Reusable Product Component/ProductList";

export default function Glassware() {
  return (
    <div className="relative mb-24">
      <ProductList title={"Glassware"} products={glasses} />
    </div>
  );
}
