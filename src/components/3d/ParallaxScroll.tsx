import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax scroll effect for sections
 * Creates depth-based scrolling animation
 */
export function ParallaxScroll({ children, speed = 0.5, className }: ParallaxScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable on mobile for performance
    if (window.innerWidth < 768) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate scroll progress
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Apply parallax offset
      setOffset(clampedProgress * 100 * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={cn("relative", className)}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

