import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MobileToggle = () => {
  const links = [
    {
      name: "Home",
      url: "#hero",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Education",
      url: "#education",
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
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden transition-colors duration-300"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-background border-r border-border w-4/5 sm:w-1/2 transition-colors duration-300"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center py-4 border-b border-border">
            <Image
              src="/logo.png"
              width={120}
              height={8}
              alt="logo"
              className="transition-all dark:brightness-0 dark:invert"
            />
          </div>
          <nav className="flex-1 py-6">
            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="font-semibold text-primary hover:text-primary/80 transition-colors duration-300 text-lg py-3 px-4 rounded-lg hover:bg-accent"
                  href={link.url}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
          <div className="py-4 border-t border-border text-center text-sm text-muted-foreground">
            <p>Portfolio by Shantilal Patliya</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
