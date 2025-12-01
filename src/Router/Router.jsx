import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getUserToken } from "../Common/SessionHandler.js";
import { useDispatch } from "react-redux";
import { reduxStore } from "../ReduxToolKit/MainSlice.js";
import { saveUser } from "../ReduxToolKit/Actions.js";
import { isCustomer } from "../Common/Constant.js";
import Loader from "../Application/Loader.jsx";
import Splash from "../Application/Splash.jsx";
import CustomerOrders from "../Pages/Home/CustomerOrders.jsx";
import Notes from "../Pages/Home/Notes.jsx";

const UnAuth = lazy(() => import("../Application/UnAuth.jsx"));
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const LogIn = lazy(() => import("../Pages/Auth/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register.jsx"));
const Editor = lazy(() => import("../Pages/DashBoard/Editor/Editor.jsx"));
const NavigationRouter = lazy(() => import("./NavigationRouter.jsx"));
const ViewOrder = lazy(() => import("../Pages/DashBoard/Orders/ViewOrder.jsx"));

const Router = () => {
  const dispatch = useDispatch();
  const userToken = getUserToken();
  const isCust = new URL(window.location.href).hostname.split(".").length > 1;

  const navigation = useNavigate();
  const curPath = sessionStorage.getItem("curPath");

  useEffect(() => {
    console.log("Auth Host Router:", window.location.href);
    console.log("isCust in Router :", isCust);
    console.log("userToken in Router :", userToken);
    console.log("curPath in Router :", curPath);

    if (!isCust && !userToken) {
      navigation("/unauth");
    } else if (isCust) navigation("/");
    else if (curPath !== "/splash") navigation(curPath);
    else if (userToken) {
      const [header, payload, signature] = userToken.split(".");
      const usr = JSON.parse(atob(payload));
      dispatch(reduxStore(saveUser(usr)));
    }
  }, []);

  return (
    <Routes>
      <Route path="/*" index element={<Splash />} />

      <Route
        path="/register"
        element={
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        }
      />

      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader />}>
            <LogIn />
          </Suspense>
        }
      />

      <Route path="/custOrders" element={<CustomerOrders />} />

      <Route
        path="/viewOrder"
        element={
          <Suspense fallback={<Loader />}>
            <ViewOrder />
          </Suspense>
        }
      />

      <Route
        path="/unauth"
        element={
          <Suspense fallback={<Loader />}>
            <UnAuth />
          </Suspense>
        }
      />

      <>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/editor"
          element={
            <Suspense fallback={<Loader />}>
              <Editor />
            </Suspense>
          }
        />
      </>

      <>
        <Route
          path="/dashboard/*"
          exact
          element={
            <Suspense fallback={<Loader />}>
              <NavigationRouter />
            </Suspense>
          }
        />
      </>
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default AppRouter;
