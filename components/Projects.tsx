import { Oxygen_Mono_Varoable } from "@/app/layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Earth, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Collabe",
    description:
      "Real-Time Collaborative Whiteboard, designed for developers, teams, and educators who value efficiency and teamwork. This advanced platform offers a robust set of features to streamline your collaborative efforts, whether you are brainstorming, planning, or teaching.",
    stack: ["react", "javascript", "node", "redis", "socket.io", "express"],
    sourceCode: "https://github.com/Aniket897/collabe",
    livePreview: "https://github.com/aniketkangane/Collabe",
    image: "/collabe/3.png",
  },
  {
    name: "Event-Prime clone",
    description:
      "A robust web application designed to facilitate the sale of event tickets by companies and provide a seamless purchasing experience for users. This platform leverages modern technologies and integrates secure payment processing via Stripe.",
    stack: [
      "react",
      "javascript",
      "node",
      "mongodb",
      "socket.io",
      "express",
      "stripe",
    ],
    sourceCode: "https://github.com/Aniket897/event-prime-clone",
    livePreview: "https://event-prime-clone.vercel.app/",
    image: "/event-prime.png",
  },
  {
    image: "/halloween-shop.png",
    stack: ["REACT", "TailwindCSS", "Readux-toolkit"],
    name: "halloween-shop clone",
    description:
      "An ecommerce website where cusomer get products related to halloween",
    livePreview: "https://halloween-shop-clone.vercel.app/",
    sourceCode: "https://github.com/Aniket897/halloween-shop-clone",
  },
  {
    image: "/expensify.png",
    stack: ["REACT", "TailwindCSS", "Readux-toolkit", "Framer Motion"],
    name: "Expensify ",
    description:
      "An efficient expense tracker app designed to help users manage their finances effortlessly. With a range of features such as expense creation, deletion and analytics, this app ensures a seamless and intuitive experience for tracking and analyzing expenses.",
    livePreview: "https://expensify-v1.vercel.app/",
    sourceCode: "https://github.com/Aniket897/expensify",
  },
];

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
  image: string;
}

function ProjectCard({
  name,
  description,
  stack,
  sourceCode,
  livePreview,
  image,
}: ProjectCardProps) {
  return (
    <div className="space-y-5 border-b-2 pb-[50px]">
      <div>
        <Image
          className="w-full"
          src={image}
          width={10000}
          height={20000}
          alt="projectImg"
        />
      </div>
      <div>
        <p className="capitalize text-2xl">{name}</p>
        <p>{description}</p>
      </div>
      <div className="gap-3 flex flex-wrap" style={{ fontFamily: "menlo" }}>
        {stack.map((s) => (
          <span className="bg-white text-black text-xs p-2 font-bold px-3">
            {s}
          </span>
        ))}
      </div>
      <div className="md:space-x-5 mt-5">
        <a href={sourceCode} target="_blank" rel="noreferrer">
          <Button className="bg-[#82FF1F] hover:bg-[#82FF1F] text-black  hover:shadow-[0_0_20px_#82FF1F,0_0_40px_#82FF1F,0_0_60px_#82FF1F] transition-shadow duration-300 py-5 max-md:w-full rounded-none">
            Source Code
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <Github size={15} />
            </div>
          </Button>
        </a>
        <a href={livePreview} target="_blank" rel="noreferrer">
          <Button className="bg-[#82FF1F] hover:bg-[#82FF1F] text-black  hover:shadow-[0_0_20px_#82FF1F,0_0_40px_#82FF1F,0_0_60px_#82FF1F] transition-shadow duration-300 py-5 max-md:mt-5 max-md:w-full rounded-none">
            Live Preview
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <Earth size={15} />
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="mx-auto space-y-20 min-h-screen">
      <div className="text-center text-6xl">Projects</div>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
