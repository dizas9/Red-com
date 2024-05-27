"use client";
import { Product, ProductListProps } from "@/app/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";

// components
export default function ProductList({ title, products }: ProductListProps) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const router = useRouter();

  const handleMouseEnter = (index: any) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // navigate to product details page
  const handleClick = (product: Product) => {
    const encodePeoduct = encodeURIComponent(JSON.stringify(product));
    router.push(`/details/${product.slug}?product=${encodePeoduct}`);
  };

  return (
    <div>
      {/* div1 */}
      <div className="w-full  flex justify-between items-center mb-3">
        <p className="text-xl lg:2xl  font-semibold">{title}</p>
        <button className="px-2 py-1 border rounded-md text-gray-500 font-normal flex items-center gap-1">
          View All <CgArrowTopRight />
        </button>
      </div>

      {/* div2 */}
      <div className="w-full flex flex-wrap gap-2 md:gap-7 items-start justify-center md:justify-start lg:justify-center h-fit md:h-1/2 mb-7">
        {products.map((item, idx) => (
          <div
            className={
              hoveredItem === idx
                ? "w-[45%] md:w-[30%] lg:w-[22%] hover:scale-105 transition-transform duration-500 relative cursor-pointer"
                : "w-[45%] md:w-[30%] lg:w-[22%] hover:scale-100"
            }
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item)}
            key={idx}
          >
            {/* image */}
            <Image
              alt="..."
              src={hoveredItem === idx ? item.image[1].src : item.image[0].src}
              width={500}
              height={200}
            />

            {/* Shop now button */}
            {hoveredItem === idx && (
              <div className="py-1 text-center border absolute bottom-20 lg:left-3 left-2 bg-white w-[90%] rounded-lg cursor-pointer">
                Shop Now
              </div>
            )}

            {/* name + price */}
            <div className="h-[20%] flex flex-col gap-2 mt-2">
              <p className="">{item.name}</p>

              <div className="flex gap-2 font-semibold">
                <p className="">৳ {item.discountPrice}</p>
                {item.regularPrice !== undefined && item.regularPrice > 0 && (
                  <p className="text-red-700 line-through">
                    ৳ {item.regularPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
