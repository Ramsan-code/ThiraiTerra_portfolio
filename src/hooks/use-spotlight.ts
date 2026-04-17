"use client";

import { useState, useEffect, useCallback } from "react";

export function useSpotlight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const onMouseEnter = useCallback(() => setOpacity(1), []);
  const onMouseLeave = useCallback(() => setOpacity(0), []);

  return {
    style: {
      "--x": `${coords.x}px`,
      "--y": `${coords.y}px`,
      "--spotlight-opacity": opacity,
    } as React.CSSProperties,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  };
}
