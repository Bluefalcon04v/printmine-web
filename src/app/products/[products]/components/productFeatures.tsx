// 
import React from 'react'
import { BadgesVideo, MakingVideo, PackageVideo, UsageVideo, VarietyVideo } from '../../../../../public/video'

const ProductFeatures = () => {
  const PRODUCT_FEATURES_DATA = [
    {
      title: 'Variations',
      video: VarietyVideo
    },
    {
      title: 'Usage',
      video: UsageVideo
    },
    {
      title: 'Packaging',
      video: PackageVideo
    },
    {
      title: 'Making',
      video: MakingVideo
    },
    {
      title: 'Badges',
      video: BadgesVideo
    },
  ]

  return (
    <div className='pt-12'>
      <p className='py-4 font-main font-semibold text-center'>Features We Provide</p>
      <div className='gap-2 grid grid-cols-5 h-full'>
        {PRODUCT_FEATURES_DATA.map((feature) => (
          <div key={feature.title} className='relative border-2 rounded-md'>
            <video autoPlay muted loop width="400" height="400" className='rounded-sm aspect-video'>
              <source src={feature.video} type="video/mp4" />
            </video>
            <div className='bottom-0 absolute flex justify-center items-center bg-gradient-to-t from-black to-transparent w-full h-10'>
              <p className='bottom-0 font-sub font-light text-white text-base'>{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFeatures
