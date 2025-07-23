"use client";

import {
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Fabits",
    description:
      "Designed and developed a modern, responsive investment platform with enhanced user engagement through intuitive UI patterns.",
    technologies:
      "JavaScript, React, Recoil, AWS, Tailwind, shadcn/ui, Material-UI",
    link: "https://mywealth.fabits.com/",
    logo: "https://d3lgi69rk7563.cloudfront.net/svgs/logo.svg",
    github: "",
  },
  {
    title: "Namaste Nola Hotel (Freelance)",
    description:
      "Developed a fully functional restaurant website with a modern UI, leveraging Next.js for server-side rendering and performance optimization.",
    technologies: "JavaScript, React, Next.js, Tailwind CSS",
    link: "https://namastenola439.com/",
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    github: "",
  },
  {
    title: "Genius AI (Personal)",
    description:
      "AI SaaS: OpenAI-powered app for chat, code generation, image/audio/video creation. Sign up, pay via Stripe, with chat support from Crisp.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Node.js, Clerk Auth, Crisp Chat, OpenAI, DALL.E, Replicate AI",
    link: "https://next-js-ai-saas.vercel.app/",
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    github: "https://mywealth.fabits.com/",
  },
  {
    title: "Full Stack Discord Clone (Personal)",
    description:
      "An app like Discord for creating servers, channels, text/audio/video communication, managing members, and supporting one-on-one/group chats with Livkit SDK.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Node.js, Clerk Auth, Socket.IO, shadecn/ui",
    link: "https://next-js-discord-clone.vercel.app/",
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    github: "https://github.com/spsanchore13/next.js-discord-clone",
  },
  {
    title: "CarHub (Personal)",
    description:
      "Car Showcase Next.js App: A visually appealing platform showcasing car models, built with Next.js for seamless user experience.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Headless UI, Rapid Car API",
    link: "https://next-js-cars-showcase.vercel.app/",
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    github: "https://github.com/spsanchore13/next-js-cars-showcase",
  },
  {
    title: "Balaji Metal India (Freelance)",
    description:
      "Established in 2009, Balaji Metal India is an ISO 9001:2008 certified manufacturer and supplier of SS Railings, Stainless Steel Hand Rail, and Stainless Steel Railings. We also provide Stainless Steel Fabrication Service",
    technologies: "JavaScript, React, Next.js, Tailwind CSS",
    link: "http://balajimetalindia.in/",
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    github: "",
  },
];

const dummyImages = ["/nextjs.png", "/react.png", "/vercel.svg"];

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="w-full min-h-screen max-w-7xl mx-auto p-6 space-y-16"
      id="projects"
    >
      {/* Projects Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Project Portfolio
          </h2>
          <p className="text-muted-foreground">
            Showcasing my development projects and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title + index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-700 flex flex-col overflow-hidden"
              style={{ minHeight: 420 }}
            >
              {/* Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {[project.logo, ...dummyImages].map((img, imgIdx) => (
                    <CarouselItem
                      key={imgIdx}
                      className="flex items-center justify-center h-56 bg-gradient-to-br from-purple-100/40 to-purple-200/10 dark:from-zinc-800 dark:to-zinc-900"
                    >
                      <Image
                        src={img}
                        alt={project.title + " image " + imgIdx}
                        width={180}
                        height={180}
                        className="object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">
                      Technologies:
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.split(", ").map((tech, techIndex) => (
                      <Badge
                        key={tech + techIndex}
                        variant="secondary"
                        className="text-xs bg-purple-100 text-purple-800 hover:bg-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-400 transition-colors font-medium text-sm"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                    >
                      GitHub <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
