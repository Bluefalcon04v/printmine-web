"use client";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

export default function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  // const [price, setPrice] = useState(0);

  // const handlePriceChange = (e) => {
  //   setPrice(Number(e.target.value));
  // };

  return (
    <>
      {/* Filter Button */}
      <button
        className="flex items-center gap-2 p-2 border rounded"
        onClick={() => setIsOpen(true)}
      >
        <FiFilter /> Filter
      </button>

      {isOpen && (
        <div
          className="z-50 fixed inset-0 bg-opacity-0 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="top-0 left-0 fixed bg-white shadow-lg p-6 w-80 h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="top-4 right-4 absolute text-xl" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2 className="my-4 font-semibold text-lg">Filter</h2>
            
            {/* Availability Filters */}
            <div className="mb-6">
              <h3 className="mb-2 font-semibold text-md">Availability</h3>
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
              <h3 className="mb-2 font-semibold text-md">Price</h3>
              {/* <input
                type="range"
                min="0"
                max="91200"
                value={price}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p className="mt-2 text-sm">
                Price: <strong>Rs. {price}</strong>
              </p> */}
            </div>
            
            {/* Apply Filter Button */}
            <button
              className="bg-black mt-4 py-2 rounded w-full text-white"
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
