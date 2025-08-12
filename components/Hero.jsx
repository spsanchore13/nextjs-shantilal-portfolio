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

const RESUME_VIEW_LINK =
  "https://drive.google.com/file/d/1HFvo7Od7uR4sdRcczzEsKw-ODhV1jMXl/view?usp=sharing";
const RESUME_DOWNLOAD_LINK =
  "https://drive.google.com/uc?export=download&id=1HFvo7Od7uR4sdRcczzEsKw-ODhV1jMXl";

const Hero = () => {
  const iconMap = [
    {
      title: "Github",
      icon: (
        <FaGithub
          size="24px"
          className="transition-colors duration-300 hover:text-muted-foreground"
        />
      ),
      url: "https://github.com/spsanchore13",
    },
    {
      title: "Linkedin",
      icon: (
        <FaLinkedin
          size="24px"
          className="transition-colors duration-300 hover:text-muted-foreground"
        />
      ),
      url: "https://www.linkedin.com/in/spsanchore13/",
    },
    {
      title: "Twitter",
      icon: (
        <FaTwitter
          size="24px"
          className="transition-colors duration-300 hover:text-muted-foreground"
        />
      ),
      url: "https://twitter.com/spsanchore13",
    },
    {
      title: "Resume",
      icon: (
        <FileDown
          size="24px"
          className="transition-colors duration-300 hover:text-muted-foreground"
        />
      ),
      url: "/Shantilal_Frontend_Resume.pdf",
    },
  ];

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
    <section
      id="hero"
      className="min-h-[90vh] md:min-h-screen w-full p-5 md:p-10 flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-8 xl:gap-0"
    >
      <div className="flex flex-col justify-center gap-3 align-middle text-center xl:text-left xl:items-start">
        <p className="text-2xl md:text-3xl text-foreground">Hi 👋, I'm</p>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold relative text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text leading-tight">
          Shantilal Patliya
        </h1>
        <p className="text-lg md:text-2xl xl:text-3xl max-w-3xl text-muted-foreground">
          Frontend Developer building accessible, performant, and scalable
          interfaces.
        </p>

        <div className="flex flex-row gap-3 md:gap-5 justify-center xl:justify-start mt-4">
          {iconMap.map((icon, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                  {icon.title === "Resume" ? (
                    <Button
                      variant="icon"
                      onClick={handleResumeDownload}
                      className="w-12 h-12 md:w-14 md:h-14 transition-colors duration-300"
                    >
                      {icon.icon}
                    </Button>
                  ) : (
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {icon.icon}
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

      <div className="flex justify-center xl:justify-end">
        <Image
          src="/shanti1.png"
          width={300}
          height={300}
          alt="Shantilal Patliya"
          className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
