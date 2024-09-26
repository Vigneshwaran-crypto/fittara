import React, { useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Decal,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import CameraRig from "../../Canvas/CameraRig";
import Backdrop from "../../Canvas/Backdrop";
import EditableItem from "../../Canvas/EditableItem";
import custHood from "../../../Assets/3dFiles/customsHood.glb";
import * as THREE from "three";

import user from "../../../Assets/auth/userProfile.png";

const Crafting = (props) => {
  const [baseImg, setBaseimg] = useState(null);

  const [offset, setOffset] = useState([0, 0]); // Initial offset

  const orbitControl = useRef(true);

  const MyModel = () => {
    const { scene, materials, nodes } = useGLTF(custHood);

    const userLogo = useTexture(user);
    const frontMesh = useRef();
    const dragging = useRef(false);

    const [decalPosition, setDecalPosition] = useState([0, 0, 0.3]);

    useEffect(() => {
      console.log({ materials, nodes });

      // if (materials) {
      //   materials["frontView"].color.set("#ff0000");
      //   materials["backView"].color.set("#ff0000");
      //   materials["cape"].color.set("#ff0000");
      // }

      const textLoader = new THREE.TextureLoader();
      const clampImage = textLoader.load(user);
      const skin = materials["frontView"];

      if (skin) {
        // skin.map = clampImage;
        // skin.map.repeat.set(0.01, 0.01);
        // skin.map.offset.set(0.01, 0.01);
        // skin.map.needsUpdate = true;
      }
    }, [materials]);

    const handleMouseMove = (event) => {
      if (dragging.current && frontMesh.current) {
        const deltaX = event.movementX / window.innerWidth;
        const deltaY = event.movementY / window.innerHeight;
        frontMesh.current.position.x += deltaX * 5;
        frontMesh.current.position.y -= deltaY * 5;

        //   const deltaX = (event.movementX / window.innerWidth) * 5;
        //   const deltaY = (event.movementY / window.innerHeight) * 5;

        //   const newX = THREE.MathUtils.clamp(
        //     decalPosition[0] + deltaX,
        //     -0.4,
        //     0.4
        //   );
        //   const newY = THREE.MathUtils.clamp(
        //     decalPosition[1] - deltaY,
        //     -0.38,
        //     0.38
        //   );

        //   setDecalPosition([newX, newY, decalPosition[2]]);
      }
    };

    // Handle dragging
    const handleMouseDown = () => {
      dragging.current = true;
      console.log("handleMouseDown : ", dragging.current);

      if (orbitControl.current) orbitControl.current.enabled = false;
    };

    const handleMouseUp = () => {
      dragging.current = false;

      console.log("handleMouseUp : ", dragging.current);

      if (orbitControl.current) orbitControl.current.enabled = true;
    };

    return (
      <group>
        {/* <primitive object={scene} /> */}

        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_1.geometry}
          material={materials.Hoodie}
        ></mesh>

        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_3.geometry}
          material={materials.frontView}
        >
          {/* <Decal
            debug
            ref={frontMesh}
            onPointerMove={handleMouseMove}
            onPointerDown={handleMouseDown}
            // onPointerDown={handleMouseDown}
            onPointerUp={handleMouseUp}
            onPointerMissed={handleMouseUp}
            onPointerLeave={handleMouseUp}
            scale={0.3}
            // position={[0, -0.2, 0.25]}
            position={decalPosition}
            map={userLogo}
          /> */}

          <meshPhysicalMaterial map={userLogo} children={<>Hello</>} />
        </mesh>

        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_2.geometry}
          material={materials.backView}
        ></mesh>

        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_4.geometry}
          material={materials.backView}
        ></mesh>

        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_5.geometry}
          material={materials.leftHand}
        ></mesh>
      </group>
    );
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvasHolder"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            enablePan={false}
          /> */}

      <OrbitControls
        ref={orbitControl}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
        maxPolarAngle={Math.PI}
        // enabled={!dragging.current}
        // enabled={isEnable}
      />
      {/* <CameraRig> */}
      {/* <Backdrop /> */}
      <Float>
        {/* <EditableItem /> */}
        <MyModel />
      </Float>

      <ContactShadows position-y={-1.5} opacity={0.8} blur={4} />
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default Crafting;
