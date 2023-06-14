"use client";

import "./Buttons.css";

import { usePathname } from "next/navigation";

import Image from "next/image";

const Navbar = () => {
  const router = usePathname();

  console.log(router);

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
    <div className="w-full flex justify-between items-center fixed top-0 z-20 bg-white py-2 px-8 md:px-8  border-b border-gray-400">
      <div>
        <Image src="/logo.png" width={150} height={10} alt="logo" />
      </div>
      <div className="flex justify-center items-center gap-4 md:gap-5">
        {links.map((link, index) => (
          <a key={`${link.name}-${index}`} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex md:hidden lg:block">
        <button className="buttonDownload">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
