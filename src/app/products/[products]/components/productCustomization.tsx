'use client'
import React, { useState } from 'react'

const ProductCustomization = () => {
    const [selectShape, setSelectShape] = useState('Circle')
    const [selectQuantity, setSelectQuantity] = useState('10')

    return (
        <div className='flex flex-col gap-4'>
            {/* select shape */}
            <div className='flex flex-col gap-1.5'>
                <div className='flex gap-1 font-semibold text-xs'>
                    <p>Select The Shape :</p>
                    <p className='font-semibold text-blue-500'>{selectShape}</p>
                </div>
                <div className='flex gap-2'>
                    {['Circle', 'Square', 'Logo Cutout'].map((shape, i) => (
                        <button className={`px-2 border border-neutral-200 text-xs hover:font-semibold py-0.5 cursor-pointer active:bg-black/20 active:scale-95 hover:scale-110 transition-all rounded-sm flex place-content-center place-items-center ${shape === selectShape ? 'bg-black/10 text-black font-semibold shadow-sm ' : ''}`} onClick={() => setSelectShape(shape)} key={i}> {shape} </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-1.5'>
                <div className='flex gap-1 font-semibold text-xs'>
                    <p>Select The Quantity :</p>
                    <p className='font-semibold text-blue-500'>{selectQuantity} Pieces</p>
                </div>
                <div className='flex gap-2'>
                    {['10', '20', '30', '40', '50', '60'].map((quantity, i) => (
                        <button className={`px-2 border border-neutral-200 text-xs hover:font-semibold py-0.5 cursor-pointer active:bg-black/20 active:scale-95 hover:scale-110 transition-all rounded-sm flex place-content-center place-items-center ${quantity === selectQuantity ? 'bg-black/10 text-black font-semibold shadow-sm ' : ''}`} onClick={() => setSelectQuantity(quantity)} key={i}> {quantity} Pieces</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCustomization