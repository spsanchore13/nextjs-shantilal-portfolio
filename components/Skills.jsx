"use client";

import skills from "@/constant/Images";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen w-full p-5 flex flex-col justify-center"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 text-foreground">
        Technical Skills
      </h2>
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="w-full flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {skills.map((el, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center p-2"
            >
              <Image
                className="object-contain rounded-full w-12 h-12 md:w-[60px] md:h-[60px]"
                src={el.icon}
                width={60}
                height={60}
                alt={el.title}
              />
              <p className="text-sm md:text-base text-center mt-2 text-foreground">
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
