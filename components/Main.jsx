import React, { memo, useCallback } from 'react';
import Typed from 'react-typed';
import Inner from './Inner';
import { Vortex } from './Background';
import { motion } from 'framer-motion';

// Constants for animation and text content
const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: -10 },
  transition: { delay: 1, duration: 3, type: "spring" }
};

const VORTEX_CONFIG = {
  backgroundColor: "black",
  rangeY: 800,
  particleCount: 500,
  baseHue: 120
};

const TYPED_STRINGS = ["Hello!", "Hola!", "Namaste!", "Bonjour!", "Ciao!"];
const TYPED_CONFIG = {
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
};

// Memoized Typography components
const GreetingText = memo(() => (
  <p className="font-omiofont2 lg:text-[24px] text-[16px] mx-auto text-nft">
    <Typed
      className="font-omiofont2 lg:text-[24px] text-[16px] text-center mx-auto text-nft"
      strings={TYPED_STRINGS}
      {...TYPED_CONFIG}
    />
    I am
  </p>
));

const NameText = memo(() => (
  <h1 className="font-omiofont2 indent-0.5 text-3xl uppercase lg:text-6xl lg:tracking-[24px] text-center text-nft sm:text-3xl tracking-[2px]">
    Amiya Ranjan
  </h1>
));

const RoleText = memo(() => (
  <p className="font-omiofont2 text-center lg:text-[16px] uppercase py-3 mx-auto text-nft lg:tracking-[12px] text-[12px] tracking-[1px]">
    Visual Designer | 3D Generalist
  </p>
));

// Main component
const Main = () => {
  // Memoized content wrapper
  const ContentWrapper = useCallback(() => (
    <motion.div
      className="flex flex-col justify-center items-center absolute top-1/2 w-full z-10"
      {...ANIMATION_CONFIG}
    >
      <GreetingText />
      <NameText />
      <RoleText />
    </motion.div>
  ), []);

  return (
    <Inner>
      <section className="h-screen w-screen flex relative">
        <Vortex
          {...VORTEX_CONFIG}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <ContentWrapper />
        </Vortex>
      </section>
    </Inner>
  );
};

export default memo(Main);