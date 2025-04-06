"use client"
import { FiHeart, FiSearch, FiShoppingCart } from 'react-icons/fi';
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../../../public/images';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const groupedNav = [
  {
    label: "Writing",
    items: [
      { name: "Plastic Pen", link: "/products/plastic-pen" },
      { name: "Metal Pen", link: "/products/metal-pen" },
      { name: "Notebook", link: "/products/notebook" },
    ],
  },
  {
    label: "Office & Tech",
    items: [
      { name: "Laptop Sleeve", link: "/products/laptop-sleeve" },
      { name: "Laptop Bag", link: "/products/laptop-bag" },
      { name: "Power Bank", link: "/products/power-bank" },
      { name: "Mobile Stand", link: "/products/mobile-stand" },
    ],
  },
  {
    label: "Accessories",
    items: [
      { name: "Pen Keychain", link: "/products/pen-keychain" },
      { name: "Keychain", link: "/products/keychain" },
      { name: "Bottles", link: "/products/bottles" },
    ],
  },
  {
    label: "Others",
    items: [
      { name: "Clock", link: "/products/clock" },
      { name: "Packing Materials", link: "/products/packing-materials" },
      { name: "Novelty Items", link: "/products/novelty-items" },
      { name: "Gift Set", link: "/products/gift-set" },
    ],
  },
];

const NavBar = () => {

  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='top-0 z-50 fixed flex justify-center bg-white shadow py-1 border-b w-full'>
      <div className='flex justify-between items-center w-11/12'>

        {/* Logo */}
        <Image
          alt='logo'
          src={Logo}
          width={200}
          height={200}
          className='w-20 h-16 object-fill aspect-square cursor-pointer'
          onClick={() => router.push("/")}
        />

        {/* Nav Dropdowns */}
        <div ref={dropdownRef} className='relative flex gap-4 text-sm'>
          {groupedNav.map((elem, i) => (
            <div
              key={i}
              
              className={`group relative cursor-pointer`}
              onMouseEnter={() => setOpenIndex(i)}
              // onMouseLeave={() => setOpenIndex(null)}
            >
              <button className='font-medium hover:text-neutral-600 capitalize cursor-pointer'>
                {elem.label}
              </button>

              {/* Dropdown List */}
              {openIndex === i && (
                <div className='top-6 left-0 z-50 absolute flex flex-col bg-white shadow-md p-2 border rounded-md min-w-max'>
                  {elem.items.map((item, j) =>  (
                      <Link
                        key={j}
                        href={item.link}
                        className='px-2 py-1 overflow-hidden hover:text-blue-600 text-sm whitespace-nowrap'
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className='flex gap-4 text-sm'>
          <FiSearch className='cursor-pointer' />
          <FiHeart className='cursor-pointer' />
          <FiShoppingCart className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
