"use client";

import skills from "@/constant/Images";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Technical Skills
      </motion.h2>
      <div className="w-full flex justify-center items-center gap-10 mt-10 flex-wrap">
        {skills.map((el, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Image
              className="object-contain rounded-full"
              src={el.icon}
              width={60}
              height={60}
              alt={el.title}
            />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
