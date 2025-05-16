"use client";
import Image from "next/image";
import React from "react";

interface IProps {
  data: IProductData;
  category: string;
}

export interface IProductData {
  price: number;
  status?: number;
  image: string;
  name: string;
  moq: number;
}

const ProductCart = ({ data, category }: IProps) => {
  const { image, name, price, moq } = data;

  // const sendWhatsAppMessage = () => {
  //   const phoneNumber = '9958670670';
  //   const message = `Product Name: ${name}\nImage: ${"https://drive.google.com/uc?export=view&id=" + image}\nPrice: ₹${price}`;
  //   const encodedMessage = encodeURIComponent(message);

  //   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
  //     window.innerWidth < 768;

  //   const whatsappUrl = isMobile
  //     ? `https://wa.me/91${phoneNumber}?text=${encodedMessage}`
  //     : `https://web.whatsapp.com/send?phone=91${phoneNumber}&text=${encodedMessage}`;

  //   window.open(whatsappUrl, "_blank");
  // };

  return (
    <div
      className={`group relative hover:shadow-md p-0.5 border border-neutral-200 rounded-sm w-full transition-all cursor-pointer`}
    >
      {/* ------------------------------------------badges------------------------------------------ */}
      {/* {status === 1 && (
          <div className="top-0 z-10 absolute flex bg-red-500 shadow-md shadow-red-400/30 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
            Best Seller
          </div>
        )}
        {status === 2 && (
          <div className="top-0 z-10 absolute flex bg-blue-500 shadow-blue-400/30 shadow-md m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
            New Launch
          </div>
        )} */}

      {/* ------------------------------------------ Images ------------------------------------------ */}
      <Image
        src={"https://drive.google.com/uc?export=view&id=" + image}
        className="rounded-sm max-h-72 transition-all"
        alt="drive image"
        height={600}
        width={600}
      />

      {/* ------------------------------------------ Details ------------------------------------------ */}
      <div className="flex flex-col gap-1.5 px-3 max-sm:px-2 py-2">
        <div className="flex items-center gap-1 max-md:gap-0.5 font-sub font-semibold text-neutral-800 max-sm:text-xs text-sm max-md:text-sm leading-tight">
          <p className="">Product Code:</p>
          <p className="">{name}</p>
        </div>

        <div className="flex items-center gap-1 font-sub font-semibold text-neutral-800 max-sm:text-xs text-sm max-md:text-sm leading-tight">
          <p className="">Min. Order Quantity:</p>
          <p className="">{moq}</p>
        </div>

        <div>
          <div className="flex items-baseline pt-1 w-full font-sub font-black text-lg line-clamp-2 leading-tight tracking-wide">
            ₹ {price}
          </div>
        </div>
      </div>

      {/* ----------------------------------- View Detail Button --------------------------------------------- */}
      <button
        onClick={() => window.location.assign("/product/" + `${category}/` + name)}
        className={`bg-indigo-700 py-1.5 border-2 bottom-0  transition-all hover:uppercase border-neutral-100 rounded-sm w-full font-semibold text-blue-100 text-center `}
      >
        Get Detail
      </button>
    </div>
  );
};
export default ProductCart;
