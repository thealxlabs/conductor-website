"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
  animateOnView?: boolean;
}

export function HyperText({
  text,
  className,
  duration = 800,
  animateOnView = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const scramble = (finalText: string, durationMs: number) => {
    setIsAnimating(true);
    const iterations = Math.ceil(durationMs / 50);
    let iteration = 0;

    const interval = setInterval(() => {
      iteration++;
      const progress = iteration / iterations;
      let result = "";

      for (let i = 0; i < finalText.length; i++) {
        if (finalText[i] === " ") {
          result += " ";
        } else if (progress > i / finalText.length) {
          result += finalText[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (iteration >= iterations) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsAnimating(false);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (!animateOnView) {
      scramble(text, duration);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble(text, duration);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text, duration, animateOnView]);

  return (
    <div ref={containerRef} className={cn("font-mono", className)}>
      {displayText}
      {isAnimating && (
        <span className="inline-block w-[3px] h-[1em] bg-[#ff6b2b] ml-0.5 animate-pulse" />
      )}
    </div>
  );
}
