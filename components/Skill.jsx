import skills from "@/constant/Images";
import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="w-full h-[80vh]">
      <h1 className="text-3xl text-center">
        My <span className="text-teal-400">Skills</span>
      </h1>
      <div className="flex gap-3">
        {skills.map((el, i) => (
          <div key={i} className="flex flex-col justify-center align-middle">
            <Image
              className="object-contain"
              src={el.icon}
              width={50}
              height={50}
              alt={el.title}
            />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
