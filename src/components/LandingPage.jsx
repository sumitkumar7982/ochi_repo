import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const LandingPage = () => {


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div  className="textstructure mt-40 px-20">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index===1 && (
                 <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className="mr-[0.5vw] w-[9vw] h-[5.7vw] top-[2vw] relative rounded bg-red-500"></motion.div>)}
                <h1  className="uppercase pt-[2vw] -mb-[1vw] leading-[.75] tracking-tighter text-[8vw] font-sans font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-28 flex justify-between items-center py-4 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO ",
        ].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex text-md font-light items-center gap-2">
          <div className="px-5 py-1 border-[1px]  border-zinc-500 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] border-zinc-500 flex items-center justify-center font-light">
            <span className="rotate-[-45deg] text-3xl ">
              <IoMdArrowForward />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
