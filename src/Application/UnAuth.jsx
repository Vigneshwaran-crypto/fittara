import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import newShop from "../Assets/AnimJson/noShop.json";
import closedShop from "../Assets/AnimJson/closed.json";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";

const UnAuth = () => {
  const loc = useLocation();
  const navigation = useNavigate();
  const shop = loc.state?.shop || "";

  useEffect(() => {
    console.log("props in unauth :", shop);
  }, [shop]);

  return (
    <div className="splashCont">
      <Lottie
        loop
        play
        animationData={newShop}
        style={{ height: "100%", width: "100%" }}
      />
      <div className="loginConts">
        <span onClick={() => navigation("/register")}>Register</span> To Create{" "}
        <span>{shop}</span> Store
        {/* <span onClick={() => navigation("/login")}>Login</span> To Create{" "}
        <span>{shop}</span> Store */}
      </div>
    </div>
  );
};

export default UnAuth;
