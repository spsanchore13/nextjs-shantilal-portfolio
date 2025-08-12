"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="icon"
        className="theme_button transition-colors duration-300"
        disabled
      >
        <Sun className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme_button transition-colors duration-300"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
