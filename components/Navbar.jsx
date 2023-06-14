"use client";

import "./Buttons.css";

import { usePathname } from "next/navigation";

import Image from "next/image";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState("");

  // console.log(active);

  const router = usePathname();

  // console.log(router);

  const links = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Github Stats",
      url: "#github",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className="w-full flex justify-between items-center fixed top-0 z-20 bg-white py-2 md:px-8  border-b border-gray-400">
      <div>
        <Image src="/logo.png" width={150} height={10} alt="logo" />
      </div>
      <div className="hidden md:flex justify-center items-center gap-4 md:gap-5">
        {links.map((link, index) => (
          <a key={`${link.name}-${index}`} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden md:hidden lg:block">
        <button className="buttonDownload">Resume</button>
      </div>

      <button
        className="flex absolute right-5 md:hidden lg:hidden xl:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
      </button>

      <div
        className={`w-full absolute  p-2 flex flex-col bg-white border-b border-gray-300  left-0 z-[-1] justify-end items-end pr-16 gap-4 md:hidden lg:hidden xl:hidden
        transition-all duration-500 ease-in ${
          toggle ? "left-0 top-16" : "left-[-800px] top-16"
        }
        `}
      >
        {links.map((link, index) => (
          <a key={`${link.name}-${index}`} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
