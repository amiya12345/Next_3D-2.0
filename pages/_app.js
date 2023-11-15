import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-1LLT2SGHJR";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

 
  <Navbar />
  return <Component {...pageProps} />;
}
export default MyApp;
