"use client";

import { StarSvg } from "@public/icons";
import React from "react";
import DynamicCarousel from "./carousel";

const customerReviews = [
  {
    name: "Aarav Mehta",
    rating: 5,
    review:
      "Absolutely loved the product! The quality is top-notch, and the delivery was super fast. Highly recommended!",
  },
  {
    name: "Sanya Kapoor",
    rating: 4,
    review:
      "Great experience! The product is as described, though the packaging could have been better.",
  },
  {
    name: "Rohan Verma",
    rating: 3,
    review:
      "The product is decent, but it took longer than expected to arrive. Could improve on delivery time.",
  },
  {
    name: "Ishita Sharma",
    rating: 5,
    review:
      "Excellent service and amazing product quality. Will definitely order again!",
  },
  {
    name: "Kunal Joshi",
    rating: 2,
    review:
      "Not satisfied with the quality. Expected something better for the price.",
  },
  {
    name: "Priya Desai",
    rating: 4,
    review:
      "Loved the product, but the size was slightly different from what I expected. Still, a great purchase overall!",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    review:
      "Fantastic experience! The product exceeded my expectations. Will recommend it to my friends.",
  },
  {
    name: "Neha Tandon",
    rating: 3,
    review: "The product is okay. Nothing extraordinary, but not bad either.",
  },
  {
    name: "Aditya Choudhary",
    rating: 4,
    review:
      "Good quality and worth the price. Customer service was also responsive.",
  },
  {
    name: "Megha Arora",
    rating: 5,
    review:
      "Best purchase ever! The quality, design, and service were all excellent.",
  },
];

const Reviews = () => {
  return (
    <div className="mt-10">
      <h3 className=" mb-10 font-semibold text-4xl text-center">Reviews </h3>

      <div className="">
        <DynamicCarousel
          data={customerReviews}
          breakpoints={4}
          card={(datum: any) => (
            <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/images/reviewKeyChain.png')" }}
              ></div>
              <div className="relative z-10">
                <span className="text-5xl text-gray-300">“</span>
                <p className="text-lg text-gray-700">{datum.review}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarSvg
                      key={index}
                      className={`w-6 h-6 ${"text-yellow-500 fill-yellow-500"}`}
                    />
                  ))}
                </div>

                {/* Reviewer Info */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    {datum.name.toUpperCase()}
                  </h3>
                  {/* <p className="text-sm text-gray-500">
                  {role}, {company}
                </p> */}
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Reviews;
