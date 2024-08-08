import Image from "next/image";
import React from "react";
import Shap from "../public/assets/works/shape/shape.webp";
import Shape1 from "../public/assets/works/shape/shapi1.webp"
import Shape2 from "../public/assets/works/shape/shapi2.webp"
import Shape3 from "../public/assets/works/shape/shapi3.webp"
import Shape4 from "../public/assets/works/shape/shapi4.webp"
import Shape5 from "../public/assets/works/shape/shapi5.webp"
import Shape6 from "../public/assets/works/shape/shapi6.webp"
import Shape7 from "../public/assets/works/shape/shapi7.webp"
import Shape8 from "../public/assets/works/shape/shapi8.webp"
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Inner from "../components/Inner";

const typo = () => {
  return (
    <Inner>
    <div className="w-full max-h-screen">
      <Navbar />
      <div className="w-full h-[30vh] lg:h-[100vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[100vh] bg-black/50 z-10" />
      <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Shap}
          alt="/"

        />
       <div className="absolute top-[50%] max-w-[100%]  left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0 ">
            <h2
              className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-[16px]  lg:tracking-[24px] tracking-widest uppercase lg:my-4 my-2"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
           3D Shapes
            </h2>
            <h3
              className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 my-2 tracking-wide"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              Blender / Graphic
            </h3>
            <h3
              className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4  my-2 tracking-wide"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              Personal Work
            </h3>
          </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont1 text-xl">
            Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
          For my personal challenge, I decided to try 30 Days of 3D Shape Design. Every day for a month, I created unique and interesting 3D shapes using Blender software. This project really pushed me to be more creative and experiment with new ideas. As each day passed, I could see my skills and artistic abilities improving. By the end, I had made a diverse collection of beautiful 3D shapes. This self-driven journey was a great example of my dedication, passion, and growth as a 3D designer.
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Shape1}
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
              src={Shape2}
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
              src={Shape3}
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
              src={Shape4}
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
              src={Shape5}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover> <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Shape6}
              alt="/"
              quality="100"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
          </Hover> <Hover scale={1.03} perspective={1000} speed={500} data-aos="fade-up">
            <Image
              className="rounded"
              src={Shape7}
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
              src={Shape8}
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
            <Link href="/cyber">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Previous Work</p>
            </Link>
          </div>
          <div className="flex justify-end items-center col-span-1">
            <Link href="/room">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Next Work</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Inner>
  );
};

export default typo;
