"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div id="contact" className="h-[90vh] w-full p-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Let's Connect
      </h2>

      <div className="h-full max-w-4xl mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-y-5 justify-center items-center">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Shantilal Patliya
          </h1>
          <p className="text-2xl lg:text-3xl">developer.shantilal@gmail.com</p>
          <p className="text-xl lg:text-2xl">+91 9784102014</p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/spsanchore13/")
              }
            >
              <Linkedin />
            </button>
            <button
              onClick={() => window.open("https://github.com/spsanchore13")}
            >
              <FaGithub className="h-5 w-5" />
            </button>
            {/* <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?to=shantilalpatliya18@gmail.com&compose=new#inbox?compose=GTvVlcRwQZlfqfnQwmnrDGcjsdKcFSQcXjBbKLwNfQNvmpFpblWKCVKfGxVNbRhdZjdCxjBSfFtFB"
              )
            }
          >
            <Mail />
          </button> */}
            <button
              onClick={() => window.open("https://twitter.com/spsanchore13")}
            >
              <Twitter />
            </button>
          </div>

          <p className="text-center">
            I'm always excited to discuss new opportunities, innovative
            projects, or just connect with fellow developers. Whether you have a
            project in mind or want to collaborate, feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
