import React from "react";
const StarSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 21"
      fill="none"
      className={`${className}`}
    >
      <path
        d="M11.0008 16.75L4.82881 19.995L6.00781 13.122L1.00781 8.25495L7.90781 7.25495L10.9938 1.00195L14.0798 7.25495L20.9798 8.25495L15.9798 13.122L17.1588 19.995L11.0008 16.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarSvg;
