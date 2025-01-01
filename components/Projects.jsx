"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

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

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Project Portfolio
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between items-center border"
          >
            {/* <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={80}
              height={80}
              className="mb-4"
            /> */}
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm md:text-base">
              {project.description}
            </p>
            <div className="text-gray-500 mb-4 text-center text-sm md:text-base">
              <span className="text-gray-600 font-semibold">Technologies:</span>{" "}
              {project.technologies}
            </div>
            <div className="flex gap-x-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline text-sm md:text-base flex items-center gap-x-2"
              >
                Live <ExternalLink className="h-5 w-5" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline text-sm md:text-base flex items-center gap-x-2"
                >
                  Github <FaGithub className="h-5 w-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
