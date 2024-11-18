import React, { memo, useCallback } from 'react';
import Typed from 'react-typed';
import Inner from './Inner';
import { Vortex } from './Background';
import { motion } from 'framer-motion';

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

const TYPED_STRINGS = ["Hello!", "Hola!", "Bonjour!", "Ciao!"];
const TYPED_CONFIG = {
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
};

const GreetingText = memo(() => (
  <p className="font-omiofont3 lg:text-[24px] text-[16px] mx-auto  text-slate-400 lg:tracking-[16px]">
    <Typed
      className="font-omiofont3 lg:text-[24px] text-[16px] text-center mx-auto text-slate-400"
      strings={TYPED_STRINGS}
      {...TYPED_CONFIG}
    />
    I am
  </p>
));
GreetingText.displayName = 'GreetingText';

const NameText = memo(() => (
  <h1 className="font-omiofont3 text-6xl uppercase lg:text-6xl lg:tracking-[24px] text-center text-nft sm:text-4xl sm:tracking-[8px]">
    Amiya Ranjan
  </h1>
));
NameText.displayName = 'NameText';

const RoleText = memo(() => (
  <p className="font-omiofont3 text-center lg:text-[18px] uppercase py-3 mx-auto  text-slate-400 lg:tracking-[16px] sm:text-[14px] sm:tracking-[8px]">
    Designer | Developer | Creator
  </p>
));
RoleText.displayName = 'RoleText';

const ContentWrapper = memo(() => (
  <motion.div
    className="flex flex-col justify-center items-center absolute top-1/2 w-full z-10"
    {...ANIMATION_CONFIG}
  >
    <GreetingText />
    <NameText />
    <RoleText />
  </motion.div>
));
ContentWrapper.displayName = 'ContentWrapper';

const Main = () => {
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

Main.displayName = 'Main';

export default memo(Main);