import { PenImage, WatchBuy1, WatchBuy2, WatchBuy3, WatchBuy4, WatchBuy5 } from "@public/images";
import { Product1Video, Product2Video, Product3Video } from "@public/video";
import VideoCard from "./videoCard";
import React from "react";

const watchAndBuyData = [
  {
    image: WatchBuy2,
    name: "Premium Pen | Premium Metal Key Chain Best For Cooperates",
    video: Product1Video,
    sellingPrice: 2000,
    actualPrice: 400,
    status: 0,
    starts: 0,
  },
  {
    image: WatchBuy1,
    name: "Perfume Bottle | Premium Bottle Bottle Best For Cooperates",
    sellingPrice: 500,
    video: Product2Video,
    actualPrice: 800,
    starts: 5,
    status: 1
  },
  {
    image: WatchBuy3,
    name: "Steel Key | Premium Steel Key Best For Cooperates",
    video: Product3Video,
    sellingPrice: 200,
    actualPrice: 400,
    starts: 0,
    status: 0
  },
  {
    image: WatchBuy4,
    name: "Designer Cushion | Premium Designer Cushion",
    video: Product2Video,
    sellingPrice: 200,
    actualPrice: 400,
    starts: 3,
    status: 2
  },
  {
    image: WatchBuy5,
    name: "Customized Mug | Premium Customized Mug Best For Cooperates",
    sellingPrice: 200,
    video: Product1Video,
    actualPrice: 400,
    starts: 4.8,
    status: 0
  },
  {
    image: PenImage,
    name: "Premium Pen | Premium Pen Best For Cooperates",
    sellingPrice: 200,
    video: Product3Video,
    actualPrice: 400,
    starts: 4,
    status: 2
  },
];

const WatchAndBuy = () => {
  return (
    <div className="my-32">
      <h3 className="font-main font-semibold text-center">Watch and Buy</h3>
      <div className="place-items-center gap-8 grid grid-cols-6 max-lg:grid-cols-4 mt-8">
        {watchAndBuyData.map((datum, index) => (
          <div key={index}>
            <VideoCard data={datum} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchAndBuy;