"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { ReactLenis } from "@studio-freight/react-lenis";
export default function Home() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0, duration: 2, smoothWheel: true, syncTouch: true }}
    >
      <div className="w-[90vw] mx-auto lg:w-[60vw] space-y-20">
        <Hero />
        <About />
        <div className="pt-40">
          <Projects />
        </div>
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}
