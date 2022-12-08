import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#03AC13] rounded-full h-[10px] w-[300px] animate-ping " />
      <div className="rounded-full border border-[#333333] h-[750px] w-[750px] absolute" />
      <div className="rounded-full border border-[#03AC13] opacity-20 h-[850px] w-[850px] absolute animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircle;
