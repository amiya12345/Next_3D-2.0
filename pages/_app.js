
import "../styles/globals.css";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init();
  }, []);
 
  <Navbar />;

  return (
    <AnimatePresence>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}
export default MyApp;
