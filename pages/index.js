import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Works from "../components/Works";
import About from "../components/About";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
return (
<>
<Head>

<title>AR3D-Portfolio of Amiya</title>
<meta
name    = "description"
content = "Designed & Develope By Amiya using Next.js and Tailwind"
/>
<meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
<link rel  = "icon" href        = "/favicon.ico" />
</Head>


<div className = "min-h-screen w-screen scroll-smooth">
<script>
window.ga = window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l = +new Date;
ga('create', 'UA-181824713-1', 'auto');
ga('send', 'pageview');
</script>
<script async src = 'https://www.google-analytics.com/analytics.js'></script>

<Navbar />
<Main />
<Works />
<About />
<Footer/>
</div>
</>
);
}
