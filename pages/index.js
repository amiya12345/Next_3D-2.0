import dynamic from 'next/dynamic'
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar"; // Keep navbar immediate loading
import Main from "../components/Main";   // Keep main section immediate loading

// Dynamically import components that are below the fold
const Works = dynamic(() => import("../components/Works"), {
  loading: () => <div className="animate-pulse h-screen bg-gray-100"></div>
});

const About = dynamic(() => import("../components/About"), {
  loading: () => <div className="animate-pulse h-screen bg-gray-100"></div>
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="animate-pulse h-24 bg-gray-100"></div>
});

export default function Home() {
  return (
    <>
      <Head>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/favicon.ico" 
          as="image" 
          type="image/x-icon"
        />
        
        <title>AR3D-Portfolio of Amiya</title>
        <meta 
          name="description" 
          content="Portfolio of Amiya - Showcasing 3D designs, creative works, and professional experiences. Expert in 3D modeling and design." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Add more meta tags for SEO */}
        <meta property="og:title" content="AR3D-Portfolio of Amiya" />
        <meta property="og:description" content="Portfolio of Amiya - Showcasing 3D designs and creative works" />
        <meta name="robots" content="index, follow" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen w-screen scroll-smooth">
        {/* Load Google Analytics script with priority */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXT8KNHF8C"
        />

        <Script 
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXT8KNHF8C');
          `}
        </Script>

        <Navbar />
        <Main />
        <Works />
        <About />
        <Footer />
      </div>
    </>
  );
}