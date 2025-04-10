import React from "react";

const ExcellenceTeam = () => {
  return (
    <div className="mt-20">
      {" "}
      <div className="relative flex justify-center items-center w-full h-[50vh] text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/teamImage.png')" }}
        ></div>

        {/* Overlay Content */}
        <div className="z-10 relative px-6 w-1/2">
          <h2 className="mb-4 font-bold text-black text-4xl">
            Reason Behind the Success of This Company
          </h2>
          <p className="text-black/90 text-lg">
            Our teams dedication, innovative mindset, and strong leadership
            have been the key drivers of our success. With a passion for
            excellence and customer satisfaction, we continue to grow and evolve
            in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceTeam;
