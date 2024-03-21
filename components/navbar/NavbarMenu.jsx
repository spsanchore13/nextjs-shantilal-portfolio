import React from "react";

const NavbarMenu = ({ cls }) => {
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
      name: "Github Summery",
      url: "#github-summery",
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
    <div className={`${cls} md:flex gap-5`}>
      {links.map((link, index) => {
        return (
          <a
            className="font-semibold dark:font-thin text-teal-500 hover:text-teal-300 dark:text-white dark:hover:text-zinc-300 text-md"
            href={link.url}
            key={index}
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default NavbarMenu;
