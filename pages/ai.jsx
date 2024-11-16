import React, { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AiImage = memo(({ src, alt }) => (
  <Hover scale={1.03} perspective={1000} speed={500}>
    <Image
      className="rounded"
      src={src}
      alt={alt}
      quality="100"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-offset="0"
      data-aos-duration="1000"
      data-aos-delay="0"
    />
  </Hover>
));

const AI = () => {
  const aiImages = useMemo(
    () => [
      { src: "/assets/works/ai/ai1.webp", alt: "AI Art 1" },
      { src: "/assets/works/ai/ai2.webp", alt: "AI Art 2" },
      { src: "/assets/works/ai/ai3.webp", alt: "AI Art 3" },
      { src: "/assets/works/ai/ai4.webp", alt: "AI Art 4" },
      { src: "/assets/works/ai/ai5.webp", alt: "AI Art 5" },
      { src: "/assets/works/ai/ai6.webp", alt: "AI Art 6" },
      { src: "/assets/works/ai/ai7.webp", alt: "AI Art 7" },
      { src: "/assets/works/ai/ai8.webp", alt: "AI Art 8" },
      { src: "/assets/works/ai/ai9.webp", alt: "AI Art 9" },
      { src: "/assets/works/ai/ai10.webp", alt: "AI Art 10" },
      { src: "/assets/works/ai/ai11.webp", alt: "AI Art 11" },
      { src: "/assets/works/ai/ai12.webp", alt: "AI Art 12" },
      { src: "/assets/works/ai/ai13.webp", alt: "AI Art 13" },
      { src: "/assets/works/ai/ai14.webp", alt: "AI Art 14" },
      { src: "/assets/works/ai/ai15.webp", alt: "AI Art 15" },
      { src: "/assets/works/ai/ai16.webp", alt: "AI Art 16" },
    ],
    []
  );

  return (
    <div className="w-full max-h-screen">
      <Navbar />
      <div className="w-full h-[30vh] lg:h-[100vh] relative">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/works/ai/ai0.webp"
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[100vh] bg-black/50 z-10" />
        <div className="absolute top-[50%] max-w-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 mx-0">
          <h2 className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-[16px] lg:tracking-[24px] tracking-widest uppercase lg:my-4 my-2">
            AI Art
          </h2>
          <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 my-2 tracking-wide">
            Midjourney/DALL-E
          </h3>
          <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 my-2 tracking-wide">
            Personal Work
          </h3>
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
        <div className="grid lg:gap-12 md:grid-cols-4 gap-4">
          {aiImages.map((image, index) => (
            <AiImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      <div className="max-w-[100%] lg:mx-24 mt-8 sm: mx-4">
        <div className="grid grid-cols-2 lg:gap-12 sm:grid-cols-2 gap-4">
          <div className="flex justify-start items-center col-span-1">
            <Link href="/ai">
              <p className="cursor-pointer text-xl hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">
                Previous Work
              </p>
            </Link>
          </div>
          <div className="flex justify-end items-center col-span-1">
            <Link href="/web">
              <p className="cursor-pointer text-xl hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">
                Next Work
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AI;