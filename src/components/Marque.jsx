import { motion } from "framer-motion";
import React from "react";

const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-28 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl ">
      <div className="text border-t-2 border-b-2 flex border-zinc-300 whitespace-nowrap overflow-hidden ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[24vw] -mt-[3.5vw] -mb-[1vw] leading-none font-bold tracking-tighter pr-10  ">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[24vw] -mt-[3.5vw] -mb-[1vw] leading-none font-bold tracking-tighter pr-10 ">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[24vw] -mt-[3.5vw] -mb-[1vw] leading-none font-bold tracking-tighter pr-10 ">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
