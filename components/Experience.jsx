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
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "experience",
    title: "Frontend Developer",
    company: "Fabits",
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
    type: "experience",
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
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });
    dotRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.15 + 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div
      className="w-full min-h-screen max-w-5xl mx-auto p-6 flex flex-col items-center justify-center"
      id="experience"
    >
      <section className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            My career journey and professional achievements
          </p>
        </div>
        {/* Timeline */}
        <div className="relative w-full">
          {/* Timeline Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-400 to-purple-700 rounded-full z-0"
            style={{ minHeight: "100%" }}
          ></div>
          <div className="flex flex-col gap-16 w-full z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative w-full flex md:grid md:grid-cols-3 md:items-center ${
                  index !== 0 ? "md:-mt-[18%]" : ""
                }`}
              >
                {/* Left Card (odd index) */}
                {index % 2 === 0 ? (
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="md:col-span-1 md:justify-self-end w-full max-w-xl z-10"
                  >
                    <Card className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 p-0 transition-all duration-300">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {exp.logo ? (
                              <Image
                                src={exp.logo || "/placeholder.svg"}
                                alt={`${exp.company} logo`}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            ) : (
                              <Briefcase className="w-6 h-6 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-lg">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-400 transition-colors flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.date}</span>
                          {exp.date.includes("Present") && (
                            <Badge
                              variant="secondary"
                              className="ml-2 bg-green-100 text-green-800"
                            >
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-2 flex-1 overflow-y-auto">
                          {exp.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="md:col-span-1"></div>
                )}
                {/* Timeline Dot */}
                <div className="flex flex-col items-center md:col-span-1 md:justify-self-center z-20">
                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className="w-7 h-7 bg-gradient-to-br from-blue-400 via-purple-400 to-purple-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  >
                    <span className="block w-3 h-3 bg-white rounded-full"></span>
                  </div>
                  {/* Timeline line segment below dot (except last) */}
                  {index !== experiences.length - 1 && (
                    <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-blue-400 via-purple-400 to-purple-700"></div>
                  )}
                </div>
                {/* Right Card (even index) */}
                {index % 2 === 1 ? (
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="md:col-span-1 md:justify-self-start w-full max-w-xl z-10"
                  >
                    <Card className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 p-0 transition-all duration-300">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {exp.logo ? (
                              <Image
                                src={exp.logo || "/placeholder.svg"}
                                alt={`${exp.company} logo`}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            ) : (
                              <Briefcase className="w-6 h-6 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-lg">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-400 transition-colors flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.date}</span>
                          {exp.date.includes("Present") && (
                            <Badge
                              variant="secondary"
                              className="ml-2 bg-green-100 text-green-800"
                            >
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-2 flex-1 overflow-y-auto">
                          {exp.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="md:col-span-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
