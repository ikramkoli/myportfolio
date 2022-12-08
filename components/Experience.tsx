import React from "react";
import { motion } from "framer-motion";
import Cardexp from "./Cardexp";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll my-[170px] pt-[170px] snap-x snap-mandatory">
        <Cardexp />
        <Cardexp />
        <Cardexp />
        <Cardexp />
      </div>
    </motion.div>
  );
}

export default Experience;
