import { PenImage } from "@public/images";
import Image from "next/image";
import React from "react";

const watchAndBuyData = [
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
  {
    image: PenImage,
    name: "Premium Pen",
    sellingPrice: 200,
    actualPrice: 400,
  },
];

const WatchAndBuy = () => {
  return (
    <div className="my-32">
      <h3 className="font-semibold text-4xl text-center">Watch and Buy</h3>
      <div className="place-items-center grid grid-cols-6 mt-8 gap-8">
        {watchAndBuyData.map((datum, index) => (
          <div key={index} className="w-full  border rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
            <Image
              alt="data"
              src={datum.image}
              width={200}
              height={200}
              className="mix-blend-multiply"
            />
            <div className="bg-neutral-100/80 px-6 py-2 rounded-b-lg">
              <p className="font-medium text-xl">{datum.name}</p>
              <div className="flex items-end gap-1">
                <span className="font-semibold text-lg">
                  &#8377;{datum.sellingPrice}
                </span>
                <span className="text-gray-500 text-base line-through">
                  &#8377;{datum.actualPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchAndBuy;
