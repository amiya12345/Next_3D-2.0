import Image from "next/image";
import React from "react";
import Ai0 from "../public/assets/works/ai/ai0.webp"
import Ai1 from "../public/assets/works/ai/ai1.webp"
import Ai2 from "../public/assets/works/ai/ai2.webp"
import Ai3 from "../public/assets/works/ai/ai3.webp"
import Ai4 from "../public/assets/works/ai/ai4.webp"
import Ai5 from "../public/assets/works/ai/ai5.webp"
import Ai6 from "../public/assets/works/ai/ai6.webp"
import Ai7 from "../public/assets/works/ai/ai7.webp"
import Ai8 from "../public/assets/works/ai/ai8.webp"
import Ai9 from "../public/assets/works/ai/ai9.webp"
import Ai10 from "../public/assets/works/ai/ai10.webp"
import Ai11 from "../public/assets/works/ai/ai11.webp"
import Ai12 from "../public/assets/works/ai/ai12.webp"
import Ai13 from "../public/assets/works/ai/ai13.webp"
import Ai14 from "../public/assets/works/ai/ai14.webp"
import Ai15 from "../public/assets/works/ai/ai15.webp"
import Ai16 from "../public/assets/works/ai/ai16.webp"
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ai = () => {
  return (
    <div className="w-full max-h-screen">
       <Navbar />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Ai0}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0">
          <h2 className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-2xl">AI Art</h2>
          <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 text-xl">Midjourney/DALL-E</h3>
          <h3 className="font-omiofont2 lg:mx-24 mx-4">Personal Work</h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont1 sm:text-xl">
            Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
          "When I have some extra time, I enjoy immersing myself in Midjourney and DALL-E. These platforms allow me to create unique pieces using AI prompts. Each artwork represents a distinctive journey into form and function, celebrating the beauty and marvels of the digital era. The colors are lively and striking, the lines flow smoothly, and the outcomes are frequently awe-inspiring.
           From abstract designs to lifelike landscapes, AI-generated art is expanding our understanding of what is achievable."
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-4 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Ai1}
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
              src={Ai2}
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
              src={Ai3}
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
              src={Ai4}
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
              src={Ai5}
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
              src={Ai6}
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
              src={Ai7}
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
              src={Ai8}
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
              src={Ai9}
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
              src={Ai10}
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
              src={Ai11}
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
              src={Ai12}
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
              src={Ai13}
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
              src={Ai14}
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
              src={Ai15}
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
              src={Ai16}
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
          <Link href="/ai">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Previous Work</p>
        </Link>
        </div>
        <div className="flex justify-end items-center col-span-1">
          <Link href="/web">
          <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Next Work</p>
        </Link>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ai;
