import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkParticles({ count = 300 }) {
    const points = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        // Distribute particles across the entire screen space (not a sphere)
        for (let i = 0; i < count; i++) {
            // Spread across X, Y, and Z to fill the viewport
            const x = THREE.MathUtils.randFloatSpread(20); // Wide horizontal spread
            const y = THREE.MathUtils.randFloatSpread(15); // Vertical spread
            const z = THREE.MathUtils.randFloatSpread(10); // Depth spread

            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const { clock } = state;
        if (points.current) {
            // Subtle rotation for depth effect
            points.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#22d3ee"
                transparent
                opacity={0.25}
                depthWrite={false}
                sizeAttenuation={true}
            />
        </points>
    );
}

function NetworkConnections({ count = 300 }) {
    const linesRef = useRef<THREE.LineSegments>(null);

    const { geometry } = useMemo(() => {
        const positions: THREE.Vector3[] = [];
        const linePoints: THREE.Vector3[] = [];
        const maxDistance = 3; // Connection threshold

        // Generate same positions as particles
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(20);
            const y = THREE.MathUtils.randFloatSpread(15);
            const z = THREE.MathUtils.randFloatSpread(10);
            positions.push(new THREE.Vector3(x, y, z));
        }

        // Create connections between nearby particles
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                if (positions[i].distanceTo(positions[j]) < maxDistance) {
                    linePoints.push(positions[i]);
                    linePoints.push(positions[j]);
                }
            }
        }

        return {
            geometry: new THREE.BufferGeometry().setFromPoints(linePoints)
        };
    }, [count]);

    useFrame((state) => {
        const { clock } = state;
        if (linesRef.current) {
            linesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <lineSegments geometry={geometry} ref={linesRef}>
            <lineBasicMaterial
                attach="material"
                color="#0891b2"
                transparent
                opacity={0.08}
            />
        </lineSegments>
    );
}

export default function BrainParticles3D() {
    return (
        <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
                height: '100%', // Cover entire page height
                minHeight: '100vh',
                zIndex: -10
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                style={{
                    position: 'fixed', // Canvas stays fixed while container scrolls
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh'
                }}
            >
                <NetworkParticles count={400} />
                <NetworkConnections count={400} />
            </Canvas>
        </div>
    );
}
