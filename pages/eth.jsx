import Image from "next/image";
import React from "react";
import Eth from "../public/assets/works/Ethp.webp";
import Eth1 from "../public/assets/works/Ethp1.webp";
import Eth2 from "../public/assets/works/Ethp2.webp";
import Eth3 from "../public/assets/works/Ethp3.webp";
import Eth4 from "../public/assets/works/Ethp4.webp";
import Eth5 from "../public/assets/works/Ethp5.webp";
import Eth6 from "../public/assets/works/Ethp6.webp";
import Eth7 from "../public/assets/works/Ethp7.webp";
import Eth8 from "../public/assets/works/Ethp8.webp";

import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const eth = () => {
  return (
    <div className="w-full max-h-screen">
       <Navbar />
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={Eth}
        alt="/"
      />
       <div className="absolute top-[70%] max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0">
          <h2 className="font-omiofont2 text-3xl lg:mx-24 mx-4">ETH Portals</h2>
          <h3 className="font-omiofont2 text-1.5xl lg:mx-24 mx-4">Blender /NFT</h3>
          <h3 className="lg:mx-24 mx-4">Personal Project</h3>
        </div>
    </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont1 text-xl">
            Project Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
            ETH portal is a nft collection which tells a story of various portal like Magical eth portal, Sci-fi eth portal and pirate eth portal.
            This portals, inspired by the Ethereum cryptocurrency, is brought to life through intricate 3D rendering and artistic flair.
            Through its seamless blend of technology and imagination, the ETH Portal showcases the limitless possibilities of digital art.As viewers gaze into ETH Portals, they are transported to a world where innovation, art, and imagination collide,
             leaving them with a sense of awe and wonder at the boundless potential of the digital realm.
             
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Eth1}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth2}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Eth3}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth4}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth5}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth6}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth7}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Eth8}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
        
         <div className="flex justify-start items-center">
          <Link href="/web">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3">Previous Project</p>
        </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link href="/cyber">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3">Next Project</p>
        </Link>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};


export default eth