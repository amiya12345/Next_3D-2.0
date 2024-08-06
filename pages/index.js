import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Works from "../components/Works";
import About from "../components/About";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <title>AR3D-Portfolio of Amiya</title>
        <meta name="description" content="Designed & Developed By AR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen w-screen scroll-smooth">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXT8KNHF8C" />

        <Script id="google-analytics">
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
