"use client";

import skills from "@/constant/Images";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="h-screen w-full p-5">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Technical Skills
      </h2>
      <div className="flex justify-center items-center h-full w-full">
        <div className="w-full flex justify-center items-center gap-16 flex-wrap">
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
    </div>
  );
};

export default Skills;
