'use client'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { StarSvg } from '../../../public/icons'
import Image from 'next/image'
import React from 'react'

interface IProps {
  data: IProductData
}
export interface IProductData {
  sellingPrice: number
  actualPrice: number
  status: number
  rating: number
  stars: number
  image: string
  name: string
}

const ProductCart = ({ data }: IProps) => {
    const { image, name, sellingPrice, actualPrice, status, stars, rating } = data

    return (
        <div className={`group relative hover:shadow-md p-0.5 border border-neutral-200 rounded-sm w-full  transition-all cursor-pointer `}>
            {/* ------------------------------------------badges------------------------------------------ */}
            {status === 1 && <div className="top-0 z-10 absolute flex bg-red-500 shadow-md shadow-red-400/30 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
                Best Seller
            </div>}
            {status === 2 && <div className="top-0 z-10 absolute flex bg-blue-500 shadow-blue-400/30 shadow-md m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
                New Launch
            </div>}

            {/* ------------------------------------------ Like & Add to Cart ---------------------------------------- */}
            <div className="top-2 right-2 z-20 absolute flex gap-2 bg-neutral-200/30 group-hover:bg-white shadow shadow-slate-300/70 px-2 py-1 rounded-sm text-white/80 group-hover:text-slate-700 text-lg transition-all">
                <FiHeart className="hover:fill-red-300 active:fill-red-600 hover:scale-125 active:scale-100 transition-all" />
                <FiShoppingCart className="hover:fill-yellow-200 active:fill-amber-400 hover:scale-120 active:scale-100 transition-all" />
            </div>

            {/* ------------------------------------------Images ------------------------------------------ */}
            <Image alt="" src={image} width={400} height={400} className="shadow-md group-hover:shadow-2xs rounded-sm max-h-64 object-cover aspect-square group-hover:scale-105 transition-all" />
            {/* ------------------------------------------Details ------------------------------------------ */}
            <div className="flex flex-col gap-1.5 px-3 py-2">
                <p className="font-sub font-medium text-neutral-800 text-sm leading-tight">{name}</p>
                {!!stars && <div className="flex items-center min-h-4">
                    {Array.from({ length: stars }).map((_, index) => (<div key={index} className="w-fit"><StarSvg className="fill-amber-400" /></div>))}
                    {!!rating && <p className="ml-1 text-neutral-600 text-xs">Ratings <span className="font-semibold tracking-wide">({rating})</span></p>}
                </div>}
                <div>
                    <div className="flex items-baseline pt-1 w-full font-sub font-black text-lg line-clamp-2 leading-tight tracking-wide">&#8377; {sellingPrice} <span className="ml-1 text-neutral-600 text-sm line-through tracking-wide"> &#8377; {actualPrice} </span> </div>
                </div>
            </div>
            {/* ----------------------------------- AddToCart --------------------------------------------- */}
            <button onClick={() => window.location.href = `/products/${data.name}`} className={`bg-indigo-700 py-1.5 border-2 hover:scale-105 active:scale-100 transition-all  hover:uppercase border-neutral-100 rounded-sm w-full font-semibold text-blue-100 text-center `}>
                View Detail
            </button>
        </div>
    )
}
export default ProductCart