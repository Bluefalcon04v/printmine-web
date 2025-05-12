"use client";

import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LeftIcon, RightIcon } from "@public/icons";

interface IProps {
  data
  card
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breakpoints?: any;
}

const DynamicCarousel = ({
  card,
  data,
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
    <div className="relative flex place-content-center place-items-center w-full">
      <div
        onClick={goPrev}
        className="z-40 place-items-center w-[3%] active:scale-90 transition-all cursor-pointer"
      >
        <LeftIcon />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-[90%] mySwiper"
        slidesPerView={breakpoints}
        slidesPerGroup={breakpoints}
        // breakpoints={breakpoints}
        spaceBetween={40}
        speed={800}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>{card!(slide)}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        onClick={goNext}
        className="z-40 place-items-center w-[5%] active:scale-90 transition-all cursor-pointer"
      >
        <RightIcon />
      </div>
    </div>
  );
};

export default DynamicCarousel;
