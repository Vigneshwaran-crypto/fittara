import React, { useEffect } from "react";
import "./App.css";
import splashLoad from "../Assets/AnimJson/splashLoad.json";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../Common/SessionHandler";
import { getUserByDomain } from "../Api/UsersService";

const Splash = () => {
  const navigation = useNavigate();
  const urlFromBrowser = window.location.href;
  const urlparts = new URL(urlFromBrowser);

  useEffect(() => {
    console.log("URL from browser :", urlparts.hostname.split("."));

    checkLastActivity();
  }, []);

  const checkLastActivity = () => {
    const domains = urlparts.hostname.split(".");

    // client's url with subdomain as their userName
    if (domains.length > 1) {
      const userName = domains[0];

      const userData = getUserByDomain({ userName: userName })
        .then((res) => {
          console.log("getUserByDomain res :", res);
        })
        .catch((err) => {
          throw new Error("getUserByDomain api failed :", err);
        });
    } else {
      const userToken = getUserToken();

      console.log("userToken :", userToken);
    }
  };

  return (
    <div className="splashCont">
      <Lottie loop animationData={splashLoad} play />
    </div>
  );
};

export default Splash;
