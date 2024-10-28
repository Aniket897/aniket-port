import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-[90vw] mx-auto lg:w-[60vw] space-y-20">
      <Hero />
      <About />
      <div className="pt-40">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
