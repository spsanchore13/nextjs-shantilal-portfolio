import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="p-10">
      <h1 className="text-3xl text-center">
        Let's <span className="text-teal-400">Connect</span>
      </h1>

      <div className="flex justify-between p-10">
        <div>
          <div>
            <h1>Shantilal Patliya</h1>
            <p>shantilalpatliya18@gmail.com</p>
            <p>+91 9784102014</p>

            <div className="flex gap-4">
              <button>
                <Linkedin />
              </button>
              <button>
                <Github />
              </button>
              <button>
                <Mail />
              </button>
              <button>
                <Twitter />
              </button>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
