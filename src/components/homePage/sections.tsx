"use client"

import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";

const sectionData = [
  {
    name: "Corporate Gifting",
    list: [
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
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
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
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
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
        name: "Premium Pen",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: "/pen.jpg",
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
            breakpoints={6}
            card={(datum: any) => (
              <div className="px-6 py-2 border rounded-lg">
                <Image alt="data" src={datum.image} width={200} height={200} />
                <div>
                  <p className="font-medium text-xl">{datum.name}</p>
                  <p className="text-2xl">
                    &#8902; &#8902; &#8902; &#8902; &#8902; (5 rating)
                  </p>
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
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;
