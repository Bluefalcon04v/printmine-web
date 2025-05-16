"use client";
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
 function FeatureDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Featured");
  
    const options = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];
  
    return (
      <div className="z-30 relative bg-white">
        <button
          className="flex items-center gap-2 p-2 border rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected} <FaChevronDown />
        </button>
        {isOpen && (
          <ul className="z-20 absolute bg-white shadow-md mt-2 border rounded w-40">
            {options.map((option) => (
              <li
                key={option}
                className="hover:bg-gray-100 p-2 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  export default FeatureDropdown;