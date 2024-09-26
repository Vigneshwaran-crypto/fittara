import React, { useState, useEffect } from "react";
import {
  Decal,
  OrbitControls,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { TextureLoader } from "three";
import tShirt from "../../Assets/3dFiles/shirt_baked.glb";

import myTis from "../../Assets/3dFiles/ShirtComs.glb";
import custHood from "../../Assets/3dFiles/customsHood.glb";

import hoodie from "../../Assets/3dFiles/hoodie.glb";
import adidas from "../../Assets/3dFiles/adidas_hoodie.glb";
import jacket from "../../Assets/3dFiles/oversize_jacket_-_low_poly.glb";

import logo from "../../Assets/auth/ecomVector.jpg";
import userPng from "../../Assets/auth/userProfile.png";

const EditableItem = () => {
  const [texture, setTexture] = useState(null);
  const { nodes, materials } = useGLTF(custHood);

  const clampImg = useTexture(logo);
  const userProf = useTexture(userPng);

  // Handle image drop
  const handleDrop = (event) => {
    console.log("handleDrop item :", event);
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      console.log("Dropped file URL:", url); // Check if the file URL is correct
      const loadedTexture = new TextureLoader().load(
        url,
        () => {
          console.log("Texture loaded successfully"); // Confirm texture load
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error); // Handle errors
        }
      );
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log("3d item nodes : ", nodes);

    console.log("3d item materials : ", materials);

    // materials.FABRIC_1_FRONT_1528.color.set("#e81817");

    if (materials.cape) {
      materials.cape.color.set("#e81817");
      materials.cape.map = clampImg;
      materials.cape.needsUpdate = true;
    }

    // if (materials.Material3754) {
    //   materials.Material3754.color.set("#1be41f");
    // }

    // if (materials.Material3758) {
    //   materials.Material3758.color.set("#4d29d6");
    // }
  }, []);

  return (
    <group key={"2"} uuid="35a836dd-c62c-4673-8854-3beace9443fe">
      <mesh
        castShadow
        // geometry={nodes.T_Shirt_male.geometry}
        // material={materials.lambert1}

        geometry={nodes.g_Hoodie_Hoodie_0_1.geometry}
        material={materials.Hoodie}
        // material-roughness={1}
        dispose={null}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        // scale={-100}
        position={[0, 0, -5]}
      >
        {/* {clampImg ? (
          <>
            <Decal
              debug
              position={[0, 0, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={clampImg}
              depthTest={false}
            />

            <Decal
              debug
              position={[0, -0.35, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={clampImg}
              depthTest={false}
              onClick={() => console.log("2nd image clicked : ")}
            />

            <Decal
              debug
              position={[0, 0, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={clampImg}
              depthTest={false}
            />
          </>
        ) : (
          <Decal
            position={[0, 0.1, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={null}
            depthTest={false}
          />
        )} */}
      </mesh>

      <mesh
        geometry={nodes.g_Hoodie_Hoodie_0_6.geometry}
        material={materials.cape}
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={"#e81817"} />
      </mesh>

      <mesh
        geometry={nodes.g_Hoodie_Hoodie_0_3.geometry}
        material={materials.frontView}
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
      >
        {/* <meshStandardMaterial color={"#e81817"} /> */}
        <Decal
          // debug
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          // scale={0.15}
          map={clampImg}
          depthTest={false}
        />
      </mesh>

      <mesh
        geometry={nodes.g_Hoodie_Hoodie_0_4.geometry}
        material={materials.leftHand}
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={"green"} />
        <Decal
          debug
          position={[-0.7, -0.6, 0]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={userProf}
          depthTest={false}
        />
      </mesh>

      <mesh
        geometry={nodes.g_Hoodie_Hoodie_0_5.geometry}
        material={materials.backView}
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={"#e81817"} />
      </mesh>

      {/* <OrbitControls /> */}
    </group>
  );
};

export default EditableItem;
