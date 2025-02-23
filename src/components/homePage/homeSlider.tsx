"use client"

import Image from 'next/image';
import React from 'react'
import DynamicCarousel from './carousel'

const sliderData = [
    "/magneticBadge.png",
    "/keychain.avif",
    "/magneticBadge.png",
    "/keychain.avif",
    "/magneticBadge.png",
  ];

const HomeSlider = () => {
  return (
    <DynamicCarousel
        data={sliderData}
        breakpoints={1}
        card={(imageSrc: string) => (
          <div className="">
            <Image
              src={imageSrc}
              alt="banner-image"
              width={100}
              height={100}
              className="w-full xl:h-[50vh] 2xl:h-[55vh] object-cover"
              priority={true}
              loading="eager"
            />
          </div>
        )}
      />
  )
}

export default HomeSlider