"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SpotlightCard({ children, className, onMouseEnter, onMouseLeave, ...props }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    setIsFocused(true);
    setOpacity(1);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setIsFocused(false);
    setOpacity(0);
    props.onBlur?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpacity(1);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpacity(0);
    onMouseLeave?.(e);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-[12px] border border-white/10 bg-secondary/20 overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
