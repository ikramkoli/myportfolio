import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1172207.jpg&fm=jpg"
        alt="Photo Profile"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[370px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#03AC13]">little</span> background
        </h4>
        <p className="text-base">
          I'm Ikram. I am a frontend developer, experienced in leading cross- functional teams in a time-pressured setting too. complete projects on schedule and within budget. Strong skills include Nextjs, React, Nodejs, Data Structure,
          Algorithms, RESTful APIs, UI/UX, Web3 Engineering, and Figma Design.
        </p>
      </div>
    </motion.div>
  );
}
