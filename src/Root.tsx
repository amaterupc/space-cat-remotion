
import { Composition } from "remotion";
import { Scene } from "./Scene";
import React from "react";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SpaceCatVideo"
        component={Scene}
        durationInFrames={665} // 22.18 seconds * 30 fps = 665.4 -> 665 frames
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
