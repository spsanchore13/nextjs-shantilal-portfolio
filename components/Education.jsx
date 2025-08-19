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

const educationData = [
  {
    type: "education",
    degree: "Full Stack MERN Development (Full-Time)",
    institution: "Masai School",
    location: "Bengaluru",
    duration: "April 2022 - Jan 2023",
  },
  {
    type: "education",
    degree: "Computer Science & Engineering",
    institution: "Rajasthan Technical University",
    location: "Kota",
    duration: "July 2015 - July 2019",
  },
];

const Education = () => {
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    // Remove gsap and ScrollTrigger imports and all related animation logic from this file.
  }, []);

  return (
    <div className="w-full min-h-screen max-w-5xl mx-auto px-2 lg:px-10 flex flex-col items-center justify-center">
      {/* Education Section */}
      <section className="w-full mb-[150px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education
          </h2>
          <p className="text-muted-foreground">
            My academic journey and qualifications
          </p>
        </div>
        {/* Timeline */}
        <div className="relative w-full">
          {/* Timeline Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-green-500 via-teal-400 to-teal-700 rounded-full z-0"
            style={{ minHeight: "100%" }}
          ></div>
          <div className="flex flex-col gap-16 w-full z-10">
            {educationData.map((edu, index) => (
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
                            <GraduationCap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-lg">
                              {edu.degree}
                            </h3>
                            <p className="text-green-600 font-semibold mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                          <Calendar className="w-4 h-4 ml-4" />
                          <span>{edu.duration}</span>
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
                    className="w-7 h-7 bg-gradient-to-br from-green-400 via-teal-400 to-teal-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  >
                    <span className="block w-3 h-3 bg-white rounded-full"></span>
                  </div>
                  {/* Timeline line segment below dot (except last) */}
                  {index !== educationData.length - 1 && (
                    <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-green-400 via-teal-400 to-teal-700"></div>
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
                            <GraduationCap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-lg">
                              {edu.degree}
                            </h3>
                            <p className="text-green-600 font-semibold mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                          <Calendar className="w-4 h-4 ml-4" />
                          <span>{edu.duration}</span>
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

export default Education;
