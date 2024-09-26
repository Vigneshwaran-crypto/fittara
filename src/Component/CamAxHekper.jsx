import React, { useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Decal } from "@react-three/drei";

const FixedDecal = () => {
  const decalRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (decalRef.current) {
      decalRef.current.position.copy(camera.position);
      decalRef.current.rotation.copy(camera.rotation);
    }
  });

  return (
    <Decal
      ref={decalRef}
      position={camera.position}
      scale={[1, 1, 1]}
      material={
        <meshBasicMaterial
          attach="material"
          transparent={true} // Ensure transparency is set on a valid material
          opacity={0.5} // Adjust opacity as needed
          color="white"
        />
      }
    />
  );
};

const App = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <FixedDecal />
  </Canvas>
);

export default App;
