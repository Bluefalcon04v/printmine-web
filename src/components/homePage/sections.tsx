"use client";

import { StarSvg } from "@public/icons";
import { Category1, Category2, Category3, Category4, Category5, Category6, PenImage } from "@public/images";
import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";

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
              // <div className="cursor-pointer">
              //   <div className="bg-neutral-100/80 rounded-t-lg">
              //     <Image
              //       alt="data"
              //       src={datum.image}
              //       width={200}
              //       height={200}
              //       className="mx-auto px-6 py-2 mix-blend-multiply"
              //     />
              //   </div>
              //   <div className="px-6 py-2 border-neutral-200 border-x border-b rounded-b-lg">
              //     <p className="font-medium text-xl">{datum.name}</p>
              //     <p className="flex">
              //       {Array.from({ length: 5 }).map((_, index) => (
              //         <StarSvg
              //           key={index}
              //           className={`w-4 h-4 ${"text-red-500 fill-yellow-500"}`}
              //         />
              //       ))}
              //     </p>
              //     <div className="flex items-end gap-1 mt-3">
              //       <span className="font-semibold text-lg">
              //         &#8377;{datum.sellingPrice}
              //       </span>
              //       <span className="text-gray-500 text-base line-through">
              //         &#8377;{datum.actualPrice}
              //       </span>
              //     </div>
              //   </div>
              // </div>
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
    <div className={`group relative hover:shadow-md p-0.5 border border-neutral-200 rounded-sm w-full  transition-all cursor-pointer ${status === 1 && " border-red-300 shadow-2xs shadow-red-400/30"}`}>
      {/* ------------------------------------------badges------------------------------------------ */}
      {status === 1 && <div className="top-0 z-10 absolute flex bg-red-500 shadow-md shadow-red-400/30 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
        Best Seller
      </div>}
      {status === 2 && <div className="top-0 z-10 absolute flex bg-blue-500 shadow-blue-400/30 shadow-md m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
        New Launch
      </div>}
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
      <div className={`bg-indigo-700 py-1.5 border-2 hover:scale-105 active:scale-100 transition-all  hover:uppercase border-neutral-100 rounded-sm w-full font-semibold text-blue-100 text-center ${status === 1 ? " !bg-red-500  hover:!bg-red-400 text-white active:!bg-red-500" : ""}`}>
        Add to Cart
      </div>
    </div>
  )
}