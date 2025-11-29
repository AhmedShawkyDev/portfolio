"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={Toggle}
      className="px-3 py-2 text-yellow-500 rounded"
    >
      {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
    </button>
  );
}
