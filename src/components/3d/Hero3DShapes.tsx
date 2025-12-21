import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

/**
 * Enhanced 3D floating shapes for hero section
 * Multiple shapes with smooth animations
 */
function FloatingSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function FloatingCube() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color="#3B82F6"
          metalness={0.4}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#A78BFA"
          metalness={0.3}
          roughness={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DShapes() {
  // Disable on mobile for performance
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8B5CF6" />
          <pointLight position={[5, 5, 5]} intensity={0.3} color="#3B82F6" />
          
          <FloatingSphere />
          <FloatingCube />
          <FloatingTorus />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

