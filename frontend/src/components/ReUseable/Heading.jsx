import React from "react";

const Heading = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className="inline-flex gap-2 items-center mb-3">
        <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></div>
        <h2 className="text-gray-500">
          {text1} <span className="text-[#C586A5] font-medium">{text2}</span>{" "}
        </h2>
        <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></div>
      </div>
      <p className="w-4/5 sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        {text3}
      </p>
    </>
  );
};

export default Heading;
