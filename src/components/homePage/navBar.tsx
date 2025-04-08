"use client";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../../../public/images";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const groupedNav = [
  {
    label: "Writing",
    items: [
      { name: "Plastic Pen", link: "/plastic-pen" },
      { name: "Metal Pen", link: "/metal-pen" },
      { name: "Notebook", link: "/notebook" },
    ],
  },
  {
    label: "Office & Tech",
    items: [
      { name: "Laptop Sleeve", link: "/laptop-sleeve" },
      { name: "Laptop Bag", link: "/laptop-bag" },
      { name: "Power Bank", link: "/power-bank" },
      { name: "Mobile Stand", link: "/mobile-stand" },
    ],
  },
  {
    label: "Accessories",
    items: [
      { name: "Pen Keychain", link: "/pen-keychain" },
      { name: "Keychain", link: "/keychain" },
      { name: "Bottles", link: "/bottles" },
    ],
  },
  {
    label: "Others",
    items: [
      { name: "Clock", link: "/clock" },
      { name: "Packing Materials", link: "/packing-materials" },
      { name: "Novelty Items", link: "/novelty-items" },
      { name: "Gift Set", link: "/gift-set" },
    ],
  },
];

const NavBar = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top-0 z-50 fixed flex justify-center bg-white shadow py-1 border-b w-full">
      <div className="flex justify-between items-center w-11/12">
        {/* Logo */}
        <Image
          alt="logo"
          src={Logo}
          width={200}
          height={200}
          className="w-20 h-16 object-fill aspect-square cursor-pointer"
          onClick={() => router.push("/")}
        />

        {/* Nav Dropdowns */}
        <div className="relative flex gap-4 text-sm">
          {groupedNav.map((elem, i) => (
            <div
              key={i}
              className={`group relative cursor-pointer`}
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                className={classNames(
                  "flex items-center h-8 font-medium text-center capitalize cursor-pointer transition-all ease-in-out",
                  openIndex === i && "text-neutral-500"
                )}
              >
                {elem.label}
              </button>

              {/* Dropdown List */}
              {openIndex === i && (
                <div className="modal-top-st left-0 z-50 absolute flex flex-col bg-white shadow-md p-2 border rounded-md min-w-max">
                  {elem.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.link}
                      className="px-2 py-1 overflow-hidden text-neutral-800 hover:text-blue-500 active:text-blue-400 text-sm whitespace-nowrap transition-all ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-sm">
          <FiSearch className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
