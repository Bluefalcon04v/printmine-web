"use client";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

export default function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [price, setPrice] = useState(0);

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <>
      {/* Filter Button */}
      <button
        className="p-2 border rounded flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <FiFilter /> Filter
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-0 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-80 h-full p-6 shadow-lg fixed left-0 top-0 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="text-xl absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2 className="text-lg font-semibold my-4">Filter</h2>
            
            {/* Availability Filters */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2">Availability</h3>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                />
                In Stock
              </label>
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
                />
                Out Of Stock
              </label>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="91200"
                value={price}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p className="text-sm mt-2">
                Price: <strong>Rs. {price}</strong>
              </p>
            </div>
            
            {/* Apply Filter Button */}
            <button
              className="w-full bg-black text-white py-2 rounded mt-4"
              onClick={() => setIsOpen(false)}
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
