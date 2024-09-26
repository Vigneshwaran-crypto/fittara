import { OrbitControls, Text, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import sampImg from "../../Assets/auth/userProfile.png";
import ClampImage from "./Test/ClampImage";

import hoodie from "../../Assets/3dFiles/hoodie.glb";
import adidas from "../../Assets/3dFiles/adidas_hoodie.glb";
import jacket from "../../Assets/3dFiles/oversize_jacket_-_low_poly.glb";
import Hoodie from "../../Component/Hoodie";

const Explore = (props) => {
  const { nodes, materials } = useGLTF(hoodie);

  useEffect(() => {
    console.log("3d Items Nodes :", nodes);
    console.log("3d Items Materials :", materials);
  }, []);

  return (
    <div className="container">
      <Canvas>
        <ambientLight intensity={10} />
        <pointLight position={[0, 0, 0]} />
        {/* 
        <Text
          color={"white"}
          fontSize={0.6}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          position={[0, 0, 1]}
        >
          Hello 3d world
        </Text> */}

        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"blue"} />
          <ClampImage />
        </mesh> */}

        {/* <mesh>
          <group>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[4, 1.5, 2]} />
              <meshStandardMaterial color={"red"} />
            </mesh>

            <mesh position={[-1.5, -1, -10]}>
              <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </group>
        </mesh> */}

        <Hoodie />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Explore;
