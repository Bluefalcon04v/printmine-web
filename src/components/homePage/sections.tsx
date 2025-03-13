"use client";

import { StarSvg } from "@public/icons";
import { Category1, Category2, Category3, Category4, Category5, Category6, PenImage } from "@public/images";
import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

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
              <ProductCard data={datum} />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;

interface IProps {
  data: IProductData
}
interface IProductData {
  sellingPrice: number
  actualPrice: number
  status: number
  rating: number
  stars: number
  image: string
  name: string
}

const ProductCard = ({ data }: IProps) => {
  const { image, name, sellingPrice, actualPrice, status, stars, rating } = data
  return (
    <div className={`group relative hover:shadow-md p-0.5 border border-neutral-200 rounded-sm w-full  transition-all cursor-pointer `}>
      {/* ------------------------------------------badges------------------------------------------ */}
      {status === 1 && <div className="top-0 z-10 absolute flex bg-red-500 shadow-md shadow-red-400/30 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
        Best Seller
      </div>}
      {status === 2 && <div className="top-0 z-10 absolute flex bg-blue-500 shadow-blue-400/30 shadow-md m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
        New Launch
      </div>}

      {/* ------------------------------------------ Like & Add to Cart ---------------------------------------- */}
      <div className="group-hover:bg-white group-hover:text-slate-700 top-2 right-2 z-40 absolute flex gap-2 bg-neutral-200/30 shadow shadow-slate-300/70 px-2 py-1 rounded-sm text-white/80 text-lg transition-all">
        <FiHeart className="hover:fill-red-300 active:fill-red-600 hover:scale-125 active:scale-100 transition-all"/>
        <FiShoppingCart className="hover:fill-yellow-200 active:fill-amber-400 hover:scale-120 active:scale-100 transition-all"/>
      </div>

      {/* ------------------------------------------Images ------------------------------------------ */}
      <Image alt="" src={image} width={400} height={400} className="shadow-md group-hover:shadow-2xs rounded-sm max-h-64 object-cover aspect-square group-hover:scale-105 transition-all" />
      {/* ------------------------------------------Details ------------------------------------------ */}
      <div className="flex flex-col gap-1.5 px-3 py-2">
        <p className="font-sub font-medium text-neutral-800 text-sm leading-tight">{name}</p>
        {!!stars && <div className="flex items-center min-h-4">
          {Array.from({ length: stars }).map((_, index) => (<div key={index} className="w-fit"><StarSvg className="fill-amber-400" /></div>))}
          {!!rating && <p className="ml-1 text-neutral-600 text-xs">Ratings <span className="font-semibold tracking-wide">({rating})</span></p>}
        </div>}
        <div>
          <div className="flex items-baseline pt-1 w-full font-sub font-black text-lg line-clamp-2 leading-tight tracking-wide">&#8377; {sellingPrice} <span className="ml-1 text-neutral-600 text-sm line-through tracking-wide"> &#8377; {actualPrice} </span> </div>
        </div>
      </div>
      {/* ----------------------------------- AddToCart --------------------------------------------- */}
      <Link href={`/products/magnetic-badge`} className={`bg-indigo-700 py-1.5 border-2 hover:scale-105 active:scale-100 transition-all  hover:uppercase border-neutral-100 rounded-sm w-full font-semibold text-blue-100 text-center `}>
        View Detail
      </Link>
    </div>
  )
}