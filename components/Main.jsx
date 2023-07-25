import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Main = () => {
  return (
    <section name="home" className="h-screen w-screen flex relative">
      <motion.div
        className="flex flex-col justify-center items-center absolute z-5 top-1/2 w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ delay: 1, duration: 2.5, type: "spring" }}
      >
        <p className="text-[32px] font-bold  max-w-3xl mx-auto text-nft">
          <Typed
            className="lg:font-bold lg:text-[32px] sm:text-[16px] sm:font-semibold text-center max-w-3xl mx-auto text-nft"
            strings={[
              "Hello!",
              "Hola!",
              "Namaste!",
              "Bonjour!",
              "Ciao!",
              "Konnichiwa!",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
          I am
        </p>
        <h1 className=" font-semibold text-3xl lg:text-6xl lg:tracking-[12px]  text-center text-nft  font-omiofont1  sm:text-3xl tracking-[2px]">
          Amiya Ranjan
        </h1>
        <p className="lg:text-[24px] font-semibold py-3  max-w-3xl mx-auto text-nft lg:tracking-[8px] sm:text-[14px tracking-[4px]">
          3D Generalist
        </p>
      </motion.div>
      <div className="flex-1">
        <Spline scene="https://draft.spline.design/FCxHPakYEjrhJAcr/scene.splinecode" />
      </div>
    </section>
  );
};

export default Main;
