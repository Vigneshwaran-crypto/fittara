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
import { isCustomer } from "../Common/Constant";

const Splash = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const urlFromBrowser = window.location.href;
  const urlparts = new URL(urlFromBrowser);

  useEffect(() => {
    console.log("Splash works");
    // console.log("URL from browser in Splash:", urlparts.hostname.split("."));
    checkLastActivity();
  }, []);

  const checkLastActivity = () => {
    // if (isCustomer) {
    //   navigation("/home", { replace: true });
    // } else {
    //   navigation("/dashboard/orders", { replace: true });
    // }

    const domains = urlparts.hostname.split(".");
    const userName = domains[0];
    // client's url with subdomain as their userName
    console.log("founded domain :", domains);

    if (domains.length > 1) {
      // navigation("/home", { replace: true });
      getUserByDomain({ userName: userName })
        .then((res) => {
          console.log("getUserByDomain res :", res);
          if (res.data.status === 1) {
            const shopData = res.data.data;
            dispatch(reduxStore(shopDetailsStore(shopData)));
            navigation("/home", { replace: true });
            // if (shopData.isSeller) {
            //   navigation("/dashboard/products", { replace: true });
            // } else {
            //   navigation("/home", { replace: true });
            // }
          } else {
            navigation("/unauth", { state: { shop: userName } });
          }
        })
        .catch((err) => {
          navigation("/unauth", { state: { shop: "Your" } });
          // checkForToken();
        });
    } else {
      // navigation("/unauth", { state: { shop: "Your" } });
      // navigation("/dashboard/orders", { replace: true });
      checkForToken();
    }
  };

  const checkForToken = () => {
    const userToken = getUserToken();
    if (userToken) {
      console.log("userToken navigate");
      navigation("/dashboard/products", { replace: true });
    } else {
      console.log("unauth navigate");

      // navigation("/home", { replace: true });
      sessionStorage.setItem("curPath", "/login");
      navigation("/unauth", { replace: true });
    }
  };

  return (
    <div className="splashCont">
      <Lottie loop animationData={splashLoad} play />
      splash
    </div>
  );
};

export default Splash;
