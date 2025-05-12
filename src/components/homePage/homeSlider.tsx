"use client";
import { Banner1, Banner2, Banner3 } from "@public/images";
import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";

const sliderData = [Banner1, Banner2, Banner3];

const HomeSlider = () => {
  return (
    <div className="">
      <DynamicCarousel
        data={sliderData}
        breakpoints={1}
        card={(imageSrc: string) => (
          <div className="w-full h-[25vw] max-lg:h-[40vw]">
            <Image
              className="w-full h-full object-fill"
              alt="banner-image"
              src={imageSrc}
              quality={100}
              height={481}
              width={965}
              priority
            />
          </div>
        )}
      />
    </div>
  );
};

export default HomeSlider;
