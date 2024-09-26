import React, { useRef } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, Raycaster, Vector2 } from "three";
import { OrbitControls } from "@react-three/drei";
import userImg from "../Assets/auth/userProfile.png"; // Replace with your image path

const ClickableMesh = ({ onClick }) => {
  const meshRef = useRef();
  const { camera, gl } = useThree(); // useThree hook here

  const handleClick = (event) => {
    // Convert the mouse position to normalized device coordinates
    const pointer = new Vector2();
    pointer.set(
      (event.clientX / gl.domElement.clientWidth) * 2 - 1,
      -(event.clientY / gl.domElement.clientHeight) * 2 + 1
    );

    // Create a raycaster and update it
    const raycaster = new Raycaster();
    raycaster.setFromCamera(pointer, camera);

    // Check for intersections
    const intersects = raycaster.intersectObject(meshRef.current);
    if (intersects.length > 0) {
      const clickedPosition = intersects[0].point; // The exact position on the mesh
      console.log("Clicked Position:", clickedPosition);

      // Execute any passed click handler
      if (onClick) onClick(clickedPosition);
    }
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} onClick={handleClick}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={useLoader(TextureLoader, userImg)} />
    </mesh>
  );
};

const Model = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      <ClickableMesh />
    </Canvas>
  );
};

export default Model;
