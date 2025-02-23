import { ContinueReadingIcon } from "@public/icons";
import { BlogImage } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <h2 className="font-semibold text-4xl">LATEST FROM BLOG</h2>
        <p className="text-gray-400  italic">
        The freshest and most exciting news

        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3 lg:gap-10 mt-12">
        {blogsData.slice(0, 3).map((datum, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 md:block">
            <div className="col-span-4 z-40 relative bg-white  border border-[#E7E7E7] rounded-lg mx-auto h-[8rem] md:h-[15rem] lg:h-[15rem] xl:h-[20rem] flex items-center justify-center">
              <div className="w-10/12 xl:w-full flex justify-center">
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

            <div className="col-span-8 flex flex-col place-content-center gap-2 md:gap-5 md:mt-4 ">
              <h3 className="text-[#16192C] text-xs md:text-sm lg:text-base xl:text-lg font-semibold z-40 md:h-[3rem] 2xl:h-[1.5rem]">
                {datum.heading}
              </h3>
              <p className="text-[#425466]">
                By <span className="text-black/80">Atiq Ansari</span> on{" "}
                <span className="text-black/80">February 10, 2025</span>
              </p>
              <p className="text-[#425466] md:h-[4rem] text-xs md:text-sm lg:text-base">
                {datum.cont}
              </p>
              <Link href="#">
                <p className="text-[#2D68FE] flex items-center gap-2 text-xs md:text-sm lg:text-base">
                  Continue Reading <ContinueReadingIcon />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 flex justify-end cursor-pointer">View All</p>
    </div>
  );
};

export default Blogs;
