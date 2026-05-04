"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-border bg-secondary/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border bg-secondary text-foreground transition-all duration-200 hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={isDark ? "Switch to white theme" : "Switch to gray theme"}
      title="Toggle theme"
    >
      <svg
        className={`absolute h-5 w-5 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isDark
            ? "translate-y-0 rotate-0 opacity-100"
            : "translate-y-[100%] rotate-45 opacity-0"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>
      <svg
        className={`absolute h-5 w-5 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isDark
            ? "-translate-y-[100%] -rotate-45 opacity-0"
            : "translate-y-0 rotate-0 opacity-100"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  );
}
