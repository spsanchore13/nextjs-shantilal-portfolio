"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen w-full p-5 md:p-10 flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 text-foreground">
          Let's Connect
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-foreground">
            Shantilal Patliya
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mb-2 text-foreground">
            developer.shantilal@gmail.com
          </p>
          <p className="text-base md:text-xl lg:text-2xl mb-6 text-foreground">
            +91 9784102014
          </p>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/spsanchore13/")
              }
              className="p-2 hover:scale-110 transition-all duration-300 text-foreground hover:text-primary"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() => window.open("https://github.com/spsanchore13")}
              className="p-2 hover:scale-110 transition-all duration-300 text-foreground hover:text-primary"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() => window.open("https://twitter.com/spsanchore13")}
              className="p-2 hover:scale-110 transition-all duration-300 text-foreground hover:text-primary"
            >
              <Twitter className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            I'm always excited to discuss new opportunities, innovative
            projects, or just connect with fellow developers. Whether you have a
            project in mind or want to collaborate, feel free to reach out!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
