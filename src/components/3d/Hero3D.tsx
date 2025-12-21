import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle 3D floating object for hero section
 * Uses Three.js for lightweight 3D rendering
 */
export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Disable on mobile for performance
    if (window.innerWidth < 768) {
      if (containerRef.current) {
        containerRef.current.style.display = "none";
      }
      return;
    }

    // Check if WebGL is supported
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      // Fallback: hide container if WebGL not supported
      if (containerRef.current) {
        containerRef.current.style.display = "none";
      }
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create subtle floating icosahedron (low-poly for performance)
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7c3aed, // Purple
      metalness: 0.2,
      roughness: 0.8,
      transparent: true,
      opacity: 0.4, // More subtle
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Soft lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Mouse interaction for subtle rotation
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);

      // Subtle rotation based on mouse and time
      mesh.rotation.x = mouseY * 0.3 + Math.sin(time * 0.5) * 0.1;
      mesh.rotation.y = mouseX * 0.3 + time * 0.2;
      
      // Gentle floating motion
      mesh.position.y = Math.sin(time * 0.8) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = Math.min(400, window.innerWidth * 0.3);
      const height = width;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none opacity-30 z-0"
      style={{ willChange: "transform" }}
    />
  );
}

