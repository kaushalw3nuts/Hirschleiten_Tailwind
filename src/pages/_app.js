import "@/styles/fonts.css";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function App({ Component, pageProps }) {

  useEffect( () => {
    gsap.set(".fadeInUp", {y: "30%", opacity: 0,});
    ScrollTrigger.batch(".fadeInUp", {
      onEnter: batch => gsap.to(batch, { opacity: 1, duration: .8, delay:0.5, stagger: 0.2, y: 0 }),
    });
  }, [])

  return (
    <>
      <main className="main_wrap">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}