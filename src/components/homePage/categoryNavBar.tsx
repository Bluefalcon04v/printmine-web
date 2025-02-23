import React from 'react'
import { Category1, Category2, Category3, Category4, Category5, Category6 } from '../../../public/images'
import Image from 'next/image'

const CategoryNavBar = () => {
    const CATEGORYDATA = [
        {
            image: Category1,
            title: "hair Serum "
        },
        {
            image: Category2,
            title: " Coffee Glass"
        },
        {
            image: Category3,
            title: " Book Cover"
        },
        {
            image: Category4,
            title: "Diamond"
        },
        {
            image: Category5,
            title: "Perfume Bottle"
        },
        {
            image: Category6,
            title: "key chain"
        },

    ]
    return (
        <div className='flex place-content-center mx-auto w-10/12'>
            <div className='flex gap-2 mb-1.5'>
                {CATEGORYDATA.map((data, index) => (
                    <div key={index} className='group relative w-32 h-40 cursor-pointer'>
                        <Image src={data.image} alt={data.title} width={500} height={200} className='rounded-sm w-full h-full object-cover' />
                        <div className='top-0 left-0 absolute bg-black opacity-20 group-hover:opacity-50 rounded-sm w-full h-full transition-all' />
                        <div className='bottom-8 z-20 relative place-content-center place-items-center'>
                            <p className='group-hover:text-white text-shadow-md font-semibold text-white text-sm'>
                                {data.title}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryNavBar