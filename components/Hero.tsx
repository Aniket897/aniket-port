"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { saveAs } from "file-saver";

function Hero() {
  const downloadPdf = () => {
    const pdfUrl = "/aniket_kangane_resume.pdf";
    saveAs(pdfUrl, "aniket_kangane.pdf");
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-9">
      <div className="absolute top-0 right-[30%] w-[150px] h-[150px] rounded-full bg-[#82FF1F] opacity-30 blur-2xl animate-pulse" />

      <div className="flex items-start gap-4">
        <div className="w-[60px] h-[60px] bg-white rounded-full overflow-hidden">
          <Image
            src={"/profile.png"}
            width={100}
            height={100}
            alt="profileImage"
          />
        </div>
        <div>
          <p>Aniket Kangane</p>
          <p className="text-xs">~ Full Stack Developer</p>
          <div className="space-x-5 mt-2">
            <a
              href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
                ""
              )}&body=${encodeURIComponent("")}`}
              target="_blank"
            >
              <button className="bg-background text-white hover:scale-110 duration-200">
                <Mail size={15} />
              </button>
            </a>
            <a href={"https://github.com/Aniket897"} target="_blank">
              <button className="bg-background text-white hover:scale-110 duration-200">
                <Github size={15} />
              </button>
            </a>
            <a
              href={"https://www.linkedin.com/in/aniket-kangane/"}
              target="_blank"
            >
              <button className="bg-background text-white hover:scale-110 duration-200">
                <Linkedin size={15} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="text-4xl lg:text-6xl lg:leading-[80px] leading-relaxed text-center">
        Hi! I'm{" "}
        <span className="bg-[#82FF1F] border border-[#82FF1F] text-black px-3 py-1">
          Aniket Kangane
        </span>{" "}
        <br />a{" "}
        <span className="bg-white border border-white text-black  px-3 py-1">
          Full Stack Developer
          <br />
        </span>{" "}
        from <span className="border-2 border-white px-3 py-1">India</span>{" "}
        turning your ideas into reality.
      </div>
      <div className="space-x-5 mt-5">
        <a
          href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
            ""
          )}&body=${encodeURIComponent("")}`}
        >
          <Button className="bg-[#82FF1F] hover:bg-[#82FF1F] rounded-none text-black  hover:shadow-[0_0_20px_#82FF1F,0_0_40px_#82FF1F,0_0_60px_#82FF1F] transition-shadow duration-300 py-5">
            Email Me
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <Mail size={15} />
            </div>
          </Button>
        </a>
        <a
          href={
            typeof window !== "undefined"
              ? `${window.location.origin}/aniket_kangane_resume.pdf`
              : "/aniket_kangane_resume.pdf"
          }
          target="_blank"
          rel="noreferrer"
        >
          <Button
            onClick={downloadPdf}
            className="bg-[#82FF1F] hover:bg-[#82FF1F] text-black rounded-none  hover:shadow-[0_0_20px_#82FF1F,0_0_40px_#82FF1F,0_0_60px_#82FF1F] transition-shadow duration-300 py-5"
          >
            Resume
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <ArrowTopRightIcon />
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;

//shadow-[0_0_2px_#82FF1F,0_0_7px_#82FF1F,0_0_30px_#82FF1F]
