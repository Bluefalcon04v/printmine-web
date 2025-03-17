"use client";
import { Category1, Category2, Category3, Category4, Category5, Category6 } from "@public/images";
import DynamicCarousel from "./carousel";
import ProductCart, { IProductData } from "./productCart";
import React from "react";

const sectionData = [
  {
    name: "Corporate Gifting",
    list: [
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
        status: 0,
        stars: 2,
        rating: 200,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 1000,
        actualPrice: 400,
        status: 1,
        stars: 3,
        rating: 3000,
      },
      {
        image: Category4,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 980,
        actualPrice: 680,
        status: 0,
        stars: 2,
        rating: 20,
      },
      {
        image: Category5,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 670,
        actualPrice: 1200,
        status: 2,
        stars: 5,
        rating: 44,
      },
      {
        image: Category6,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 999,
        actualPrice: 1500,
        status: 2,
        stars: 2,
        rating: 200,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
        status: 1,
        stars: 1,
        rating: 670,
      },
      {
        image: Category3,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 800,
        actualPrice: 3100,
        status: 0,
        stars: 2,
        rating: 2120,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
        status: 1,
        stars: 5,
        rating: 200,
      },
      {
        image: Category4,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
        status: 0,
        stars: 2,
        rating: 980,
      },
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
        status: 1,
        stars: 4,
        rating: 860,
      },
    ],
  },
  {
    name: "Personalized Pens",
    list: [
      {
        image: Category6,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category4,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category3,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category6,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category4,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category5,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
    ],
  },
  {
    name: "Corporate Gift Sets",
    list: [
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category6,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category3,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category5,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category4,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category2,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category6,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category1,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
        sellingPrice: 200,
        actualPrice: 400,
      },
      {
        image: Category3,
        name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
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
          <h3 className="mb-10 font-main font-semibold !text-4xl text-center">
            {datum.name}
          </h3>
          <DynamicCarousel
            data={datum.list}
            breakpoints={5}
            card={(datum: IProductData) => (
              <ProductCart data={datum} />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;