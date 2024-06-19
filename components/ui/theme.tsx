"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Function to handle system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // Add event listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [mounted, setTheme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-center my-4">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-gray-200 dark:text-gray-900 rounded-xl transition-all duration-300"
      >
        <FontAwesomeIcon icon={resolvedTheme === "dark" ? faSun : faMoon} size="lg" />
      </button>
    </div>
  );
}