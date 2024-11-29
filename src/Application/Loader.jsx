import React from "react";
import "./App.css";
import splashLoad from "../Assets/AnimJson/splashLoad.json";
import Lottie from "react-lottie-player";

const Loader = () => {
  return (
    <div className="splashCont">
      <Lottie loop animationData={splashLoad} play />
    </div>
  );
};

export default Loader;
