import { useState } from "react";

export default function CartDrawer({ isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="p-4 text-lg font-semibold ">Your Cart</h2>

        {/* Quantity Selector */}
        <div className="p-4">
          <p>Product Name</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              className="px-2 py-1 border"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button className="px-2 py-1 border" onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
