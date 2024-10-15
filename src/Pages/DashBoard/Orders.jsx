import React, { useEffect } from "react";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";

import Mug from "../../Component/Mug";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "../../Component/Hoodie";
import TxtModel from "../../Component/TxtModel";
import { Camera } from "three";
import CamAx from "../../Component/CamAxHekper";
import TwoD from "../../Component/TwoD";
// import * as THREE from "three";

const Orders = (props) => {
  // const { camera, gl } = useThree();

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      {/* <Canvas>
      <OrbitControls /> 
      {/* <Float> */}
      {/* <Center> */}
      {/* <Mug /> */}

      {/* <Model /> */}

      {/* <CamAx /> */}

      {/* <perspectiveCamera
        args={[1]}
        onUpdate={(e) => {
          console.log("perspectiveCamera : ", e.position);
        }}
      /> */}

      {/* <TxtModel /> */}
      {/* </Center> */}

      <TwoD />

      {/* </Float> */}
      {/* <ContactShadows position-y={-1} opacity={0.5} blur={2} />
      <Environment preset="city" blur={4} />
    </Canvas> */}
    </div>
  );
};

export default Orders;
