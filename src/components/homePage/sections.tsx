"use client";

import { StarSvg } from "@public/icons";
import { PenImage } from "@public/images";
import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";

const sectionData = [
  {
    name: "Corporate Gifting",
    list: [
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
    ],
  },
  {
    name: "Personalized Pens",
    list: [
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
    ],
  },
  {
    name: "Corporate Gift Sets",
    list: [
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
    ],
  },
];

const Sections = () => {
  return (
    <div>
      {sectionData.map((datum, index) => (
        <div key={index} className="mb-10">
          <h3 className="mb-10 font-semibold text-4xl text-center">
            {datum.name}
          </h3>
          <DynamicCarousel
            data={datum.list}
            breakpoints={5}
            card={(datum: any) => (
              <div className="cursor-pointer ">
                <div className="bg-neutral-100/80 rounded-t-lg">
                  <Image
                    alt="data"
                    src={datum.image}
                    width={200}
                    height={200}
                    className="mix-blend-multiply px-6 py-2 mx-auto"
                  />
                </div>
                <div className="px-6 py-2 border-b border-neutral-200 border-x rounded-b-lg ">
                  <p className="font-medium text-xl">{datum.name}</p>
                  <p className=" flex ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarSvg
                        key={index}
                        className={`w-4 h-4 ${"text-yellow-500 fill-yellow-500"}`}
                      />
                    ))}
                  </p>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="font-semibold text-lg">
                      &#8377;{datum.sellingPrice}
                    </span>
                    <span className="text-gray-500 text-base line-through">
                      &#8377;{datum.actualPrice}
                    </span>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;
