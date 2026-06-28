"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  Trail,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import type { Mesh, Group } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref} scale={1.15}>
      <torusKnotGeometry args={[1, 0.32, 180, 32]} />
      <MeshDistortMaterial
        color="#10b981"
        emissive="#14b8a6"
        emissiveIntensity={0.12}
        roughness={0.35}
        metalness={0.6}
        distort={0.28}
        speed={1.6}
      />
    </mesh>
  );
}

function FloatingShape({
  position,
  color,
  shape = "ico",
  speed = 1,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  shape?: "ico" | "torus" | "octa";
  speed?: number;
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.3 * speed;
    ref.current.rotation.z += delta * 0.2 * speed;
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        {shape === "ico" && <icosahedronGeometry args={[0.6, 0]} />}
        {shape === "torus" && <torusGeometry args={[0.5, 0.18, 16, 40]} />}
        {shape === "octa" && <octahedronGeometry args={[0.65, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          roughness={0.35}
          metalness={0.55}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function WireShape({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

function OrbitingDots() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x += delta * 0.05;
  });
  return (
    <group ref={group}>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 2.8;
        return (
          <Trail key={i} width={0.4} length={3} color={"#f59e0b"} attenuation={(t) => t * t}>
            <mesh position={[Math.cos(angle) * r, Math.sin(angle * 1.5) * 0.5, Math.sin(angle) * r]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial
                color="#f59e0b"
                emissive="#f59e0b"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Trail>
        );
      })}
    </group>
  );
}

export function Hero3DScene() {
  // Mount only on client to avoid SSR/hydration issues with WebGL Canvas
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#10b981" />
        <pointLight position={[-5, -3, 3]} intensity={0.9} color="#06b6d4" />
        <pointLight position={[0, 4, -4]} intensity={0.7} color="#f59e0b" />

        <Knot />

        <FloatingShape position={[-3.2, 1.6, -1]} color="#f59e0b" shape="ico" speed={1.1} scale={0.9} />
        <FloatingShape position={[3, -1.4, -0.5]} color="#14b8a6" shape="torus" speed={0.9} scale={1} />
        <FloatingShape position={[2.6, 2, -2]} color="#06b6d4" shape="octa" speed={1.3} scale={0.7} />
        <FloatingShape position={[-2.8, -1.8, -1.5]} color="#84cc16" shape="ico" speed={1} scale={0.6} />

        <WireShape position={[2.2, -2.2, -3]} color="#10b981" scale={0.8} />
        <WireShape position={[-3.5, 0.5, -2.5]} color="#14b8a6" scale={0.6} />

        <OrbitingDots />

        <Sparkles
          count={45}
          scale={[12, 8, 6]}
          size={2}
          speed={0.4}
          opacity={0.35}
          color="#10b981"
        />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

/* Smaller ambient scene for the About section */
function CrystallineCore() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#14b8a6"
          emissive="#10b981"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
          distort={0.35}
          speed={2.5}
        />
      </mesh>
    </Float>
  );
}

export function About3DScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.8]} gl={{ alpha: true }} style={{ background: "transparent" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#f59e0b" />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#06b6d4" />
        <CrystallineCore />
        <Sparkles count={30} scale={[6, 6, 4]} size={2} speed={0.3} color="#f59e0b" />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
