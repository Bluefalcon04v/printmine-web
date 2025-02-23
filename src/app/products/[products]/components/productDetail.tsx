import React from 'react'
import StarSvg from '../../../../../public/svg/starSvg'
import FireSvg from '../../../../../public/svg/fireSvg'

const ProductDetail = () => {
    return (
        <div className='flex flex-col gap-2 p-3 w-full'>
            {/* heading */}
            <p className="font-sub font-semibold text-xl text-balance leading-tight">Premium Metal Keychain | Best for Corporate Gifting | PrintMine.in</p>
            {/* stars */}
            <div className='flex place-items-center'>{[...Array(4)].map((i, index) => (
                <StarSvg key={index} className='fill-amber-300 stroke-1 stroke-amber-700' />
            ))}
                <StarSvg className='stroke-1 stroke-amber-700' />
                <p className='ml-2 text-neutral-500 text-xs'>reviews (195)</p>
            </div>
            {/* price tag */}
            <div className='flex flex-col gap-1 my-2 font-medium'>
                <div className='flex place-items-center bg-[#cc0c39] px-2 py-1 rounded-sm w-fit font-semibold text-white text-xs 2xl'>Limited time deal</div>
                <div className='flex gap-2'>
                    <p className='text-neutral-400 line-through'>Rs. 1,238.00</p>
                    <p>Rs. 999</p>
                    <div className='flex place-items-center bg-orange-400 px-2 py-0.5 rounded-sm font-semibold text-white text-xs 2xl'>Save 19%</div>
                </div>
            </div>
            {/* coupons */}
            <div className='bg-green-100 px-3 py-0.5 border border-green-500 border-dashed rounded-md w-fit font-semibold text-green-600/90 text-sm'>
                ⭐ 12% OFF | Coupon Code - FESTWEEK12
            </div>
            {/* last hour orders */}
            <div className='flex place-items-center gap-1 font-medium text-neutral-800 text-xs'><span className='animate-pulse'><FireSvg /></span> 18 orders in last 5 hours </div>
        </div>
    )
}

export default ProductDetail