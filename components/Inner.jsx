import { motion } from "framer-motion";

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      intial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const opacity = {
    intial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const slide = {
    intial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
 
  const perspective = {
    intial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="inner">
      <motion.div
        {...anim(slide)}
        className=" w-screen h-screen fixed top-0 left-0 z-40 bg-[#0a0a0a] "
      />
      
      <motion.div {...anim(perspective)} >
        <motion.div {...anim(opacity)} className="page">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
