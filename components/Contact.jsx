"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
      >
        Let's <span className="text-teal-500">Connect</span>
      </motion.h2>

      <div className="flex flex-col gap-y-5 justify-center items-center">
        <h1 className="text-5xl">Shantilal Patliya</h1>
        <p className="text-3xl">developer.shantilal@gmail.com</p>
        <p className="text-2xl">+91 9784102014</p>

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
      </div>
    </div>
  );
};

export default Contact;
