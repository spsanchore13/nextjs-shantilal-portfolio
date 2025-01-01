"use client";

import Image from "next/image";
import MobileToggle from "./MobileToggle";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
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
      name: "Github",
      url: "#github",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Skills",
      url: "#skills",
    },

    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className="w-full flex justify-between bg-white dark:bg-[#020817] items-center sticky top-0 py-2 px-10 z-30">
      <MobileToggle />

      <div className="hidden lg:flex">
        <Image src="/logo.png" width={150} height={10} alt="logo" />
      </div>

      <div className={`hidden lg:flex gap-5`}>
        {links.map((link, index) => {
          return (
            <a
              className="font-medium text-teal-500 hover:text-teal-300  dark:hover:text-zinc-300 text-[18px]"
              href={link.url}
              key={index}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div className="flex gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a target="_blank" href="/Shantilal_Resume.pdf" download>
                <Button
                  variant="icon"
                  onClick={() => window.open("/Shantilal_Resume.pdf")}
                >
                  <FileDown />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>{theme}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Navbar;
