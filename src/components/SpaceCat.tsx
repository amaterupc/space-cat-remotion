
import { Billboard, useTexture } from "@react-three/drei";
import { useCurrentFrame, useVideoConfig } from "remotion";
import React, { useRef } from "react";
import { Group } from "three";
import { staticFile } from "remotion";

export const SpaceCat: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const texture = useTexture(staticFile("cat.png"));
    const catRef = useRef<Group>(null);

    // Animation constants
    const zSpeed = 5; // Speed of movement towards camera
    const bobbingSpeed = 0.05; // Speed of up/down movement
    const bobbingAmount = 0.2; // Amplitude of up/down movement

    // Calculate position based on frame
    // Move from back (-10) to front (5) and loop or just fly continuously
    // For 60 seconds, let's make it fly a long distance or loop

    // Let's make it fly in a circle or just float with bobbing
    // Since it's "flying in space", maybe forward movement is best.

    const time = frame / fps;

    // Bobbing animation (Y axis)
    const y = Math.sin(frame * bobbingSpeed) * bobbingAmount;

    // Rotation animation (slightly tilting)
    const rotationZ = Math.sin(frame * 0.03) * 0.1;

    return (
        <group position={[0, y, 0]} rotation={[0, 0, rotationZ]}>
            <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
            >
                <mesh>
                    <planeGeometry args={[3, 3]} /> {/* Aspect ratio of image */}
                    <meshBasicMaterial map={texture} transparent />
                </mesh>
            </Billboard>
        </group>
    );
};
