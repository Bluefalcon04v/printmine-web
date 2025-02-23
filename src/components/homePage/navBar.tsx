"use client"

import { Logo } from '../../../public/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const NAV_ITEMS = [
    { name: "key chains", link: "/products/key-chains" },
    { name: "magnetic badge", link: "/products/magnetic-badge" },
    { name: "metal pen", link: "/products/metal-pen" },
    { name: "mobile stand", link: "/products/mobile-stand" },
    { name: "corporate gifts", link: "/products/corporate-gifts" },
  ];

  const router = useRouter()

  return (
    <div className='top-0 z-50 fixed flex justify-center bg-white shadow py-1 border-b w-full'>
      <div className='flex justify-between place-content-center place-items-center w-10/12'>
        <Image alt='logo' src={Logo} width={200} height={200} className='w-20 h-16 object-fill aspect-square cursor-pointer' onClick={()=>router.push("/")} />
        <div className='flex gap-4 text-xs'>
          {NAV_ITEMS.map((val, i) => (
            <Link href={val.link} key={i} className='flex gap-1 px-1 hover:text-neutral-600 capitalize hover:scale-105 active:scale-95 transition-all cursor-pointer'>
              {val.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-4 text-xs'>
          <p>Search</p>
          <p>Like</p>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar