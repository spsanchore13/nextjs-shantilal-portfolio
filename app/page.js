"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Y-axis scroll value:", scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
