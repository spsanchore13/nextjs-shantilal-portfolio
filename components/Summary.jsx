"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "./magicui/globe";

const Summary = () => {
  const aboutRef = useRef();
  const [isDesktop, setIsDesktop] = React.useState(false);

  // Ensure GSAP plugins are registered on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Check screen size for pinning
      const checkScreenSize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  // Mobile-specific Globe container setup (only for tablet/desktop since Globe is hidden on mobile)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      // sm breakpoint and above
      console.log("Summary: Setting up Globe container for tablet/desktop");
      const globeContainer = document.querySelector(".globe-container");
      if (globeContainer) {
        globeContainer.style.display = "flex";
        globeContainer.style.visibility = "visible";
        globeContainer.style.opacity = "1";
        globeContainer.style.minHeight = "300px";
        console.log("Summary: Globe container setup complete");
      }
    }
  }, []);

  useGSAP(() => {
    if (!aboutRef.current) return;

    const el = aboutRef.current;
    const isMobileDevice = window.innerWidth < 768;

    // Skip GSAP animations on mobile to prevent interference
    if (isMobileDevice) {
      console.log("Summary: Skipping GSAP on mobile device");
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 50%", // when top of section hits 50% of viewport
        end: "top 30%", // optional
        scrub: 1,
        pin: isDesktop && window.innerWidth >= 1024, // Only pin on large desktop screens
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
      stagger: 0.2,
    });

    // Ensure Globe is visible and not affected by animations
    tl.set(
      ".globe-container",
      {
        opacity: 1,
        visibility: "visible",
      },
      0
    );
  });

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen w-full p-5 flex flex-col justify-center py-8 sm:py-12 lg:py-16"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-foreground mb-8">
        Professional Summary
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Globe - Hidden on mobile, visible on tablet and desktop */}
        <div
          className="hidden sm:flex flex-1 w-full lg:w-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[650px] globe-container items-center justify-center"
          style={{
            minHeight: "300px",
            display: "flex",
            visibility: "visible",
            opacity: 1,
          }}
        >
          <div className="w-full h-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[650px] max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[650px]">
            <Globe />
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            I'm a Frontend Developer with over 2 years of experience building
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
