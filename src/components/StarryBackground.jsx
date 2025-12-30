import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function StarField(props) {
    const pointsRef = useRef();
    const groupRef = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        // Continuous rotation on the points
        if (pointsRef.current) {
            pointsRef.current.rotation.x -= delta / 10;
            pointsRef.current.rotation.y -= delta / 15;
        }

        // Mouse interaction on the container group
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.2, 0.1);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, -state.mouse.x * 0.2, 0.1);
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
            <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function StarryBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black z-0 opacity-80" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>
        </div>
    );
}
