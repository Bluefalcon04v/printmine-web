"use client";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "../../public/images";
import { groupedNav } from "../constants/navbar";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="lg:hidden top-0 left-0 z-50 fixed shadow border-b w-full">
            <div className="-z-10 absolute backdrop-blur-2xl w-full h-full" />
            <div className="flex justify-between items-center bg-white px-4 py-3">
                <Image
                    alt="logo"
                    src={Logo}
                    width={200}
                    height={200}
                    className="w-16 h-14 object-fill aspect-square cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <div className="flex items-center gap-4">
                    <FiSearch className="cursor-pointer" />
                    <FiHeart className="cursor-pointer" />
                    <FiShoppingCart className="cursor-pointer" />
                    <button onClick={toggleMenu}>
                        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="float-right bg-white px-4 pb-4 w-2/3 h-lvh">
                    {groupedNav.map((group, idx) => (
                        <div key={idx}>
                            {/* <p className="mb-1 font-semibold text-gray-800">{group.label}</p> */}
                            {group.items.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
                                    className="block py-1 text-gray-600 hover:text-blue-500 text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileNav;
