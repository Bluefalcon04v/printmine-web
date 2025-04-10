"use client";
import { FaChevronDown, FaChevronRight, FaHeart } from "react-icons/fa";
import { Product1Video } from "../../../public/video";
import { BlogImage, PenImage, TeamImage } from "../../../public/images";
import DynamicCarousel from "./carousel";
import Image from "next/image";
import React, { useState } from "react";
import { MessageCircleMore } from "../../../public/icons";
import { FiMessageCircle, FiSend } from "react-icons/fi";

const customerReviews = [
  {
    name: "Aarav Mehta",
    avatar: TeamImage,
    like: "23k",
    comments: 22,
    shares: 820,
    review:
      "Absolutely loved the product! The quality is top-notch, and the delivery was super fast. Highly recommended!",
  },
  {
    name: "Sanya Kapoor",
    avatar: TeamImage,
    like: "30k",
    comments: 232,
    shares: 120,
    review:
      "The product is decent. ",
  },
  {
    name: "Rohan Verma",
    avatar: TeamImage,
    like: "4k",
    comments: 312,
    shares: 180,
    review:
      "Great experience! The product is as described, though the packaging could have been better.",
  },
  {
    name: "Ishita Sharma",
    avatar: TeamImage,
    like: "5k",
    comments: 520,
    shares: 220,
    review:
      "Excellent service and amazing product quality!",
  },
  {
    name: "Ishita Sharma",
    avatar: TeamImage,
    like: "5k",
    comments: 802,
    shares: 430,
    review:
      "Excellent service and amazing product quality!. Will definitely order again",
  },
];

const Reviews = () => {
  return (
    <div className="mt-10">
      <h3 className="mb-10 font-main font-semibold text-4xl text-center">Reviews </h3>

      <div className="">
        <DynamicCarousel
          data={customerReviews}
          breakpoints={4}
          card={(datum) => (
            <InstagramCard data={datum} />
          )}
        />
      </div>
    </div>
  );
};

export default Reviews;



const InstagramCard = ({ data }: { data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongReview = data.review.length > 60;

  return (
    <div className="relative shadow border-2 rounded-lg w-full">
      {/* --------------------- Top Bar ------------------------ */}
      <div className="top-3 absolute flex justify-between items-center px-2 w-full">
        <div className="flex items-center gap-1 font-semibold text-white">Reels <FaChevronDown /></div>
        <div className="flex items-center gap-0.5 bg-white/50 shadow-md p-1 rounded-full text-white">
          <div className="relative shadow rounded-full">
            <Image alt="image" src={BlogImage} width={100} height={100} className="rounded-full w-5 h-5" />
            <FaHeart className="top-0 -right-0.5 absolute shadow text-red-500 text-xs" />
          </div>
          <div className="relative shadow rounded-full">
            <Image alt="image" src={TeamImage} width={100} height={100} className="rounded-full w-5 h-5" />
            <FaHeart className="top-0 -right-0.5 absolute shadow text-red-500 text-xs" />
          </div>
          <div className="relative">
            <Image alt="image" src={PenImage} width={100} height={100} className="rounded-full w-5 h-5" />
            <MessageCircleMore className="top-0 -right-1 absolute text-black" />
          </div>
          <FaChevronRight />
        </div>
      </div>
      {/* --------------------- Video  ------------------------ */}
      <video autoPlay muted loop width="100%" height="100%" className='rounded-md aspect-auto'>
        <source src={Product1Video} type="video/mp4" />
      </video>
      {/* --------------------- Right Bar ------------------------ */}
      <div className="right-3 bottom-20 absolute flex flex-col gap-3">
        <div className="flex flex-col items-center gap-0.5">
          <FaHeart className="w-fit text-red-500 text-2xl" />
          <p className="font-semibold text-white text-sm">{data.like}</p>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <FiMessageCircle className="w-fit text-white text-2xl" />
          <p className="font-semibold text-white text-sm">{data.comments}</p>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <FiSend className="w-fit text-white text-2xl" />
          <p className="font-semibold text-white text-sm">{data.shares}</p>
        </div>
      </div>
      {/* ---------------------- Bottom Bar ------------------------- */}
      <div className="bottom-0 absolute flex bg-gradient-to-t from-black/30 to-transparent px-2 py-1 pt-10 pb-3 w-full font-semibold text-white">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Image alt="image" src={TeamImage} width={100} height={100} className="rounded-full w-7 h-7" />
            <p>{data.name}</p>
          </div>
          {/* <p className="text-xs line-clamp-2 text-pretty">{data.review} <span>see more...</span></p> */}
          <p className="text-xs text-pretty">
            {isExpanded ? data.review : `${data.review.slice(0, 60)}...`}
            {isLongReview && (
              <button
                className="ml-1 text-neutral-300 cursor-pointer"
                onClick={handleToggle}
              >
                {isExpanded ? ' See less' : ' See more'}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}