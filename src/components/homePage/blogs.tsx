import { ContinueReadingIcon } from "@public/icons";
import { BlogImage } from "@public/images";
import Image from "next/image";
import React from "react";

const blogsData = [
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customized gifts improve Client Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-main font-semibold">Latest From Blog</h2>
        <p className="font-sub text-gray-600 leading-none">
          The freshest and most exciting news
        </p>
      </div>

      <div className="gap-6 grid grid-cols-4 mt-10">
        {blogsData.slice(0, 4).map((datum, index) => (
          <div key={index} className="md:block gap-2 hover:shadow-md active:shadow-lg border rounded-md hover:scale-105 active:scale-100 transition-all cursor-pointer">
            <div className="flex justify-center items-center bg-white mx-auto rounded-lg">
                <Image
                  alt="image"
                  src={datum.image}
                  width={338}
                  height={251}
                  quality={100}
                  loading="lazy"
                  draggable={false}
                  className="p-2"
                />
            </div>

            <div className="flex flex-col place-content-center gap-1 px-8 py-6">
              <h3 className="font-semibold text-gray-600 text-lg leading-normal">
                {datum.heading}
              </h3>
              <p className="text-neutral-600 leading-snug">
                {datum.cont}
              </p>
              <div className="flex justify-between items-center mt-4 w-full">
              <div className="flex gap-2">
                <div className="bg-neutral-300 rounded-full w-10 h-10"/>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-500 text-sm">Rohan Das</p>
                  <p className="font-semibold text-neutral-400 text-xs tracking-wider">11/12/2025</p>
                </div>
              </div>
                <p className="flex items-center gap-2 text-blue-600 hover:text-blue-400 transition-all">
                  Continue Reading <ContinueReadingIcon />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;


