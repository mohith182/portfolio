import { useEffect, useRef } from "react";

/**
 * Premium 3D interactive cursor with depth, magnetic effects, and velocity-based animations
 * Outer ring + inner dot with smooth trailing motion
 */
export function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const innerDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Hide cursor on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const innerDot = innerDotRef.current;
    if (!cursor || !follower || !innerDot) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let innerX = 0;
    let innerY = 0;
    let velocity = 0;
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    // Track hover states
    let isHoveringButton = false;
    let isHoveringLink = false;
    let isHoveringCard = false;

    const updateCursor = (e: MouseEvent) => {
      const now = Date.now();
      const deltaTime = now - lastTime;
      
      // Calculate velocity for dynamic effects
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      velocity = distance / (deltaTime || 1) * 0.1; // Normalize velocity
      
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      // Update inner dot immediately (no lag)
      innerX = mouseX;
      innerY = mouseY;
      innerDot.style.left = `${innerX}px`;
      innerDot.style.top = `${innerY}px`;

      // Magnetic effect for buttons
      if (isHoveringButton) {
        const rect = (e.target as HTMLElement)?.getBoundingClientRect();
        if (rect) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
          );
          const magneticStrength = Math.min(30 / distance, 0.3);
          mouseX += (centerX - e.clientX) * magneticStrength;
          mouseY += (centerY - e.clientY) * magneticStrength;
        }
      }
    };

    const updateFollower = () => {
      // Smooth following with easing (outer ring)
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      // Velocity-based scale and tilt
      const scale = 1 + Math.min(velocity * 0.5, 0.3);
      const tiltX = (mouseY - followerY) * 0.1;
      const tiltY = (mouseX - followerX) * 0.1;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      follower.style.transform = `translate(-50%, -50%) scale(${scale}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      // Update cursor dot position
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      requestAnimationFrame(updateFollower);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button");
      const link = target.closest("a");
      const card = target.closest("[class*='Card']") || target.closest(".card");

      if (button) {
        isHoveringButton = true;
        follower.classList.add("scale-150", "bg-purple-100/20");
        cursor.classList.add("scale-150");
        innerDot.classList.add("scale-125");
      } else if (link) {
        isHoveringLink = true;
        follower.classList.add("scale-125", "border-purple-400");
        cursor.classList.add("scale-125");
      } else if (card) {
        isHoveringCard = true;
        follower.classList.add("scale-110", "shadow-lg", "shadow-purple-200/50");
      }
    };

    const handleMouseLeave = () => {
      isHoveringButton = false;
      isHoveringLink = false;
      isHoveringCard = false;
      follower.classList.remove(
        "scale-150",
        "scale-125",
        "scale-110",
        "bg-purple-100/20",
        "border-purple-400",
        "shadow-lg",
        "shadow-purple-200/50"
      );
      cursor.classList.remove("scale-150", "scale-125");
      innerDot.classList.remove("scale-125");
    };

    // Use event delegation for better performance
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    updateFollower();

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Inner dot - follows immediately */}
      <div
        ref={innerDotRef}
        className="fixed w-2 h-2 bg-[#7C3AED] rounded-full pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 8px rgba(124, 58, 237, 0.4), 0 0 16px rgba(124, 58, 237, 0.2)",
        }}
      />
      {/* Outer ring - smooth trailing with depth */}
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-[#7C3AED]/40 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          transformStyle: "preserve-3d",
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.15), inset 0 0 10px rgba(124, 58, 237, 0.1)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Main cursor - positioned but invisible (handled by inner dot) */}
      <div
        ref={cursorRef}
        className="fixed w-0 h-0 pointer-events-none z-[9999]"
      />
    </>
  );
}

