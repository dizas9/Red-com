"use client";

import { productCollections } from "@/app/data/data";
import { Product } from "@/app/types/types";

import { useEffect, useState } from "react";

interface ProductCollectionTypes {
  productCollections: Product[];
  slug: string;
}

export default function page({ params }: { params: { slug: string } }) {
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  const [savings, setSavings] = useState(0);
  const [stack, setStack] = useState("");

  useEffect(() => {
    function fetchData() {
      const product = productCollections.filter((item) => {
        if (item.slug === "woolen-blanket") {
          return item;
        }
      });

      //calulate savings percentage
      if (
        product[0].regularPrice !== undefined &&
        product[0].regularPrice > 0
      ) {
        const savings =
          ((product[0].regularPrice - product[0].discountPrice) /
            product[0].regularPrice) *
          100;
        setSavings(Math.round(savings));
      }

      //determine stack status
      if (product[0].qty > 30) {
        setStack("IN STOCK");
      } else if (product[0].qty > 30) {
        setStack("LIMITED STOCK");
      } else {
        setStack("OUT OF STOCK");
      }

      setProductDetails(product);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="lg:px-10 md:px-28 lg:py-24 p-2 flex flex-col px-3 h-fit">
        {/* main div */}

        {productDetails.length > 0 && (
          <div className="flex flex-col w-full border h-fit">
            {/* product carousel */}
            <div className="border"></div>

            {/* product's details  */}
            <div className="">
              {/* Product name */}
              <p className="text-xl font-semibold mb-5">
                {productDetails[0].name}
              </p>

              {/* product price */}
              <div className="w-full flex items-start gap-5 font-normal">
                <p className="">৳{productDetails[0].discountPrice}</p>
                {productDetails[0].regularPrice !== undefined &&
                  productDetails[0].regularPrice > 0 && (
                    <p className="text-blue-700 line-through">
                      ৳ {productDetails[0].regularPrice}
                    </p>
                  )}

                {/* savings */}
                <p className="text-red-700">SAVE {savings} %</p>
              </div>

              {/* Stock */}
              <div className="flex w-1/2 justify-normal">
                <p className="font-normal">Availability </p>
                <span className="text-red-700 pl-5 font-bold">:{stack}</span>
              </div>

              {/* Stock */}
              <div className="flex w-1/2 justify-normal">
                <p className="font-normal">QTY </p>
                <span className="text-black pl-20 font-bold">
                  :{productDetails[0].qty}
                </span>
              </div>

              {/* select color */}
              <div className="flex flex-col">
                <p className="font-bold pb-2">
                  Select Color <span className="text-red-700">*</span>
                </p>

                {/* color box */}
                {productDetails[0].color !== undefined && (
                  <div className="flex gap-3 ">
                    {productDetails[0].color.map((item, idx) => (
                      <div
                        className={`h-10 w-10 border rounded-lg`}
                        key={idx}
                        style={{ backgroundColor: item }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* related category */}
        <div className=""></div>
      </div>
    </>
  );
}
