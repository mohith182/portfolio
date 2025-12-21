import { useEffect, useRef } from "react";

/**
 * Premium 3D background with depth layers and parallax mouse interaction
 * Soft gradient mesh with slow-moving abstract blobs
 */
export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Disable on mobile for performance
    if (window.innerWidth < 768) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate noise texture (cached for performance)
    let noiseTexture: ImageData | null = null;
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 2;
        imageData.data[i] = noise * 0.5; // R
        imageData.data[i + 1] = noise * 0.5; // G
        imageData.data[i + 2] = noise * 0.5; // B
        imageData.data[i + 3] = 0.3; // Alpha - very subtle
      }
      return imageData;
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      noiseTexture = null; // Invalidate noise texture on resize
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create slow-moving 3D blobs with depth layers
    const blobs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      depth: number; // For parallax effect
    }> = [];

    // Create multiple layers for depth
    for (let i = 0; i < 4; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 150 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        color: i % 2 === 0 ? "rgba(124, 58, 237, 0.04)" : "rgba(59, 130, 246, 0.03)", // Purple and blue
        depth: i * 0.3 + 0.5, // Different depths for parallax
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise/grain texture (regenerate only on resize)
      if (!noiseTexture || noiseTexture.width !== canvas.width || noiseTexture.height !== canvas.height) {
        noiseTexture = generateNoise();
      }
      ctx.putImageData(noiseTexture, 0, 0);

      blobs.forEach((blob, index) => {
        // Update position with slow movement
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Parallax effect based on mouse position
        const parallaxX = mouseRef.current.x * 30 * blob.depth;
        const parallaxY = mouseRef.current.y * 30 * blob.depth;

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) blob.vx *= -1;
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) blob.vy *= -1;

        // Add subtle pulsing animation
        const pulse = Math.sin(time + index) * 0.1 + 1;

        // Draw gradient blob with depth
        const gradient = ctx.createRadialGradient(
          blob.x + parallaxX,
          blob.y + parallaxY,
          0,
          blob.x + parallaxX,
          blob.y + parallaxY,
          blob.radius * pulse
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace("0.04", "0.02").replace("0.03", "0.01"));
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          blob.x + parallaxX,
          blob.y + parallaxY,
          blob.radius * pulse,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient layer */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(248, 249, 252, 0.8) 0%, rgba(240, 244, 248, 0.9) 100%)
          `,
        }}
      />
      {/* 3D Canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
}

