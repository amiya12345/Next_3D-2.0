import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import Inner from "./Inner";
import { Vortex } from "./Background";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <Inner>

      <section name="home" className="h-screen w-screen flex relative">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <motion.div
            className="flex flex-col justify-center items-center absolute top-1/2 w-full z-10"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ delay: 1, duration: 3, type: "spring" }}
          >
            <p className=" font-omiofont2 lg:text-[24px] text-[16px] mx-auto text-nft">
              <Typed
                className="font-omiofont2 lg:text-[24px] text-[16px]  text-center mx-auto text-nft"
                strings={["Hello!", "Hola!", "Namaste!", "Bonjour!", "Ciao!"]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
              I am
            </p>
            <h1 className="font-omiofont2 indent-0.5  text-3xl uppercase lg:text-6xl lg:tracking-[24px]  text-center text-nft sm:text-3xl tracking-[2px]">
              Amiya Ranjan
            </h1>
            <p className="font-omiofont2 text-center lg:text-[16px] uppercase py-3 mx-auto text-nft lg:tracking-[12px] text-[12px] tracking-[1px]">
              UI/UX Designer | 3D Generalist
            </p>
          </motion.div>
        </Vortex>
      </section>
    </Inner>
  );
};

export default Main;
