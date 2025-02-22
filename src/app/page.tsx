"use client";

import BentoGrid from "@/components/bentoGrid";
import DynamicCarousel from "@/components/carousel";
import Image from "next/image";

const sliderData = [
  "/magneticBadge.png",
  "/keychain.avif",
  "/magneticBadge.png",
  "/keychain.avif",
  "/magneticBadge.png",
];

const watchAndBuyData = [
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
];



export default function Home() {
  return (
    <div className="w-full">
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
              className="w-full xl:h-[50vh] 2xl:h-[55vh"
              priority={true}
              loading="eager"
            />
          </div>
        )}
      />

<BentoGrid />

      <div className="my-32">
        <h3 className="text-center font-semibold text-4xl">Watch and Buy</h3>
        <div className="mt-8 grid grid-cols-6 place-items-center ">
          {watchAndBuyData.map((datum, index) => (
            <div key={index} className="border rounded-lg py-2 px-6">
              <Image alt="data" src={datum.image} width={200} height={200} />
              <div>
                <p className="text-xl font-medium">{datum.name}</p>
                <div className="flex gap-1 items-end">
                  <span className="text-lg font-semibold">
                    &#8377;{datum.sellingPrice}
                  </span>
                  <span className="text-base text-gray-500 line-through">
                    &#8377;{datum.actualPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-center font-semibold text-4xl mb-10">
          Corporate gifting
        </h3>
        <DynamicCarousel
          data={watchAndBuyData}
          breakpoints={4}
          card={(datum: any) => (
            <div className="border rounded-lg py-2 px-6">
              <Image alt="data" src={datum.image} width={200} height={200} />
              <div>
                <p className="text-xl font-medium">{datum.name}</p>
                <p className="text-2xl">&#8902; &#8902; &#8902; &#8902; &#8902; (5 rating)</p>
                <div className="flex gap-1 items-end">
                  <span className="text-lg font-semibold">
                    &#8377;{datum.sellingPrice}
                  </span>
                  <span className="text-base text-gray-500 line-through">
                    &#8377;{datum.actualPrice}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>

  );
}
