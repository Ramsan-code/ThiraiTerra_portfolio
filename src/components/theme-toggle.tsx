"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-16 rounded-full border border-foreground/10 bg-secondary/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-9 w-16 cursor-pointer items-center rounded-full border border-foreground/10 bg-secondary/50 p-1 transition-colors hover:border-foreground/20"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-2 text-[8px] font-bold uppercase tracking-tighter text-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
        <span>Light</span>
        <span>Dark</span>
      </div>
      
      <motion.div
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background border border-foreground/10 shadow-sm"
        initial={false}
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              className="h-3 w-3 bg-foreground"
              style={{ borderRadius: "2px" }} // Square for Dark
            />
          ) : (
             <motion.div
              key="light"
              initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
              className="h-3 w-3 rounded-full bg-foreground" // Circle for Light
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
