import { sculpture } from "@/app/data/data";
import ProductList from "../Reusable Product Component/ProductList";

export default function Sculpture() {
  return (
    <div className="relative mb-24">
      <ProductList title={"Sculpture Vase"} products={sculpture} />
    </div>
  );
}
