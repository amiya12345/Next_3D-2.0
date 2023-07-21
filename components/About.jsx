import React from "react";
import Image from "next/image";
import Hover from "react-3d-hover"
import Aboutm from "../public/assets/works/About.webp"

const About = () => {
  return (
    <div id="about" className=" h-full bg-omio text-gray-300 max-w-full">
      <div className="max-w-full flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-full w-full grid grid-cols-2 gap-8 mt-20">
          <div className="sm:text-right pb-8 px-8">
            <p className="lg:text-3xl font-bold inline border-b-2 border-sky-500 text-3xl font-omiofont2 sm:text-2xl">
              About
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full w-full grid lg:px-8 sm:grid-cols-2 gap-8 px-8  rounded-md">
          <Hover scale={1.05} perspective={900} speed={900}>
          <Image
              className="rounded"
              src={Aboutm}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <div className="flex">
            <p className="font-omiofont3 lg:text-[16px] sm:text-[12px] leading-loose lg:tracking-[2px] sm:tracking-[1px]">
              I’m a 3D generalist, with a constant obsession to inject
              uniqueness & delight into all my crafts. I’ve minted and sold NFTs
              involving 3D animations on various NFT marketplace. Lately, I’ve
              attained some knowledge in coding, mainly front-end development &
              I’m intrigued by the possibilities offered by the Metaverse and 3D
              Design.Currently Working as 3D Designer at <a href="https://www.rario.com/">RARIO</a>.{" "}
            </p>
          </div>
        </div>
      </div>
    
    
  );
};

export default About;
