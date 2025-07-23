import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// import myResume from "@/public/Shantilal_Resume.pdf";

const Hero = () => {
  const iconMap = [
    {
      title: "Github",
      icon: <FaGithub size="24px" className="hover:text-gray-400" />,
      url: "https://github.com/spsanchore13",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin size="24px" className="hover:text-gray-400" />,
      url: "https://www.linkedin.com/in/spsanchore13/",
    },
    {
      title: "Twitter",
      icon: <FaTwitter size="24px" className="hover:text-gray-400" />,
      url: "https://twitter.com/spsanchore13",
    },
    {
      title: "Resume",
      icon: <FileDown size="24px" className="hover:text-gray-400" />,
      url: "/Shantilal_Frontend_Resume.pdf",
    },
  ];

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

  return (
    <section
      id="hero"
      className="md:h-screen flex flex-col xl:flex-row justify-evenly items-center"
    >
      <div className="flex flex-col justify-center gap-3 align-middle text-center">
        <p className="p-2 text-3xl">Hi 👋, I'm</p>

        <h1 className="text-6xl md:text-7xl font-extrabold relative text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text">
          Shantilal Patliya
        </h1>
        <p className="p-2 text-2xl md:text-3xl max-w-3xl">
          Frontend Developer building accessible, performant, and scalable
          interfaces.
        </p>

        <div className="flex flex-row gap-5 p-2 justify-center">
          {iconMap.map((icon, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger asChild>
                  {icon.title === "Resume" ? (
                    <Button variant="icon" onClick={handleResumeDownload}>
                      {icon.icon}
                    </Button>
                  ) : (
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent p-2">
                        {icon.icon}
                      </span>
                    </a>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <div>
        <Image src="/shanti1.png" width={400} height={400} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
