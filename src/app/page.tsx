"use client";

import BentoGrid from "@/components/bentoGrid";
import DynamicCarousel from "@/components/carousel";
import Footer from "@/components/footer";
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
    <div className="flex flex-col gap-10 mt-7 w-full">
      <CategoryNavBar />
      <HomeSlider />
      <div className="mx-auto w-11/12">
        <BentoGrid />
        <WatchAndBuy />
        <Sections />
        <Blogs />
        <Reviews />
        <ExcellenceTeam />
        <MeetFounder />
      </div>
      <Footer/>
    </div>
  );
}
