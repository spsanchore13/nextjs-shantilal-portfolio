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
import { useRef, useEffect, useState } from "react";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Fabits",
    description:
      "Designed and developed a modern, responsive investment platform with enhanced user engagement through intuitive UI patterns.",
    technologies:
      "JavaScript, React, Recoil, AWS, Tailwind, shadcn/ui, Material-UI",
    link: "https://mywealth.fabits.com/",
    logo: "/fabits.png",
    images: ["/fabits.png"],
    backgroundImage: "/fabits.png",
    github: "",
  },
  {
    title: "Namaste Nola Hotel (Freelance)",
    description:
      "Developed a fully functional restaurant website with a modern UI, leveraging Next.js for server-side rendering and performance optimization.",
    technologies: "JavaScript, React, Next.js, Tailwind CSS",
    link: "https://namastenola439.com/",
    logo: "/namaste-nola.png",
    images: ["/namaste-nola.png"],
    backgroundImage: "/namaste-nola.png",
    github: "",
  },
  {
    title: "Genius AI (Personal)",
    description:
      "AI SaaS: OpenAI-powered app for chat, code generation, image/audio/video creation. Sign up, pay via Stripe, with chat support from Crisp.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Node.js, Clerk Auth, Crisp Chat, OpenAI, DALL.E, Replicate AI",
    link: "https://next-js-ai-saas.vercel.app/",
    logo: "/genius-ai.png",
    images: ["/genius-ai.png"],
    backgroundImage: "/genius-ai.png",
    github: "https://mywealth.fabits.com/",
  },
  {
    title: "Full Stack Discord Clone (Personal)",
    description:
      "An app like Discord for creating servers, channels, text/audio/video communication, managing members, and supporting one-on-one/group chats with Livkit SDK.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Node.js, Clerk Auth, Socket.IO, shadecn/ui",
    link: "https://next-js-discord-clone.vercel.app/",
    logo: "/shanti1.png",
    images: ["/shanti1.png"],
    backgroundImage: "/shanti1.png",
    github: "https://github.com/spsanchore13/next.js-discord-clone",
  },
  {
    title: "CarHub (Personal)",
    description:
      "Car Showcase Next.js App: A visually appealing platform showcasing car models, built with Next.js for seamless user experience.",
    technologies:
      "HTML, CSS, Tailwind CSS, TypeScript, React.js, Next.js, Headless UI, Rapid Car API",
    link: "https://next-js-cars-showcase.vercel.app/",
    logo: "/car-hub.png",
    images: ["/car-hub.png"],
    backgroundImage: "/car-hub.png",
    github: "https://github.com/spsanchore13/next-js-cars-showcase",
  },
];

const dummyImages = ["/nextjs.png", "/react.png", "/vercel.svg"];

const Projects = () => {
  const cardRefs = useRef([]);
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className="w-full min-h-screen max-w-7xl mx-auto px-2 lg:px-10 space-y-16"
      id="projects"
    >
      {/* Projects Section */}
      <section className="mb-[150px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Project Portfolio
          </h2>
          <p className="text-muted-foreground">
            Showcasing my development projects and achievements
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <BentoGrid className="lg:grid-rows-3">
          {projects.map((project, index) => {
            // Custom grid class for bento effect
            let className = "";
            if (index === 0)
              className =
                "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3";
            else if (index === 1)
              className =
                "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4";
            else if (index === 2)
              className =
                "lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-4";
            else if (index === 3)
              className =
                "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2";
            else if (index === 4)
              className =
                "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3";
            else className = "";

            // Custom background (optional, can be improved)
            const background = (
              <>
                <Image
                  src={project.backgroundImage}
                  alt={project.title + " background"}
                  fill
                  className="object-cover opacity-30 blur-xs rounded-xl z-0"
                  style={{ pointerEvents: "none" }}
                />
              </>
            );

            return (
              <BentoCard
                key={project.title + index}
                name={project.title}
                description={project.description.split(".")[0]}
                className={
                  className + " relative flex flex-col justify-between group"
                }
                background={background}
                // href and cta removed, only expand button remains
              >
                {/* Expand button only on hover */}
                <Button
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs font-semibold opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                  onClick={() => setExpanded(index)}
                  tabIndex={0}
                >
                  Expand
                </Button>
                {/* Modal for expanded project details */}
                {expanded === index && (
                  <Dialog open={true} onOpenChange={() => setExpanded(null)}>
                    <DialogContent className="max-w-lg w-full">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-wrap gap-1 mb-4 mt-4">
                        {project.technologies
                          .split(", ")
                          .map((tech, techIndex) => (
                            <Badge
                              key={tech + techIndex}
                              variant="secondary"
                              className="text-xs bg-purple-100 text-purple-800 hover:bg-purple-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.images &&
                          project.images.map((img, imgIdx) => (
                            <Image
                              key={imgIdx}
                              src={img}
                              alt={project.title + " image " + imgIdx}
                              width={180}
                              height={120}
                              className="rounded-lg object-cover border"
                            />
                          ))}
                      </div>
                      <div className="flex gap-4 mb-4">
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
                      <DialogClose asChild>
                        <button className="absolute top-2 right-2 text-lg font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                          ×
                        </button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                )}
              </BentoCard>
            );
          })}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Projects;
