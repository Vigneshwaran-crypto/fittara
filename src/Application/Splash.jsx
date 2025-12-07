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
  const userToken = getUserToken();

  const isCust = new URL(window.location.href).hostname.split(".").length > 1;

  useEffect(() => {
    console.group("Splash Works");
    console.log("Auth Host Splash:", window.location.href);
    console.log("isCust in Splash :", isCust);
    console.log("userToken in Splash :", userToken);
    console.groupEnd();

    if (!isCust && !userToken) {
      navigation("/login");
    }

    if (isCust) {
      navToShop();
    } else {
      authAdmin();
    }
  }, []);

  const navToShop = () => {
    const urlparts = new URL(window.location.href);
    console.log("urlparts in navToShop :", urlparts);
    const domains = urlparts.hostname.split(".");
    const userName = domains[0];
    console.log("Shop domain :", domains);
    getUserByDomain({ userName: userName })
      .then((res) => {
        console.log("getUserByDomain res :", res);
        if (res.data.status === 1) {
          const shopData = res.data.data;
          dispatch(reduxStore(shopDetailsStore(shopData)));
          navigation("/home", { replace: true });
        } else {
          navigation("/unauth", { state: { shop: userName } });
        }
      })
      .catch((err) => {
        navigation("/unauth", { state: { shop: "Your" } });
      });
  };

  const authAdmin = () => {
    if (userToken) {
      const [header, payload, signature] = userToken.split(".");
      const usr = JSON.parse(atob(payload));
      console.log("user from token :", atob(payload));
      dispatch(reduxStore(saveUser(usr)));
      navigation("/dashboard/products", { replace: true });
    } else {
      navigation("/login");
    }
  };

  return (
    <div className="splashCont">
      <Lottie loop animationData={splashLoad} play />
    </div>
  );
};

export default Splash;
