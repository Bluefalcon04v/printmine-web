import { Category1, Category2, Category3, Category4, Category5, Category6 } from '@public/images'
import Image from 'next/image'
import React from 'react'

const CategoryNavBar = () => {

    const CATEGORY_DATA = [
        {
            image: Category1,
            title: "Hair Serum "
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
            title: "Key Chain"
        },

    ]
    
    return (
        <div className='flex place-content-center mx-auto w-10/12'>
            <div className='flex gap-2 mb-1.5'>
                {CATEGORY_DATA.map((data) => (
                    <div key={data.title} className='group relative w-32 h-40 cursor-pointer'>
                        <Image src={data.image} alt={data.title} width={500} height={200} className='rounded-sm w-full h-full object-cover' />
                        <div className='top-0 left-0 absolute bg-black opacity-10 group-hover:opacity-40 rounded-sm w-full h-full transition-all' />
                        <div className='bottom-8 z-20 relative place-content-center place-items-center'>
                            <p className='text-shadow-md font-semibold text-white group-hover:text-white text-sm group-hover:scale-115 transition-all'>
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