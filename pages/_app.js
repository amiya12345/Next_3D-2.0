import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

 
  <Navbar />
  return <Component {...pageProps} />;
}

export default MyApp;
