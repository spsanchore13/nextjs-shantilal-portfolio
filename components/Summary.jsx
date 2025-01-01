"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Summary = () => {
  return (
    <section id="about" className="section py-10 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Professional Summary
      </motion.h2>
      <Card className="border-none shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <Image
                src="/shanti1.png"
                alt="Shantilal Patliya"
                width={300}
                height={300}
                className="rounded-full object-contain shadow-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Shantilal Patliya
              </h3>
              <p className="text-gray-600 mb-4">
                Full Stack Developer with 1.8 years of experience specializing
                in MERN stack technologies. Skilled in building dynamic,
                user-centric web applications using React, Node.js, and MongoDB.
                Proven ability to lead projects, improve user engagement, and
                deliver scalable solutions on time. Strong focus on
                problem-solving, UI design, and backend development.
              </p>
              <p className="text-gray-600 mb-4">
                My experience includes working on investment platforms,
                competitive programming platforms, and freelance projects, where
                I've consistently delivered high-quality solutions that meet
                client needs and improve user experiences.
              </p>
              <p className="text-gray-600">
                I'm passionate about staying up-to-date with the latest
                technologies and best practices in web development, and I'm
                always eager to take on new challenges and learn new skills.
              </p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Summary;
