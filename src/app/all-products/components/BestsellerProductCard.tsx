import React from "react";
import Image from "next/image";
import WaveLine from "@public/svg/waveLine";
export default function BestSellerProductCard() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
    <div className="relative group w-80 shadow-lg overflow-visible rounded-br-4xl border-amber-200">
      
      <div className="absolute top-[-2px] left-0 w-full h-6 z-10">
        <WaveLine />
      </div>

      <div className="relative h-80 w-full">
        <Image
          src="/images/WatchBuy2.png"
          alt="Product Image"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute bg-red-600 text-white text-xl font-bold px-3 py-1 rounded z-20 transition-all  duration-500 ease-in-out">
  <span className="group-hover:hidden">⭐</span>

  <span className="hidden group-hover:inline">BESTSELLER</span>
</div>

        <div className="absolute  right-2 top-2  px-2 py-1 rounded flex items-center space-x-1 z-20">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="text-orange-500 text-sm">7.5</span>
        </div>

        <div className="absolute bottom-0 w-full  p-4 rounded-b-2xl">
          <h3 className="text-lg font-bold text-gray-800">Air Jordan 1 Mid SE</h3>
          <p className="text-gray-600 text-sm mt-1">$135</p>
        </div>
      </div>
    </div>
  </div>
  );
}
