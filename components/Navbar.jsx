"use client";

import Image from "next/image";
import MobileToggle from "./MobileToggle";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { FileDown, Maximize2, Minimize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveal(ref, animation = {}, dependencies = []) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
      // Default animation: fade in and slide up
      tl.from(ref.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        ...animation,
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line
  }, dependencies);
}

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
    // {
    //   name: "Github",
    //   url: "#github",
    // },
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

  const navbarRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const shortcutTabRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollTopBtnRef = useRef(null);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering client-only content until mounted
  const isClient = mounted;

  useGSAP(() => {
    if (isClient && shortcutTabRef.current) {
      gsap.fromTo(
        shortcutTabRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isClient]);

  useGSAP(() => {
    if (!isClient || !navbarRef.current) return;

    const tl = gsap.timeline();

    tl.from(".logo_container", {
      x: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })
      .from(
        ".nav_links a",
        {
          y: -30,
          opacity: 0,
          duration: 0.25,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .from(
        ".resume_download",
        {
          x: 50,
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .from(
        ".theme_button",
        {
          x: 50,
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.1"
      );
  });

  useEffect(() => {
    if (!isClient) return;

    function handleKeyDown(e) {
      const isMac = /Mac/i.test(navigator.userAgent);
      const key = e.key.toLowerCase();
      // Resume: Ctrl/Cmd + Shift + R
      const resumeShortcut =
        (isMac && e.metaKey && e.shiftKey && key === "r") ||
        (!isMac && e.ctrlKey && e.shiftKey && key === "r");
      // LinkedIn: Ctrl/Cmd + Shift + L
      const linkedinShortcut =
        (isMac && e.metaKey && e.shiftKey && key === "l") ||
        (!isMac && e.ctrlKey && e.shiftKey && key === "l");
      // GitHub: Ctrl/Cmd + Shift + G
      const githubShortcut =
        (isMac && e.metaKey && e.shiftKey && key === "g") ||
        (!isMac && e.ctrlKey && e.shiftKey && key === "g");
      if (resumeShortcut) {
        e.preventDefault();
        // Download (direct)
        const link = document.createElement("a");
        link.href = RESUME_DOWNLOAD_LINK;
        link.download = "Shantilal_Frontend_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Open in new tab (view)
        window.open(RESUME_VIEW_LINK, "_blank");
      } else if (linkedinShortcut) {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/spsanchore13/", "_blank");
      } else if (githubShortcut) {
        e.preventDefault();
        window.open("https://github.com/spsanchore13", "_blank");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsAtTop(currentScrollY <= 5); // Reduced threshold for more responsive border

          if (navbarRef.current) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
              gsap.to(navbarRef.current, {
                y: -100,
                duration: 0.2,
                ease: "power2.out",
              });
            } else {
              gsap.to(navbarRef.current, {
                y: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            }
          }
          setLastScrollY(currentScrollY);
          setShowScrollTop(currentScrollY > 200);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, isClient]);

  useGSAP(() => {
    if (showScrollTop && scrollTopBtnRef.current) {
      gsap.to(scrollTopBtnRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    } else if (scrollTopBtnRef.current) {
      gsap.to(scrollTopBtnRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [showScrollTop]);

  useEffect(() => {
    if (!isClient) return;

    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [isClient]);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const RESUME_VIEW_LINK =
    "https://drive.google.com/file/d/1HFvo7Od7uR4sdRcczzEsKw-ODhV1jMXl/view?usp=sharing";
  const RESUME_DOWNLOAD_LINK =
    "https://drive.google.com/uc?export=download&id=1HFvo7Od7uR4sdRcczzEsKw-ODhV1jMXl";

  const handleResumeDownload = () => {
    // Open in new tab (view)
    window.open(RESUME_VIEW_LINK, "_blank");
    // Download (direct)
    const link = document.createElement("a");
    link.href = RESUME_DOWNLOAD_LINK;
    link.download = "Shantilal_Frontend_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Fixed Fullscreen Button - Only visible on web/desktop */}
      {isClient && (
        <button
          onClick={handleFullscreen}
          className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 border border-border rounded-full shadow-lg p-3 items-center justify-center hover:bg-accent transition-colors duration-300"
          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          type="button"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      )}
      {/* Fixed Scroll To Top Button */}
      {isClient && (
        <button
          ref={scrollTopBtnRef}
          onClick={handleScrollTop}
          className="fixed left-4 bottom-6 z-50 bg-background/90 border border-border rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-accent transition-colors duration-300"
          aria-label="Scroll to top"
          type="button"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
      {/* Fixed Shortcuts Button - Only visible on web/desktop */}
      {isClient && (
        <button
          onClick={() => setShowShortcuts((prev) => !prev)}
          className="hidden lg:flex fixed right-6 bottom-6 z-50 text-primary-foreground rounded-full shadow-lg py-3 px-4 items-center justify-center transition-colors duration-300"
          style={{
            background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
          }}
          aria-label="Show Shortcuts"
          type="button"
        >
          /shortcuts
        </button>
      )}
      <div
        ref={navbarRef}
        id="main-navbar"
        className={`navbar_container w-full grid grid-cols-3 bg-background/95 backdrop-blur-sm items-center sticky top-0 py-2 px-2 lg:px-10 z-30 transition-all duration-300 ${
          !isAtTop ? "border-b" : ""
        }`}
        style={{ willChange: "transform" }}
      >
        {/* Left Section - Logo */}
        <div className="flex justify-start items-center">
          <MobileToggle />
          <div className="hidden lg:flex logo_container ml-4">
            <Image
              src="/logo.png"
              width={150}
              height={10}
              alt="logo"
              className="transition-all dark:brightness-0 dark:invert"
            />
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex justify-center items-center">
          <nav className="flex gap-x-6 nav_links">
            {links.map((link, index) => (
              <a
                className="font-medium text-primary hover:text-primary/80 transition-colors duration-300 text-[18px] whitespace-nowrap"
                href={link.url}
                key={link.name + index}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex justify-end gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className="resume_download transition-colors duration-300"
                  variant="icon"
                  onClick={handleResumeDownload}
                >
                  <FileDown />
                </Button>
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
      {/* Shortcut tab - Only visible on web/desktop */}
      {isClient && showShortcuts && (
        <div
          ref={shortcutTabRef}
          className="hidden lg:flex fixed bottom-6 right-6 z-50 bg-background/90 border border-border rounded-lg shadow-lg p-4 max-w-xs md:max-w-2xl text-sm text-foreground backdrop-blur-md flex flex-col transition-colors duration-300"
          style={{ minWidth: "220px" }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold flex items-center gap-2">
              <span>⚡ Shortcuts</span>
            </div>
            <button
              onClick={() => setShowShortcuts(false)}
              className="ml-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Close Shortcuts"
              type="button"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-6">
              <span className="font-mono whitespace-nowrap">
                Ctrl/Cmd + Shift + R
              </span>
              <span className="truncate">Resume</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="font-mono whitespace-nowrap">
                Ctrl/Cmd + Shift + L
              </span>
              <span className="truncate">LinkedIn</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="font-mono whitespace-nowrap">
                Ctrl/Cmd + Shift + G
              </span>
              <span className="truncate">GitHub</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
