"use client";

import { useRef } from "react";
import { Globe } from "./magicui/globe";

const Summary = () => {
  const aboutRef = useRef();

  return (
    <section
      ref={aboutRef}
      id="about"
      className="mb-[150px] h-screen w-full p-5"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-foreground">
        Professional Summary
      </h2>
      <div className="flex justify-between items-center h-full">
        <div className="flex-1">
          <Globe />
        </div>

        <div className="flex-1">
          <p className="text-muted-foreground">
            I’m a Frontend Developer with over 2 years of experience building
            responsive, accessible, and performant web applications. Currently,
            I work at Fabits, where I helped launch a modern investment platform
            from scratch—developing everything from modular UI components to
            secure cross-platform apps with biometric authentication. My
            strength lies in transforming UI/UX designs into scalable and
            pixel-perfect interfaces. I love writing clean, reusable code,
            collaborating with design teams, and optimizing for both user
            experience and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
