import Image from "next/image";
import React from "react";
import Rim from "../public/assets/works/room/room.webp";
import Rim1 from "../public/assets/works/room/room1.webp"
import Rim2 from "../public/assets/works/room/room2.webp"
import Rim3 from "../public/assets/works/room/room3.webp"
import Rim4 from "../public/assets/works/room/room4.webp"
import Rim5 from "../public/assets/works/room/room5.webp"
import Rim6 from "../public/assets/works/room/room6.webp"
import Rim7 from "../public/assets/works/room/room7.webp"
import Rim8 from "../public/assets/works/room/room8.webp"
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const typo = () => {
  return (
    <div className="w-full max-h-screen">
       <Navbar />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Rim}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0">
          <h2 className="font-omiofont2 text-3xl lg:mx-24 mx-4">3D Cozy Room</h2>
          <h3 className="font-omiofont2 text-1.5xl lg:mx-24 mx-4">Blender / 3D Design</h3>
          <h3 className="lg:mx-24 mx-4">Personal Project</h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont1 text-xl">
            Project Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
          The 3D Isometric Cozy Room project is all about creating a warm and inviting virtual space thThe focus of the project is to design the rooms layout, furniture, and decor with meticulous attention to detail. By using the isometric perspective, the room gains depth and dimension, making it more engaging and inviting.

Lighting and texture play a crucial role in enhancing the rooms ambiance. Warm color palettes and subtle details, like soft lighting and plush textures, create a soothing and cozy atmosphere.
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Rim1}
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
              src={Rim2}
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
              src={Rim3}
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
              src={Rim4}
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
              src={Rim5}
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
              src={Rim6}
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
              src={Rim7}
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
              src={Rim8}
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
          <Link href="/typo">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 ">Previous Project</p>
        </Link>
        </div>
        <div className="flex justify-end items-center">
          <a href="https://www.behance.net/gallery/142907041/36-Days-of-Typo" rel="noreferrer" target="_blank">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 ">Next Project</p>
        </a>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default typo;
