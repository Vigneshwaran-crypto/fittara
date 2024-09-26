import { useRef, useEffect } from "react";
import { AxesHelper as ThreeAxesHelper } from "three";
import { useThree, useFrame } from "@react-three/fiber";

const AxesHelper = ({ size }) => {
  const ref = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const helper = new ThreeAxesHelper(size);
    ref.current.add(helper);
    return () => {
      ref.current.remove(helper);
    };
  }, [size]);

  return <group ref={ref} />;
};

export default AxesHelper;
