"use client";
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
 function FeatureDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Featured");
  
    const options = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];
  
    return (
      <div className="relative">
        <button
          className="p-2 border rounded flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected} <FaChevronDown />
        </button>
        {isOpen && (
          <ul className="absolute bg-white border rounded shadow-md mt-2 w-40">
            {options.map((option) => (
              <li
                key={option}
                className="p-2 hover:bg-gray-100 cursor-pointer"
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