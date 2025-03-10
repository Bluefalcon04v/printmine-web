import { ContinueReadingIcon } from "@public/icons";
import { BlogImage } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product1Video } from "../../../public/video";
import { FaChevronDown } from "react-icons/fa";

const blogsData = [
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
    cont: "Corporate gifting have evolved over years, with business seeking unique and meaning full ways to express appreciation",
  },
  {
    image: BlogImage,
    heading: "How Customised gifts impove CLient Retention",
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

      <div className="grid grid-cols-5 mt-10">
        {/* {blogsData.slice(0, 3).map((datum, index) => (
          <div key={index} className="md:block gap-2 grid grid-cols-12">
            <div className="z-40 relative flex justify-center items-center col-span-4 bg-white mx-auto border border-[#E7E7E7] rounded-lg h-[8rem] md:h-[15rem] lg:h-[15rem] xl:h-[20rem]">
              <div className="flex justify-center w-10/12 xl:w-full">
                <Image
                  alt="image"
                  src={datum.image}
                  width={338}
                  height={251}
                  quality={100}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>

            <div className="flex flex-col place-content-center gap-2 md:gap-5 col-span-8 md:mt-4">
              <h3 className="z-40 md:h-[3rem] 2xl:h-[1.5rem] font-semibold text-[#16192C] text-xs md:text-sm lg:text-base xl:text-lg">
                {datum.heading}
              </h3>
              <p className="text-[#425466]">
                By <span className="text-black/80">Atiq Ansari</span> on{" "}
                <span className="text-black/80">February 10, 2025</span>
              </p>
              <p className="md:h-[4rem] text-[#425466] text-xs md:text-sm lg:text-base">
                {datum.cont}
              </p>
              <Link href="#">
                <p className="flex items-center gap-2 text-[#2D68FE] text-xs md:text-sm lg:text-base">
                  Continue Reading <ContinueReadingIcon />
                </p>
              </Link>
            </div>
          </div>
        ))} */}

        <InstagramCard />
      </div>

      <p className="flex justify-end mt-4 cursor-pointer">View All</p>
    </div>
  );
};

export default Blogs;


const InstagramCard = () => {
  return (
    <div className="relative shadow border-2 rounded-lg w-full">
      <div className="top-2 left-3 absolute flex justify-between items-center w-[92%]">
      <div className="flex items-center gap-1 font-semibold text-white">Reels <FaChevronDown /></div>
      <div className="flex bg-white/20 rounded-full">
        <div className="bg-gray-400 rounded-full w-8 h-8"></div>
        <div className="bg-gray-400 rounded-full w-8 h-8"></div>
        <div className="bg-gray-400 rounded-full w-8 h-8"></div>
      </div>
      </div>
      <video autoPlay muted loop width="100%" height="100%" className='rounded-md aspect-auto'>
        <source src={Product1Video} type="video/mp4" />
      </video>

    </div>
  )
}