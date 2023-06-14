"use client";

import "./Buttons.css";

import { usePathname } from "next/navigation";

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
    <div className="w-full flex justify-between items-center fixed top-0 z-10 bg-white py-2 px-16  border-b border-gray-400">
      <div>
        <h1 className="text-gray-400">Shanti lal</h1>
      </div>
      <div className="flex justify-center gap-8">
        {links.map((link, index) => (
          <a key={`${link.name}-${index}`} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
      <div>
        <button className="buttonDownload">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
