import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";
import { radToDeg } from "three/src/math/MathUtils.js";

const CameraRig = ({ children }) => {
  const grpRef = useRef();

  useFrame((state, delta) => {
    const breakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 576;
    let targetPostion = [-0.4, 0, 2];
    if (isMobile) targetPostion = [0, 0, 2.5];
    // else targetPostion = [0, 0, 8];
    else targetPostion = [0, 0, 3];

    // set model camera position
    easing.damp3(state.camera.position, targetPostion, 0.25, delta);
    // easing.damp3(state.camera.position, targetPostion, 0, delta);

    // set the model rotation smoothly
    // easing.dampE(
    //   grpRef.current.rotation,
    //   [state.pointer.y / 10, -state.pointer.x / 5, 0],
    //   0.25,
    //   delta
    // );

    // easing.dampE(
    //   grpRef.current.rotation,
    //   [state.pointer.y, state.pointer.x, 0],
    //   0.25,
    //   delta
    // );
  });

  return <group ref={grpRef}>{children}</group>;
};

export default CameraRig;
