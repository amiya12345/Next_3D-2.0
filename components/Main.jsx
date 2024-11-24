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
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
};

const GreetingText = memo(() => (
  <p className="font-omiofont3 whitespace-nowrap text-[3vw] tracking-[6px] sm:text-[2vw] sm:tracking-[8px] lg:text-2xl lg:tracking-[24px] text-nft">
    <Typed
      className="font-omiofont3 whitespace-nowrap text-[3vw] tracking-[6px] sm:text-[2vw] sm:tracking-[8px] lg:text-2xl lg:tracking-[24px] text-nft"
      strings={TYPED_STRINGS}
      {...TYPED_CONFIG}
    />
    I am
  </p>
));
GreetingText.displayName = 'GreetingText';

const NameText = memo(() => (
  <h1 className="font-omiofont3 uppercase whitespace-nowrap text-[6vw] tracking-[6px] sm:text-[2vw] sm:tracking-[8px] lg:text-6xl lg:tracking-[24px] text-nft">
  Amiya Ranjan
</h1>
));
NameText.displayName = 'NameText';

const RoleText = memo(() => (
  <p className="font-omiofont3 text-slate-400 uppercase tracking-[4px] text-[2vw] sm:text-[2vw] sm:tracking-[8px] lg:text-lg lg:tracking-[16px] py-2 whitespace-nowrap">
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
