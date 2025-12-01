"use client";


import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={Toggle}
      className="px-3 py-2 text-yellow-500 rounded cursor-pointer"
    >
      {theme === "dark" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-white" />}
    </button>
  );
}
