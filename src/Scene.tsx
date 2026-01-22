
import { ThreeCanvas } from "@remotion/three";
import React from "react";
import { useVideoConfig } from "remotion";
import { SpaceCat } from "./components/SpaceCat";
import { StarsBackground } from "./components/StarsBackground";
import { AbsoluteFill } from "remotion";

export const Scene: React.FC = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      <ThreeCanvas width={width} height={height}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <StarsBackground />
        <SpaceCat />
      </ThreeCanvas>
    </AbsoluteFill>
  );
};
