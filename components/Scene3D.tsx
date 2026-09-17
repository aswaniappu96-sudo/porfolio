"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      progress.current = window.scrollY / max;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function ScrollRig() {
  const crystal = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const shards = useRef<THREE.Group>(null);
  const progress = useScrollProgress();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    if (crystal.current) {
      crystal.current.rotation.y = t * 0.18 + p * Math.PI * 2.4;
      crystal.current.rotation.x = 0.35 + p * 0.9 + my * 0.15;
        crystal.current.position.x = 1.05 + Math.sin(p * Math.PI) * 0.55 + mx * 0.28;
        crystal.current.position.y = 0.05 - p * 1.55 + my * 0.2;
        crystal.current.scale.setScalar(0.92 + Math.sin(p * Math.PI) * 0.1);
    }

    if (knot.current) {
      knot.current.rotation.x = t * 0.22 + p * Math.PI * 1.8;
      knot.current.rotation.z = t * 0.12 - p * Math.PI;
      knot.current.position.set(1.85 - p * 0.8, -0.55 + p * 0.9, -1.2);
    }

    if (ring.current) {
      ring.current.rotation.z = t * 0.08 + p * Math.PI * 2;
      ring.current.rotation.y = p * 1.4;
      const s = 1.6 + p * 1.1;
      ring.current.scale.set(s, s, s);
    }

    if (shards.current) {
      shards.current.rotation.y = -t * 0.1 + p * 2;
      shards.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <>
      <fog attach="fog" args={["#03030a", 8, 18]} />
      <ambientLight intensity={0.28} />
      <spotLight
        position={[6, 8, 6]}
        intensity={55}
        color="#5eead4"
        angle={0.45}
        penumbra={0.8}
      />
      <spotLight
        position={[-7, -3, 5]}
        intensity={38}
        color="#a78bfa"
        angle={0.5}
        penumbra={1}
      />
      <pointLight position={[0, 2, 3]} intensity={12} color="#fb7185" />

      <group ref={crystal}>
        <Float speed={1.6} floatIntensity={0.55} rotationIntensity={0.25}>
          <mesh>
            <icosahedronGeometry args={[1.22, 0]} />
            <meshPhysicalMaterial
              color="#67e8f9"
              metalness={1}
              roughness={0.08}
              iridescence={1}
              iridescenceIOR={1.35}
              clearcoat={1}
              clearcoatRoughness={0.08}
              emissive="#164e63"
              emissiveIntensity={0.35}
            />
          </mesh>
          <mesh scale={1.035}>
            <icosahedronGeometry args={[1.22, 0]} />
            <meshBasicMaterial
              color="#99f6e4"
              wireframe
              transparent
              opacity={0.14}
            />
          </mesh>
        </Float>
      </group>

      <mesh ref={knot}>
        <torusKnotGeometry args={[0.72, 0.22, 160, 18]} />
        <MeshDistortMaterial
          color="#c4b5fd"
          speed={1.8}
          distort={0.38}
          roughness={0.18}
          metalness={0.85}
          emissive="#4c1d95"
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh ref={ring} position={[0.1, 0.1, -2.2]}>
        <torusGeometry args={[1.8, 0.012, 16, 120]} />
        <meshBasicMaterial color="#5eead4" transparent opacity={0.22} />
      </mesh>

      <group ref={shards}>
        <MiniCrystal position={[-2.6, 1.1, -0.6]} color="#f472b6" />
        <MiniCrystal position={[2.4, 1.35, -0.4]} color="#22d3ee" />
        <MiniCrystal position={[-1.8, -1.4, 0.2]} color="#a78bfa" />
      </group>

      <Sparkles
        count={70}
        scale={[14, 8, 8]}
        size={2.2}
        speed={0.35}
        color="#99f6e4"
        opacity={0.55}
      />
    </>
  );
}

function MiniCrystal({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={2.4} floatIntensity={0.8} rotationIntensity={0.6}>
      <mesh position={position} scale={0.22}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.95}
          roughness={0.12}
          iridescence={0.8}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  const [ready, setReady] = useState(false);
  const dpr = useMemo<[number, number]>(() => [1, 1.6], []);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent" }}
      >
        <ScrollRig />
      </Canvas>
    </div>
  );
}
