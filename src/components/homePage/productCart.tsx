"use client";
import Image from "next/image";
import React from "react";

interface IProps {
  data: IProductData;
}

export interface IProductData {
  price: number;
  status: number;
  image: string;
  name: string;
  moq: number;
}

const ProductCart = ({ data }: IProps) => {
  const { image, name, price, moq, status } = data;

  const sendWhatsAppMessage = () => {
    const phoneNumber = '7055533803';
    const message = `Product Name: ${name}\nImage: ${"https://drive.google.com/uc?export=view&id=" + image}\nPrice: ₹${price}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp Web in a new tab
  };

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
        alt="drive image"
        src={"https://drive.google.com/uc?export=view&id=" + image}
        width={600}
        height={600}
        className="rounded-sm max-h-72 transition-all"
      />

      {/* ------------------------------------------ Details ------------------------------------------ */}
      <div className="flex flex-col gap-1.5 px-3 py-2">
        <div className="flex items-center gap-1 font-sub font-semibold text-neutral-800 text-base leading-tight">
          <p className="">
            Product Code:
          </p>
          <p className="">
            {name}
          </p>
        </div>


        <div className="flex items-center gap-1 font-sub font-semibold text-neutral-800 text-sm leading-tight">
          <p className="">
            Minimum Order Quantity:
          </p>
          <p className="">
            {moq}
          </p>
        </div>


        <div>
          <div className="flex items-baseline pt-1 w-full font-sub font-black text-lg line-clamp-2 leading-tight tracking-wide">
            ₹ {price}
          </div>
        </div>
      </div>

      {/* ----------------------------------- View Detail Button --------------------------------------------- */}
      <button
        onClick={sendWhatsAppMessage} // Call the WhatsApp message function
        className={`bg-indigo-700 py-1.5 border-2 bottom-0  transition-all hover:uppercase border-neutral-100 rounded-sm w-full font-semibold text-blue-100 text-center `}
      >
        Get Detail
      </button>
    </div>
  );
};
export default ProductCart;
