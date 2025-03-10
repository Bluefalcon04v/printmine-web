import Image from 'next/image'
import React from 'react'
import { StarSvg } from '../../../public/icons'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoCard = ({ data }: any) => {
    const { image, name, sellingPrice, actualPrice, status, video, starts } = data
    return <div className={`group relative border rounded-sm w-full hover:scale-105 transition-all cursor-pointer`}>
        <div className="absolute bg-black opacity-15 group-hover:opacity-0 w-full h-full transition-opacity" />
        {/* ------------------ Badges ------------------- */}
        {status === 1 && <div className="top-0 absolute flex bg-red-500 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
            Best Seller
        </div>}
        {starts > 0 && <div className="top-1 right-1 absolute flex items-center bg-white/30 shadow shadow-black/20 backdrop-blur-3xl p-1 rounded-md w-fit font-bold text-xs group-hover:scale-105 transition-all"> {starts} <StarSvg className="fill-yellow-400 stroke-yellow-300 ml-1" /></div>}
        {status === 2 && <div className="top-0 absolute flex bg-blue-500 m-1 px-3 py-1.5 rounded-sm w-fit font-sub text-white !text-base text-center leading-none group-hover:scale-125 transition-all">
            New Launch
        </div>}
        {/* ------------------- Video ------------------- */}
        <video autoPlay muted loop width="300px" height="300px" className='rounded-xs aspect-auto'>
            <source src={video} type="video/mp4" />
        </video>

        {/* ------------------ Details ------------------- */}
        <div className="bottom-0 absolute p-2 w-full group-hover:scale-105">
            <div className={`group-hover:bg-white flex gap-1 bg-white/30 backdrop-blur-xl group-hover:backdrop-blur-sm border border-white rounded-sm transition-all `}>
                <Image alt="image" src={image} width={80} height={80} className="shadow rounded-l-xs max-w-28 max-h-28 object-cover aspect-square" />
                <div className="flex flex-col items-center my-auto px-0.5 py-1 w-full h-full text-black text-start">
                    <p className="w-full font-sub font-semibold text-xs text-start line-clamp-2 leading-tight">{name}</p>
                    <div className="pt-1 w-full font-sub font-semibold text-md line-clamp-2 leading-tight">&#8377; {sellingPrice} <span className="ml-2 text-xs line-through"> &#8377; {actualPrice} </span> </div>
                </div>
            </div>
        </div>
    </div>
}

export default VideoCard