"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    degree: "Full Stack MERN Development (Full-Time)",
    institution: "Masai School",
    location: "Bengaluru",
    duration: "April 2022 - Jan 2023",
  },
  {
    degree: "Computer Science & Engineering",
    institution: "Rajasthan Technical University",
    location: "Kota",
    duration: "July 2015 - July 2019",
  },
  {
    degree: "12th Science Maths",
    institution: "Gayatri Vidhya Mandir",
    location: "Sanchore",
    duration: "July 2014 - July 2015",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Education Background
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500">{edu.location}</p>
                <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
