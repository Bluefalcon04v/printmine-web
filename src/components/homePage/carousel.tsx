"use client";

import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LeftIcon, RightIcon } from "@public/icons";

interface IProps {
  data: any[];
  card: any;
  isCarouselIcons?: boolean;
  breakpoints?: any;
}

const DynamicCarousel = ({
  card,
  data,
  isCarouselIcons = true,
  breakpoints,
}: IProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      if (swiperRef.current.isBeginning) {
        swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };
  return (
    <div className="w-full relative">
      {isCarouselIcons && (
        <div className="flex  justify-between items-center gap-6 md:gap-4">
          <div
            onClick={goPrev}
            className="absolute z-40 left-4  top-[40%] cursor-pointer w-40 active:scale-90 transition-all"
          >
            <LeftIcon />
          </div>
          <div
            onClick={goNext}
            className="absolute z-40 -right-20  top-[40%] cursor-pointer w-40 active:scale-90 transition-all"
          >
            <RightIcon />
          </div>
        </div>
      )}
      <Swiper
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={breakpoints}
        // breakpoints={breakpoints}
        spaceBetween={16}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>{card!(slide)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicCarousel;
