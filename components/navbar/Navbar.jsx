"use client";

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import MobileToggle from "../MobileToggle";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex justify-between bg-white dark:bg-[#020817] items-center sticky top-0 py-2 md:px-8 z-30">
      <MobileToggle />

      <div>
        <Image src="/logo.png" width={150} height={10} alt="logo" />
      </div>

      <NavbarMenu cls="hidden" />

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
