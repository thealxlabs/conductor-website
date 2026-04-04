"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ff6b2b",
  colorTo = "#ff9a5c",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[mask-image:radial-gradient(400px_circle_at_center,black,transparent)]",
        "[mask-composite:intersect]",
        "[mask-clip:padding-box,border-box]",
        "after:absolute after:inset-0 after:aspect-square after:[background:conic-gradient(from_calc(var(--anchor)*1deg),transparent_0%,var(--color-from)_70%,var(--color-to)_100%)]",
        "after:[animation-duration:var(--duration)]",
        "after:[animation-delay:var(--delay)]",
        "after:[animation-timing-function:linear]",
        "after:[animation-fill-mode:forwards]",
        "after:[mask:radial-gradient(400px_circle_at_center,white,_black)]",
        "after:[mask-composite:exclude]",
        "after:[mask-clip:padding-box,border-box]",
        "after:animate-border-beam",
        className,
      )}
    />
  );
}
