import { Founder } from "@public/images";
import Image from "next/image";
import React from "react";

const MeetFounder = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">Follow to stay updated!</h2>
        <p className="text-gray-400 italic">
          Share your gift story with us by tagging us on instagram
        </p>
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-7">
        <div className="place-content-center place-items-center">
          <Image
            src={Founder}
            alt="Image next to Name"
            width={460}
            height={450}
            className="rounded-3xl hover:scale-105 duration-300 ease-in-out"
            draggable={false}
          />
        </div>

        <div className="place-content-center max-lg:mt-2 w-10/12 max-lg:w-full">
          <h2 className="font-semibold max-md:text-2xl text-4xl text-pretty">
            Shubham – Co-founder of Thofe Ka Theka
          </h2>
          <p className="my-4 text-base capitalize">
            With people giving and receiving generic gifts. the gift-giving gesture has become somewhat monotonous. We, at Tohfe ka theka aim to redefine this gifting landscape with a wide range of personalized, premium and delightful gift options, limited edition specials and beyond.
            Our goal is to make the gifting experience unforgettable for both the person giving the gift and the person receiving it.
          </p>

          <h2 className="mt-3 font-semibold text-blue-900 text-2xl">Our vision is to revolutionize the way businesses interact with technology.</h2>
        </div>
      </div>
    </div>
  );
};

export default MeetFounder;
