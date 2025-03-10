"use client";

import { CoverImage1, CoverImage2 } from "@public/images";
import Image from "next/image";
import React from "react";
import DynamicCarousel from "./carousel";

const sliderData = [CoverImage1, CoverImage2, CoverImage1];

const HomeSlider = () => {
  return (
    <div className="">
      <DynamicCarousel
        data={sliderData}
        breakpoints={1}
        card={(imageSrc: string) => (
          <div className="w-full h-[55vh]">
            <Image
              src={imageSrc}
              alt="banner-image"
              width={400}
              height={400}
              className="w-full h-full object-contain"
              priority
              quality={100}
            />
          </div>
        )}
      />
    </div>
  );
};

export default HomeSlider;
