import { Founder } from "@public/images";
import Image from "next/image";
import React from "react";

const MeetFounder = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">Follow to stay updated!</h2>
        <p className="text-gray-400  italic">
          Share your gift story with us by tagging us on instagram
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 ">
        <div className=" place-content-center place-items-center ">
          <Image
            src={Founder}
            alt="Image next to Name"
            width={460}
            height={450}
            className="rounded-3xl duration-300 ease-in-out hover:scale-105"
            draggable={false}
          />
        </div>

        <div className="place-content-center w-10/12 ">
          <h2 className=" text-4xl font-semibold">
            John Doe – Co-founder of Amy Company
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed ut purus at sapien malesuada fermentum. Curabitur
            consequat, neque nec fermentum pharetra, lacus nisi dignissim erat,
            vel suscipit elit purus in velit.
          </p>
          <p>
            Vivamus tristique, justo nec consectetur posuere, lorem sapien
            rhoncus tortor, ac tincidunt lacus erat at lacus. Ut ultricies
            euismod purus, eget accumsan nisi gravida non. In euismod velit
            vitae odio tincidunt, nec tempus elit pharetra.
          </p>

          <h2 className="text-2xl mt-3 font-semibold text-blue-900">"Our vision is to revolutionize the way businesses interact with technology."</h2>
        </div>
      </div>
    </div>
  );
};

export default MeetFounder;
