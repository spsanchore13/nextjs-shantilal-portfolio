import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Loader from "./Loader";

const Hero = () => {
  return (
    <div className="hero h-screen ">
      <div className="flex flex-col justify-center align-middle text-center">
        <p className="p-2 text-3xl sm:text-2xl">Hi, It's Me</p>

        <h1 className="heading-title relative z-10 text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text">
          I'm Shanti lal
        </h1>
        <p className="p-2 text-2xl sm:text-xl">
          Full Stack Software Engineer(React/Express)
        </p>

        <div className="flex flex-row gap-3 p-2 justify-center">
          <button className="border border-blue-400 p-1 rounded-full hover:bg-stone-300">
            <FaGithub size="20px" />
          </button>
          <button className="border border-blue-400 p-1 rounded-full">
            <FaLinkedin size="20px" />
          </button>
          <button className="border border-blue-400 p-1 rounded-full">
            <FaTwitter size="20px" />
          </button>

          <button className="border border-blue-400 p-1 rounded-full">
            <FaInstagram size="20px" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://media.licdn.com/dms/image/D5603AQHybWp2yIv3WQ/profile-displayphoto-shrink_400_400/0/1684164063701?e=1692230400&v=beta&t=veaF0eQOv9dmLovvUuufuETMMwQYXcrHtIuC8k-cVRU"
          width={300}
          height={300}
          className="object-contain rounded-full border border-gray-100"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Hero;
