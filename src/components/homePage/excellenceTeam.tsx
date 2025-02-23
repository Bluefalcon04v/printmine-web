import React from "react";

const ExcellenceTeam = () => {
  return (
    <div className="mt-20">
      {" "}
      <div className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/teamImage.png')" }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 w-1/2 px-6">
          <h2 className="text-4xl font-bold text-black mb-4">
            Reason Behind the Success of This Company
          </h2>
          <p className="text-lg text-black/90">
            Our team's dedication, innovative mindset, and strong leadership
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
