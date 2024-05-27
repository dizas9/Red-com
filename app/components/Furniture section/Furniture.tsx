import { latest } from "@/app/data/data";
import ProductList from "../Reusable Product Component/ProductList";

export default function Furniture() {
  return (
    <div className="relative mb-24">
      <ProductList title={"Furniture"} products={latest} />
    </div>
  );
}
