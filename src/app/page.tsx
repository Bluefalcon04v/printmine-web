"use client";
import BentoGrid from "@/components/bentoGrid";
import DynamicCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import Image from "next/image";
import CategoryNavBar from "../components/categoryNavBar";

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
      <CategoryNavBar/>
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
        <h3 className="font-semibold text-4xl text-center">Watch and Buy</h3>
        <div className="place-items-center grid grid-cols-6 mt-8">
          {watchAndBuyData.map((datum, index) => (
            <div key={index} className="px-6 py-2 border rounded-lg">
              <Image alt="data" src={datum.image} width={200} height={200} />
              <div>
                <p className="font-medium text-xl">{datum.name}</p>
                <div className="flex items-end gap-1">
                  <span className="font-semibold text-lg">
                    &#8377;{datum.sellingPrice}
                  </span>
                  <span className="text-gray-500 text-base line-through">
                    &#8377;{datum.actualPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-10 font-semibold text-4xl text-center">
          Corporate gifting
        </h3>
        <DynamicCarousel
          data={watchAndBuyData}
          breakpoints={4}
          card={(datum: any) => (
            <div className="px-6 py-2 border rounded-lg">
              <Image alt="data" src={datum.image} width={200} height={200} />
              <div>
                <p className="font-medium text-xl">{datum.name}</p>
                <p className="text-2xl">&#8902; &#8902; &#8902; &#8902; &#8902; (5 rating)</p>
                <div className="flex items-end gap-1">
                  <span className="font-semibold text-lg">
                    &#8377;{datum.sellingPrice}
                  </span>
                  <span className="text-gray-500 text-base line-through">
                    &#8377;{datum.actualPrice}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
      <Footer/>
    </div>

  );
}
