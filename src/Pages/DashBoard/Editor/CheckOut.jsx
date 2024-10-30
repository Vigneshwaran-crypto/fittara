import React, { Suspense, useEffect, useState } from "react";
import "../MenuOptionsStyles.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CheckOut = () => {
  const propsState = useLocation();

  //   const { nodes, materials, scene } = useGLTF(propsState.state.modelUrl);

  //   const gltf = useLoader(GLTFLoader, propsState.state.modelUrl);

  const [modelList, setModelList] = useState([]);

  useEffect(() => {
    console.log("props value in checkout  :", propsState.state);
  }, []);

  return (
    <Container fluid className="editorHolder">
      <div className="checkoutParent">
        <div>
          <Canvas
            camera={{ fov: 45, position: [0, 1, 3.6] }}
            className="checkoutModelViewer"
          >
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={1.4} />
            <Suspense fallback={<div>Loading</div>}>
              {/* {gltf && <primitive object={gltf.scene} />} */}

              {/* <primitive object={scene} /> */}
            </Suspense>

            {/* <mesh geometry={nodes?.geometry} material={materials?.material} /> */}
          </Canvas>
        </div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default CheckOut;
