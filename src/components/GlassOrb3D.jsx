import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";

function GlassOrb() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhysicalMaterial
          transmission={1}
          roughness={0.05}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
          color="#00fff7"
          attenuationColor="#a21caf"
          attenuationDistance={0.8}
          reflectivity={0.8}
          metalness={0.1}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

export default function GlassOrb3D() {
  return (
    <div style={{ width: "180px", height: "180px", margin: "0 auto" }}>
      <Canvas camera={{ position: [0, 0, 4] }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <GlassOrb />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
