import Image from "next/image";
import React from "react";
import Webi from "../public/assets/works/web/webi.webp";
import Webii from "../public/assets/works/web/webi1.webp";
import Webiii from "../public/assets/works/web/webi2.webp";
import Webiv from "../public/assets/works/web/webi3.webp";
import Webv from "../public/assets/works/web/webi4.webp";
import Webvi from "../public/assets/works/web/webi5.webp";
import Webvii from "../public/assets/works/web/webi6.webp";
import Webviii from "../public/assets/works/web/webi7.webp"
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const web = () => {
  return (

    <div className="w-full max-h-screen">
      <Navbar />
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Webi}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0">
          <h2 className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-2xl">3D illustrataion</h2>
          <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 text-xl">Blender / 3D UI</h3>
          <h3 className="font-omiofont2 lg:mx-24 mx-4">Personal Work</h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont2 md:text-xl">
            Project Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
            I created these 3D illustration for my portfolio using Blender. First, I built the layout with simple shapes and added more details by reusing the geometry. To improve the appearance, I used smooth shading with auto-smooth set at 180 degrees. Lastly, I applied materials to the shapes. The color palette was straightforward, and before finalizing it,
            I did a quick iteration to select the best colors.
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Webii}
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
              src={Webi}
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
              src={Webiii}
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
              src={Webiv}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover>
          <Hover
            scale={1.03}
            perspective={1000}
            speed={500}
          >
            <Image
              src={Webvii}
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
              src={Webviii}
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
              src={Webv}
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
              src={Webvi}
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
      <div className="max-w-[100%] lg:mx-24 mt-8 sm: mx-4">
        <div className="grid grid-cols-2 lg:gap-12 sm:grid-cols-2 gap-4 ">

          <div className="flex justify-start items-center col-span-1">
            <Link href="/#work">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Work</p>
            </Link>
          </div>
          <div className="flex justify-end items-center col-span-1">
            <Link href="/eth">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Next Work</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default web;
