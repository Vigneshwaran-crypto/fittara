import React from "react";
import { useTexture } from "@react-three/drei";
import sampImg from "../../../Assets/auth/userProfile.png";

function ClampImage(props) {
  const clampImg = useTexture(sampImg);

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={clampImg} blendColor={"pink"} />
    </mesh>
  );
}

export default ClampImage;
