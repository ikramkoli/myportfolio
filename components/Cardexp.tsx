import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Cardexp({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 sm:w-[350px] md-w[650px] xl:w-[700px] snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      ></motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">QC Engineer</h4>
        <p className="font-bold text-2xl mt-1">PT. Surya Sumebar</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="https://seeklogo.com/images/A/autocad-logo-C9817CB828-seeklogo.com.png" alt="Autocad logo" />
          <img className="h-10 w-10 rounded-full" src="https://seeklogo.com/images/S/sketchup-logo-5248E6166E-seeklogo.com.png" alt="Skectchup logo" />
          <img className="h-10 w-10 rounded-full" src="https://seeklogo.com/images/A/adobe-photoshop-cc-circle-logo-3BE8AF841D-seeklogo.com.png" alt="Photoshop logo" />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
            alt="MsOffice logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started Work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point </li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point </li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point </li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point Summary Point </li>
        </ul>
      </div>
    </article>
  );
}
