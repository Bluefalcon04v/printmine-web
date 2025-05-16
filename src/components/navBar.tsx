"use client";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { groupedNav } from "../constants/navbar";
import { useRouter } from "next/navigation";
import { Logo } from "@public/images";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

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
          {groupedNav.map((elem, i) => {
            const hasMultipleItems = elem.items && elem.items.length > 1;
            const singleItem =
              elem.items && elem.items.length === 1 ? elem.items[0] : null;

            return (
              <div
                key={i}
                className="group relative cursor-pointer"
                onMouseEnter={() => hasMultipleItems && setOpenIndex(i)}
                onMouseLeave={() => hasMultipleItems && setOpenIndex(null)}
              >
                {hasMultipleItems ? (
                  <>
                    <button
                      className={classNames(
                        "flex items-center h-8 font-medium text-center capitalize transition-all ease-in-out",
                        openIndex === i && "text-neutral-500"
                      )}
                    >
                      {elem.label}
                    </button>

                    {openIndex === i && (
                      <div
                        ref={dropdownRef}
                        className="modal-top-st left-0 z-50 absolute flex flex-col bg-white shadow-md p-2 border rounded-md min-w-max"
                      >
                        {elem.items.map((item, j) => (
                          <Link
                            key={j}
                            href={item.link}
                            className="px-2 py-1 text-neutral-800 hover:text-blue-500 text-sm whitespace-nowrap transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : singleItem ? (
                  <Link
                    href={singleItem.link}
                    className="flex items-center h-8 font-medium hover:text-blue-500 text-center capitalize transition-all ease-in-out"
                  >
                    {elem.label}
                  </Link>
                ) : null}
              </div>
            );
          })}
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
