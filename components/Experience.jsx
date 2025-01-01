"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Fabits (Shareway Securities Pvt. Ltd.)",
    date: "May 2024 - Present",
    description: [
      "Directed a team of 2 developers to design and launch an intuitive investment platform, resulting in a 20% boost in user engagement and conversion rates.",
      "Revamped the platform's UI, improving workflows and enhancing user experience by using React and Capacitor.js. Integrated biometric authentication to ensure robust security.",
      "Successfully launched a mutual fund investing solution within tight deadlines, delivering seamless onboarding and comprehensive functionality.",
      "Improved platform efficiency and accessibility, contributing to increased user satisfaction and higher adoption rates.",
    ],
    logo: "https://d3lgi69rk7563.cloudfront.net/svgs/logo.svg",
    link: "https://fabits.com/",
  },
  {
    title: "Full Stack Developer",
    company: "Masai School",
    date: "Feb 2023 - Feb 2024",
    description: [
      "Designed and implemented 250+ MERN stack mini projects and applications for a competitive programming platform, integrating end-to-end testing with Cypress and React Testing Library (RTL), reducing manual solution verification by 90% and lowering operational costs.",
      "Enhanced API testing processes by automating workflows using Cypress and Jest, improving efficiency by 40% and ensuring platform stability.",
      "Developed 50+ tailored interview assessment guides and 450+ interview preparation problems, significantly enhancing candidate readiness and driving higher platform engagement.",
    ],
    logo: "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp",
    link: "https://www.masaischool.com/",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Work Experience
      </motion.h2>
      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-center md:justify-between md:items-start border"
          >
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={80}
              height={80}
              className="mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
                {exp.title}
              </h3>
              <p className="text-gray-600 mb-2 text-center md:text-left hover:underline">
                <a href={exp.link} target="_blank">
                  {exp.company}
                </a>
              </p>
              <p className="text-gray-500 mb-4 text-center md:text-left">
                {exp.date}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
