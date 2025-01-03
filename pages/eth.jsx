import Image from "next/image";
import Link from "next/link";
import Hover from "react-3d-hover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Inner from "../components/Inner";

// Consolidate image imports
const images = {
  hero: require("../public/assets/works/eth/ethp.webp"),
  gallery: Array.from({ length: 8 }, (_, i) => 
    require(`../public/assets/works/eth/ethp${i + 1}.webp`)
  )
};

const ETHPortal = () => {
  return (
    <Inner>
      <div className="w-full max-h-screen">
        <Navbar />
        
        <div className="w-full h-[30vh] lg:h-[100vh] relative">
          <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[100vh] bg-black/50 z-10" />
          <Image
            priority
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={images.hero}
            alt="/"
          />
          <div className="absolute top-[50%] max-w-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 mx-0">
            <h2 className="font-omiofont2 lg:text-3xl lg:mx-24 mx-4 text-[16px] lg:tracking-[24px] tracking-widest uppercase lg:my-4 my-2"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-delay="0">
              ETH Portals
            </h2>
            <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 my-2 tracking-wide"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-delay="0">
              Blender /NFT
            </h3>
            <h3 className="font-omiofont2 lg:text-1.5xl lg:mx-24 mx-4 my-2 tracking-wide"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-delay="0">
              Personal Work
            </h3>
          </div>
        </div>

        <div className="max-w-[100%] lg:mx-24 grid md:grid-cols-5 gap-8 pt-8 mx-4">
          <div className="col-span-6">
            <h2 className="lg:text-3xl font-omiofont1 text-xl">Overview</h2>
            <p className="font-omiofont3 lg:mt-8 text-justify text-slate-500 mt-6">
              ETH Portal is a collection of NFTs that tell the story of different types of portals, 
              like magical Ethereum portals, sci-fi Ethereum portals, and pirate Ethereum portals. 
              These portals, inspired by the Ethereum cryptocurrency, have been brought to life through 
              detailed 3D rendering and artistic creativity. By seamlessly combining technology and 
              imagination, the ETH Portal project showcases the endless possibilities of digital art.
            </p>
          </div>
        </div>

        <div className="max-w-[100%] lg:mx-24 mt-8 mx-4">
          <div className="grid lg:gap-12 md:grid-cols-2 gap-4">
            {images.gallery.map((image, index) => (
              <Hover key={index} scale={1.03} perspective={1000} speed={500}>
                <Image
                  className="rounded"
                  src={image}
                  alt="/"
                  quality={100}
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  data-aos-delay="0"
                />
              </Hover>
            ))}
          </div>
        </div>

        <div className="max-w-[100%] lg:mx-24 mt-8 sm: mx-4">
          <div className="grid grid-cols-2 lg:gap-12 sm:grid-cols-2 gap-4">
            <div className="flex justify-start items-center col-span-1">
              <Link href="/web">
                <p className="cursor-pointer text-xl hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">
                  Previous Work
                </p>
              </Link>
            </div>
            <div className="flex justify-end items-center col-span-1">
              <Link href="/cyber">
                <p className="cursor-pointer text-xl hover:underline hover:text-sky-500 font-omiofont3 sm: text-[16px]">
                  Next Work
                </p>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Inner>
  );
};

export default ETHPortal;