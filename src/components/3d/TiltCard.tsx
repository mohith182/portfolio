import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
}

/**
 * 3D tilt card component with perspective transform
 * Adds subtle 3D depth on hover
 */
export function TiltCard({ children, intensity = 5, className, ...props }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTransform({ rotateX: 0, rotateY: 0 });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, intensity, isMobile]);

  return (
    <div
      ref={cardRef}
      className={cn("transition-all duration-300", className)}
      style={
        !isMobile && isHovered
          ? {
              transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}

