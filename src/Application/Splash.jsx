import React, { useEffect } from "react";
import "./App.css";
import splashLoad from "../Assets/AnimJson/splashLoad.json";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../Common/SessionHandler";
import { getUserByDomain } from "../Api/UsersService";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, shopDetailsStore } from "../ReduxToolKit/Actions";
import { reduxStore } from "../ReduxToolKit/MainSlice";

const Splash = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const urlFromBrowser = window.location.href;
  const urlparts = new URL(urlFromBrowser);

  useEffect(() => {
    console.log("URL from browser :", urlparts.hostname.split("."));

    checkLastActivity();
  }, []);

  const checkLastActivity = () => {
    const domains = urlparts.hostname.split(".");
    // client's url with subdomain as their userName
    console.log("founded domain :", domains);
    if (domains.length > 1) {
      const userName = domains[0];
      getUserByDomain({ userName: userName })
        .then((res) => {
          console.log("getUserByDomain res :", res);
          if (res.data.status === 1) {
            navigation("/home", { replace: true });
            const shopData = res.data.data;
            dispatch(reduxStore(shopDetailsStore(shopData)));
          } else {
            // checkForToken();
            navigation("/unauth", { state: { shop: userName } });
          }
        })
        .catch((err) => {
          checkForToken();
          throw new Error("getUserByDomain api failed :", err);
        });
    } else {
      checkForToken();
    }
  };

  const checkForToken = () => {
    const userToken = getUserToken();
    if (userToken) {
      navigation("/dashboard/products", { replace: true });
    } else {
      navigation("/login", { replace: true });
    }
  };

  return (
    <div className="splashCont">
      <Lottie loop animationData={splashLoad} play />
    </div>
  );
};

export default Splash;
