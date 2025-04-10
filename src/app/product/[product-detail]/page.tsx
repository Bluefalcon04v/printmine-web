'use client'
import { Category1, Category2, Category3, Category4 } from '@public/images'
import ProductDetail from './components/productDetail'
import React, { useState } from 'react'
import { StarSvg } from '@public/icons'
import Image from 'next/image'
import ProductFeatures from './components/productFeatures'
import Footer from '../../../components/footer'
// import DynamicCarousel from '../../../components/homePage/carousel'
// import { LISTING_DATA } from '../../all-products/page'
// import ProductCart, { IProductData } from '../../../components/homePage/productCart'
import Reviews from '../../../components/homePage/reviews'

const Page = () => {
  const [mainImage, setMainImage] = useState(Category1)
  const handleImageSelect = (image: string) => {
    setMainImage(image);
  };

  const IMAGEDATA = [Category1, Category2, Category3, Category4];

  return (
    <>
      <div className='mx-auto pt-2 w-10/12'>
        <div className='gap-4 grid grid-cols-2'>
          {/* product images */}
          <div className='flex bg-neutral-50 shadow border border-neutral-100 rounded-sm w-full'>
            {/* Select image */}
            <div className='flex flex-col gap-2 my-2 w-3/12 max-h-[400px]'>
              {IMAGEDATA.map((image, index) => (
                <Image key={index} src={image} alt={`image ${index + 1}`} height={200} width={200}
                  className={`px-2 w-full max-h-[120px] max-w-[110px] h-full rounded-sm object-cover aspect-square hover:scale-110 transition-all cursor-pointer ${mainImage === image ? 'border border-neutral-300 p-2 rounded-xs ' : 'opacity-60'}`}
                  onClick={() => handleImageSelect(image)}
                />
              ))}
            </div>

            {/* Main image */}
            <div className='relative w-full h-full'>
              <Image src={mainImage} alt='main image' height={400} width={400} className='py-2 pr-2 w-full max-h-[480px] object-cover' />
              <div className='top-1 right-0 absolute flex gap-1 bg-red-500 shadow-md px-4 py-1 border border-white rounded-full font-sub font-semibold text-white text-sm capitalize'>
                <StarSvg className='!stroke-white' />
                <p>best seller</p>
              </div>
            </div>
          </div>

          {/* product details */}
          <ProductDetail />

        </div>
        {/* Product Features */}
        <ProductFeatures />
        {/* carousel */}
        <div>
          <p className='py-4 pt-16 font-main font-semibold text-center'>Corporate Gift Collection</p>
          {/* <DynamicCarousel
            data={LISTING_DATA}
            breakpoints={5}
            card={(LISTING_DATA: IProductData) => (
              <ProductCart data={LISTING_DATA} />
            )}
          /> */}
        </div>
          <Reviews />
      </div>
      <Footer />
    </>
  )
}

export default Page