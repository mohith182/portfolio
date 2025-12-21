import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section3DTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * 3D tilt effect for sections based on mouse movement
 * Creates depth and interactivity
 */
export function Section3DTilt({ children, className, intensity = 2 }: Section3DTiltProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const maxTilt = intensity;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
      const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;
      const translateZ = Math.abs(mouseX) + Math.abs(mouseY) / 100;

      setTransform({
        rotateX: rotateX * 0.1, // Subtle tilt
        rotateY: rotateY * 0.1,
        translateZ: Math.min(translateZ, 20),
      });
    };

    const handleMouseLeave = () => {
      setTransform({ rotateX: 0, rotateY: 0, translateZ: 0 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={sectionRef}
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(${transform.translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

