import Image from "next/image";
import React from "react";
import Cybr from "../public/assets/works/cyber/cyber.webp";
import Cyber1 from "../public/assets/works/cyber/cyberi1.webp"
import Cyber2 from "../public/assets/works/cyber/cyberi2.webp"
import Cyber3 from "../public/assets/works/cyber/cyberi3.webp"
import Cyber4 from "../public/assets/works/cyber/cyberi4.webp"
import Cyber5 from "../public/assets/works/cyber/cyberi5.webp"
import Cyber6 from "../public/assets/works/cyber/cyberi6.webp"
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
          src={Cybr}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[100%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10  mx-0">
          <h2 className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-2xl">CyberPunk Art</h2>
          <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 text-xl">Blender / Diorama</h3>
          <h3 className="font-omiofont2 lg:mx-24 mx-4">Personal Work</h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24  grid md:grid-cols-5 gap-8 pt-8 mx-4">
        <div className="col-span-6">
          <h2 className="lg:text-3xl font-omiofont1 sm:text-xl">
            Overview
          </h2>
          <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
            The Cyberpunk Art and 3D Diorama project is an exciting endeavor that combines futuristic artwork and immersive dioramas. Inspired by cyberpunk themes,
            the project aims to create captivating digital art and miniature scenes that depict a world where technology and urban grit collide.
          </p>
        </div>
      </div>
      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
          <Hover scale={1.03} perspective={1000} speed={500}>
            <Image
              className="rounded"
              src={Cyber1}
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
              src={Cyber2}
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
              src={Cyber3}
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
              src={Cyber4}
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
              src={Cyber5}
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
              src={Cyber6}
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
            <Link href="/eth">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Previous Work</p>
            </Link>
          </div>
          <div className="flex justify-end items-center col-span-1">
            <Link href="/typo">
              <p className="cursor-pointer text-xl  hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">Next Work</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default typo;
