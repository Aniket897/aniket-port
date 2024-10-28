"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

const Navbar = () => {
  const downloadPdf = () => {
    const pdfUrl = "/aniket_kangane_resume.pdf";
    saveAs(pdfUrl, "aniket_kangane.pdf");
  };

  return (
    <nav className="backdrop-blur-3xl bg-opacity-30 border border-white/10 fixed top-3 left-1/2 transform -translate-x-1/2 w-[90vw] lg:w-[70vw] z-50">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="bg-white text-black flex items-center justify-center w-[40px] h-[40px] rounded-full text-3xl">
          A
        </div>
        <div>
          <a
            href={`${window.location.origin}/aniket_kangane_resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              onClick={downloadPdf}
              className="bg-[#82FF1F] hover:bg-[#82FF1F] text-black  hover:shadow-[0_0_20px_#82FF1F,0_0_40px_#82FF1F,0_0_60px_#82FF1F] transition-shadow duration-300 py-5 rounded-none"
            >
              Resume
              <div className="bg-white rounded-full flex items-center justify-center p-1">
                <ArrowTopRightIcon />
              </div>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
