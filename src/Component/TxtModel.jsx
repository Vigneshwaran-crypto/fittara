import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Raycaster, Vector3 } from "three";

function MeshWithRaycast() {
  const meshRef = useRef();
  const [intersectionPoint, setIntersectionPoint] = useState(new Vector3());

  // Access camera and renderer
  const { camera, raycaster } = useThree();

  useEffect(() => {
    // Create a pointer vector
    const pointer = new Vector3();

    function updateIntersection(event) {
      // Normalize the pointer to camera space
      pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
        0.5
      );

      // Set up the raycaster
      raycaster.ray.origin.copy(camera.position);
      raycaster.ray.direction
        .copy(pointer)
        .unproject(camera)
        .sub(camera.position)
        .normalize();

      // Check for intersections
      const intersects = raycaster.intersectObject(meshRef.current);
      if (intersects.length > 0) {
        setIntersectionPoint(intersects[0].point);
      }
    }

    window.addEventListener("mousemove", updateIntersection);

    return () => {
      window.removeEventListener("mousemove", updateIntersection);
    };
  }, [camera, raycaster]);

  return (
    <mesh ref={meshRef}>
      {/* Your mesh geometry and material here */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function TxtModel() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MeshWithRaycast />
    </Canvas>
  );
}

export default TxtModel;
