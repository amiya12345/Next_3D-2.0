import Image from "next/image";
import React from "react";

const TiltItem = ({ title, backgroundImg, des }) => {
  return (
    <div
      className="w-full"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-offset="0"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div className="max-w-full mx-auto">
        <div className="relative flex items-center justify-center w-full shadow-xl group transition-all duration-300 ease-linear hover:bg-slate-900">
          <Image
            className="group-hover:opacity-10 cursor-pointer"
            src={backgroundImg}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[80%] left-0">
            <h3
              className="text-2xl text-white tracking-wider text-center"
            
            >
              {title}
            </h3>
            <p>{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TiltItem;
