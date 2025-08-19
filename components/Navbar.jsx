"use client";

import Image from "next/image";
import MobileToggle from "./MobileToggle";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  FileDown,
  Maximize2,
  Minimize2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";

// Remove gsap, @gsap/react, and ScrollTrigger imports and all related animation logic from this file.

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
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const shortcutTabRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollTopBtnRef = useRef(null);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const sectionIds = [
    "hero",
    "about",
    // "github", // Uncomment if you have this section
    "experience",
    "projects",
    "skills",
    "contact",
  ];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && shortcutTabRef.current) {
      // gsap.fromTo(
      //   shortcutTabRef.current,
      //   { y: 40, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      // );
    }
  }, [mounted]);

  useEffect(() => {
    // const tl = gsap.timeline();
    // tl.from(".logo_container", { x: -100, opacity: 0, duration: 0.5 })
    //   .from(".nav_links a", {
    //     y: -100,
    //     opacity: 0,
    //     duration: 0.5,
    //     stagger: 0.5,
    //   })
    //   .from(".resume_download", { x: 100, opacity: 0, duration: 0.5 })
    //   .from(".theme_button", { x: 100, opacity: 0, duration: 0.5 });
  });

  useEffect(() => {
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
        const link = document.createElement("a");
        link.href = "/Shantilal_Frontend_Resume.pdf";
        link.download = "Shantilal_Frontend_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (navbarRef.current) {
            if (currentScrollY <= 0) {
              setNavbarVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
              setNavbarVisible(false);
            } else if (
              currentScrollY < lastScrollY &&
              lastScrollY - currentScrollY > 50
            ) {
              setNavbarVisible(true);
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
  }, [lastScrollY, mounted]);

  useEffect(() => {
    if (showScrollTop && scrollTopBtnRef.current) {
      // gsap.to(scrollTopBtnRef.current, {
      //   y: 0,
      //   opacity: 1,
      //   duration: 0.4,
      //   ease: "power2.out",
      // });
    } else if (scrollTopBtnRef.current) {
      // gsap.to(scrollTopBtnRef.current, {
      //   y: 40,
      //   opacity: 0,
      //   duration: 0.4,
      //   ease: "power2.out",
      // });
    }
  }, [showScrollTop]);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

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

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shantilal_Frontend_Resume.pdf";
    link.download = "Shantilal_Frontend_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Also open in new tab
    window.open("/Shantilal_Frontend_Resume.pdf", "_blank");
  };

  // Improved: Debounced scroll handler and robust section detection
  useEffect(() => {
    let timeoutId = null;
    function onScroll() {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        let closestIdx = 0;
        let minDistance = Infinity;
        sectionIds.forEach((id, idx) => {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Distance from top of viewport (positive if below, negative if above)
            const distance = Math.abs(rect.top);
            // Only consider sections that are at least partially in view
            if (
              rect.top <= window.innerHeight * 0.5 &&
              distance < minDistance
            ) {
              minDistance = distance;
              closestIdx = idx;
            }
          }
        });
        setCurrentSection(closestIdx);
      }, 50); // Debounce for performance
    }
    window.addEventListener("scroll", onScroll);
    // Initial check
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (index) => {
    const el = document.getElementById(sectionIds[index]);
    const navbar = document.getElementById("main-navbar");
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      // Scroll to section top minus navbar height
      window.scrollTo({
        top: rect.top + scrollTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Fixed Fullscreen Button */}
      {mounted && (
        <button
          onClick={handleFullscreen}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
      {mounted && (
        <button
          ref={scrollTopBtnRef}
          onClick={handleScrollTop}
          className="fixed left-4 bottom-6 z-50 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Scroll to top"
          type="button"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      {/* Fixed Shortcuts Button */}
      {mounted && (
        <button
          onClick={() => setShowShortcuts((prev) => !prev)}
          className="fixed right-6 bottom-6 z-50 text-white rounded-full shadow-lg py-3 px-4 flex items-center justify-center transition-colors"
          style={{
            background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
          }}
          aria-label="Show Shortcuts"
          type="button"
        >
          /shortcuts
        </button>
      )}
      {/* Fixed Arrow Up/Down Buttons */}
      <div
        ref={navbarRef}
        id="main-navbar"
        className={`navbar_container w-full flex justify-between bg-white dark:bg-[#020817] items-center sticky top-0 py-2 px-2 lg:px-10 z-30 transition-transform duration-300 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ willChange: "transform" }}
      >
        <MobileToggle />
        <div className="hidden lg:flex logo_container">
          <Image src="/logo.png" width={150} height={10} alt="logo" />
        </div>
        <nav className="hidden lg:flex gap-2 nav_links">
          {links.map((link, index) => (
            <a
              className={`relative font-semibold text-[18px] px-4 py-2 rounded-full transition-all duration-200
                ${
                  currentSection === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-black dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-600"
                }
              `}
              href={link.url}
              key={link.name + index}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className="resume_download"
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
      {/* Shortcut tab */}
      {mounted && showShortcuts && (
        <div
          ref={shortcutTabRef}
          className="fixed bottom-6 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 z-50 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-4 max-w-xs md:max-w-2xl text-sm text-zinc-900 dark:text-zinc-100 backdrop-blur-md flex flex-col"
          style={{ minWidth: "220px" }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold flex items-center gap-2">
              <span>⚡ Shortcuts</span>
            </div>
            <button
              onClick={() => setShowShortcuts(false)}
              className="ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
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
