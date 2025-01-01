import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MobileToggle = () => {
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
      name: "Exp.",
      url: "#github",
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
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white w-1/2">
        <div>
          <Image src="/logo.png" width={150} height={10} alt="logo" />
        </div>
        <div className={`flex flex-col gap-y-4 my-6`}>
          {links.map((link, index) => {
            return (
              <a
                className="font-semibold text-teal-500 hover:text-teal-300 text-[18px]"
                href={link.url}
                key={index}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
