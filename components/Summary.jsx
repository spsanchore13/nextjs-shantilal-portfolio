"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "./magicui/globe";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
  const aboutRef = useRef();

  useGSAP(() => {
    const el = aboutRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 50%", // when top of section hits 80% of viewport
        end: "top 30%", // optional
        scrub: 1,
        pin: true,
      },
    });

    tl.from("#about h2", {
      scale: 1,
      opacity: 0,
    });

    tl.from("#about p", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrub: 1,
      stagger: 0.2,
    });
  });

  return (
    <section ref={aboutRef} id="about" className="h-screen w-full p-5">
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
