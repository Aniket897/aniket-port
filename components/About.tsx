import {
  Contact,
  Github,
  GraduationCapIcon,
  Lightbulb,
  Linkedin,
  Mail,
  Pin,
} from "lucide-react";
import Image from "next/image";
import { BiSolidShoppingBags } from "react-icons/bi";
import { DiDocker } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

function About() {
  return (
    <div className="min-h-screen space-y-20">
      <div className="text-center text-6xl">About Me</div>
      <div className="space-y-6">
        <div className="bg-card border p-10 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-[100px] h-[100px] bg-white rounded-full overflow-hidden">
              <Image
                src={"/profile.png"}
                width={1000}
                height={1000}
                alt="profileImage"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-bold text-3xl">Aniket Kangane</p>
              <p className="text-neutral-500">Frontend Intern at Whatbytes</p>
              <div className="space-x-5 mt-2">
                <a
                  href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
                    ""
                  )}&body=${encodeURIComponent("")}`}
                  target="_blank"
                >
                  <button className="bg-transparent text-white hover:scale-110 duration-200">
                    <Mail size={15} />
                  </button>
                </a>
                <a href={"https://github.com/Aniket897"} target="_blank">
                  <button className="bg-transparent text-white hover:scale-110 duration-200">
                    <Github size={15} />
                  </button>
                </a>
                <a
                  href={"https://www.linkedin.com/in/aniket-kangane/"}
                  target="_blank"
                >
                  <button className="bg-transparent text-white hover:scale-110 duration-200">
                    <Linkedin size={15} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            I am a seasoned Full Stack Developer with a proven track record of
            over 4+ years, focusing on delivering high-quality solutions. My
            expertise lies in a comprehensive range of technologies including
            JavaScript, TypeScript, React, Next.js, Node.js, Express and many
            more. With a deep understanding of these tools and frameworks, I
            excel in crafting dynamic and scalable full-stack applications that
            meet the evolving needs of modern businesses. Let me bring my wealth
            of experience and technical prowess to your next project.
          </p>
        </div>
      </div>
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default About;

const Experience = () => {
  return (
    <div>
      <h1 className="text-2xl">Experience</h1>
      <div className="flex items-center gap-8 mt-8">
        <BiSolidShoppingBags color="#8f12ef" size={50} />
        <div className="flex-1">
          <p className="text-xl text-[#8f12ef]">Whatbytes</p>
          <p className="text-neutral-400">Frontend Intern</p>
        </div>
        <div className="capitalize text-xs">
          <p>aug 2025 - Present</p>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-8">
        <BiSolidShoppingBags color="#8f12ef" size={50} />
        <div className="flex-1">
          <p className="text-xl text-[#8f12ef]">Pepsales</p>
          <p className="text-neutral-400">Frontend Enginner Intern</p>
        </div>
        <div className="capitalize text-xs">
          <p>aug 2025 - aug 2025</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h1 className="text-2xl">Education</h1>
      <div className="flex items-center gap-8 mt-8">
        <GraduationCapIcon color="#8f12ef" size={50} />
        <div className="flex-1">
          <p className="text-xl text-[#8f12ef]">
            Software Development Bootcamp
          </p>
          <p className="text-neutral-400">Prepleaf by masai</p>
        </div>
        <div className="capitalize text-xs">
          <p>jan 2023 - sept 2024</p>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-8">
        <GraduationCapIcon color="#8f12ef" size={50} />
        <div className="flex-1">
          <p className="text-xl text-[#8f12ef]">
            Bachelor of Science (Computer Science)
          </p>
          <p className="text-neutral-400">BAMU</p>
        </div>
        <div className="capitalize text-xs">
          <p>jun 2021 - may 2025</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h1 className="text-2xl">Skills</h1>
      <div className="flex gap-5 mt-8 items-center justify-center flex-wrap">
        <SiHtml5 size={50} />
        <SiCss3 size={50} />
        <SiReact size={50} />
        <SiNextdotjs size={50} />
        <SiJavascript size={50} />
        <SiPython size={50} />
        <TbSql size={50} />
      </div>
      <div className="flex gap-5 mt-5 items-center justify-center flex-wrap">
        <SiExpress size={50} />
        <IoLogoNodejs size={50} />
        <SiMongodb size={50} />
        <SiMongoose size={50} />
        <SiVisualstudiocode size={50} />
        <SiGithub size={50} />
        <SiPostman size={50} />
        <SiAmazonwebservices size={50} />
        <SiDocker size={50} />
      </div>
    </div>
  );
};

const data = (
  <div className="space-y-4">
    <div className="flex items-start flex-col md:flex-row gap-4">
      <div className="bg-card border rounded-3xl flex-1 p-6">
        <h1 className="flex gap-3 items-center">
          <Pin size={30} />
        </h1>
        <br />
        <p
          style={{
            fontFamily: "menlo",
          }}
          className=""
        >
          👋 Hello, I’m Aniket! I’m a full stack web developer based in India.
          <br />
          <br />
          ⭐ I've been building stuff on the 🌐 web since when I was in 10th
          standard and I've made countless projects
          <br />
          <br />⭐ Proficient in JavaScript and experienced in MERN stack
          development (MongoDB, Express.js, React.js, Node.js). Skilled in
          RESTful API design, frontend technologies (HTML, CSS), and database
          systems (MongoDB).
        </p>
      </div>
      <div className="bg-card border rounded-3xl flex-1 p-6 w-full max-w-[90vw]">
        <h1 className="flex gap-3 text-xl md:text-4xl items-center">
          <Contact size={30} />
          Contact
        </h1>
        <br />
        <div
          style={{
            fontFamily: "menlo",
          }}
          className="space-y-4 text-neutral-400"
        >
          <div className="text-xl md:text-4xl flex items-center gap-4">
            <Mail size={30} />
            <p>aniketkangane@gmail.com</p>
          </div>
          <div className="text-xl md:text-4xl  flex items-center gap-4">
            <Github size={30} />
            <p>github.com/aniketkangane</p>
          </div>
          <div className="text-xl md:text-4xl  flex items-center gap-4">
            <Linkedin size={30} />
            <p>linkden/aniket-kangane</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-card border p-9 rounded-3xl">
      <h1 className="flex text-xl md:text-4xl gap-3 items-center">
        <Lightbulb size={30} />
        Skills
      </h1>
      <div className="flex gap-5 mt-5 items-center justify-center flex-wrap">
        <SiHtml5 size={50} />
        <SiCss3 size={50} />
        <SiJavascript size={50} />
        <SiReact size={50} />
        <IoLogoNodejs size={50} />
        <SiExpress size={50} />
        <SiMongodb size={50} />
        <SiNextdotjs size={50} />
        <SiPython size={50} />
      </div>
      <div className="flex gap-5 mt-5 items-center justify-center flex-wrap">
        <SiMongoose size={50} />
        <SiVisualstudiocode size={50} />
        <SiGithub size={50} />
        <SiPostman size={50} />
        <SiAmazonwebservices size={50} />
      </div>
    </div>
  </div>
);
