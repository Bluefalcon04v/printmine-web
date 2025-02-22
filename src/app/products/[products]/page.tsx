import StarSvg from '../../../../public/svg/starSvg'
import { Category1 } from '../../../../public/image'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='gap-4 grid grid-cols-2 mx-auto w-10/12'>
      {/* product images */}
      <div className='flex bg-neutral-100 border border-neutral-200 w-full'>
        <div className='flex flex-col gap-2 my-2 w-3/12'>
          <Image src={Category1} alt='image' height={200} width={200} className='px-2 w-full h-full object-cover aspect-square hover:scale-110 transition-all cursor-pointer' />
          <Image src={Category1} alt='image' height={200} width={200} className='px-2 w-full h-full object-cover aspect-square hover:scale-110 transition-all cursor-pointer' />
          <Image src={Category1} alt='image' height={200} width={200} className='px-2 w-full h-full object-cover aspect-square hover:scale-110 transition-all cursor-pointer' />
        </div>
        <div className='relative w-full h-full'>
          <Image src={Category1} alt='image' height={400} width={400} className='py-2 pr-2 w-full' />
          <div className='top-1 right-0 absolute flex gap-1 bg-red-500 shadow-md px-4 py-1 border border-white rounded-full font-sub font-semibold text-white text-sm capitalize'><StarSvg className='!stroke-white' /> <p>best seller</p></div>
        </div>
      </div>

      {/* product details */}
      <div className='flex flex-col gap-2 bg-gray-100 p-3 w-full'>
        {/* heading */}
        <p className="font-sub font-semibold text-xl text-balance">Premium Metal Keychain | Best for Corporate Gifting | PrintMine.in</p>
        {/* stars */}
        <div className='flex place-items-center'>{[...Array(4)].map((i, index) => (
          <StarSvg key={index} className='fill-amber-300 stroke-1 stroke-amber-700' />
        ))}
        <StarSvg className='stroke-1 stroke-amber-700' />
        <p className='ml-2 text-neutral-500 text-xs'>reviews (195)</p>
        </div>
        {/* price tag */}
        <div className='flex gap-2 font-medium'>
          <p className='text-neutral-400 line-through'>Rs. 1,238.00</p>
          <p>Rs. 999</p>
          <div className='bg-orange-400 px-2 py-0.5 rounded-sm text-white text-xs 2xl'>Save 19%</div>
        </div>
        {/* coupons */}
        <div className='bg-green-100 px-4 py-1 border border-green-600 border-dashed rounded-md w-fit font-semibold text-green-600'>
        ⭐ 12% OFF | Coupon Code - FESTWEEK12
        </div>
      </div>
    </div>
  )
}

export default Page