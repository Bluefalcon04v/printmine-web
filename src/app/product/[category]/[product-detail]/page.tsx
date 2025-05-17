"use client";
// import ProductCart, { IProductData } from '@components/homePage/productCart'
// import { Category1, Category2, Category3, Category4 } from "@public/images";
// import DynamicCarousel from '@components/homePage/carousel'
import PackingMaterials from 'lib/packing-materials.json';
// import { LISTING_DATA } from '../../all-products/page'
import ProductDetail from "./components/productDetail";
import LaptopSleeve from 'lib/laptop-sleeve.json';
import MobileStand from 'lib/mobile-stand.json';
import PenKeychain from 'lib/pen-keychain.json';
import PlasticPen from 'lib/plastic-pen.json';
import LaptopBag from 'lib/laptop-bag.json';
import PowerBank from 'lib/power-bank.json';
import { Category1 } from "@public/images";
// import { StarSvg } from "@public/icons";
import MetalPen from 'lib/metal-pen.json';
import Notebook from 'lib/notebook.json';
import Footer from "@components/footer";
import React, { useState } from "react";
import GiftSet from 'lib/gift-set.json';
import Novelty from 'lib/novelty.json';
import Bottle from 'lib/bottle.json';
import Clock from 'lib/clock.json';
import Image from "next/image";


const Page = () => {
  const [data, setData] = useState([])
  const params = window.location.pathname.split("/");
  const categoryName = params[2];
  const productName = params[3];


  const productDataMap = {
    bottle: Bottle,
    novelty: Novelty,
    clock: Clock,
    "gift-set": GiftSet,
    "laptop-bag": LaptopBag,
    "laptop-sleeve": LaptopSleeve,
    "metal-pen": MetalPen,
    "mobile-stand": MobileStand,
    notebook: Notebook,
    "packing-materials": PackingMaterials,
    "pen-keychain": PenKeychain,
    "plastic-pen": PlasticPen,
    "power-bank": PowerBank,
  };

  function selectedData() {
    if (categoryName === "metal-pen") {
      // setData(MetalPen)
    }
    else if( categoryName === "plastic-pen"){
      // setData(PlasticPen)
    }
  }

  selectedData();

  const [mainImage, setMainImage] = useState(Category1);

  // const handleImageSelect = (image: string) => {
  //   setMainImage(image);
  // };

  // const IMAGEDATA = [Category1, Category2, Category3, Category4];

  return (
    <>
      <div className="mx-auto pt-2 w-11/12 max-lg:w-[95%]">
        <div className="gap-4 grid grid-cols-2">
          {/* product images */}
          <div className="flex bg-neutral-50 shadow border border-neutral-100 rounded-xs w-full">
            {/* Select image */}
            {/* <div className="flex flex-col gap-2 my-2 w-3/12 max-h-[400px]">
              {IMAGEDATA.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`image ${index + 1}`}
                  height={200}
                  width={200}
                  className={`px-2 w-full max-h-[120px] max-w-[110px] h-full rounded-sm object-cover aspect-square hover:scale-110 transition-all cursor-pointer ${
                    mainImage === image
                      ? "border border-neutral-300 p-2 rounded-xs "
                      : "opacity-60"
                  }`}
                  onClick={() => handleImageSelect(image)}
                />
              ))}
            </div> */}

            {/* Main image */}
            <div className="relative w-full h-full">
              <Image
                src={mainImage}
                alt="main image"
                height={400}
                width={400}
                className="p-2 rounded-xl w-full max-h-[400px] object-fit"
              />
              {/* <div className="top-1 right-0 absolute flex gap-1 bg-red-500 shadow-md px-4 py-1 border border-white rounded-full font-sub font-semibold text-white text-sm capitalize">
                <StarSvg className="!stroke-white" />
                <p>best seller</p>
              </div> */}
            </div>
          </div>

          {/* product details */}
          <ProductDetail productName={productName} />
        </div>
        {/* Product Features */}
        {/* <ProductFeatures /> */}
        {/* carousel */}
        {/* <div>
          <p className="py-4 pt-16 font-main font-semibold text-center">
            Corporate Gift Collection
          </p>
          <DynamicCarousel
            data={LISTING_DATA}
            breakpoints={5}
            card={(LISTING_DATA: IProductData) => (
              <ProductCart data={LISTING_DATA} />
            )}
          />
        </div> */}
        {/* <Reviews /> */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
