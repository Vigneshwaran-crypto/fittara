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
// import Enhancer from "../Pages/DashBoard/Editor/Enhancer.jsx";

// const Loader = lazy(() => import("../Application/Loader.jsx"));
// const Splash = lazy(() => import("../Application/Splash.jsx"));

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
  const curPath = sessionStorage.getItem("curPath") || "/splash";

  useEffect(() => {
    console.log("isCust in Router :", isCust);
    console.log("userToken in Router :", userToken);
    console.log("curPath in Router :", curPath);
    // if (curPath !== "/splash") navigation(curPath);
    // if (userToken) {
    //   const [header, payload, signature] = userToken.split(".");
    //   const usr = JSON.parse(atob(payload));
    //   dispatch(reduxStore(saveUser(usr)));
    // }
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        index
        element={
          // <Suspense fallback={<Loader />}>
          <Splash />
          // </Suspense>
        }
      />

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

      <Route
        path="/unauth"
        element={
          <Suspense fallback={<Loader />}>
            <UnAuth />
          </Suspense>
        }
      />

      {/* <Route
        path="/enhancer"
        element={
          <Suspense fallback={<Loader />}>
            <Enhancer />
          </Suspense>
        }
      /> */}

      {/* isCust && */}
      {isCustomer && (
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
      )}

      {/* userToken && !isCust && */}
      {!isCustomer && (
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

          <Route
            path="/viewOrder"
            element={
              <Suspense fallback={<Loader />}>
                <ViewOrder />
              </Suspense>
            }
          />
        </>
      )}
    </Routes>
  );
};

const AppRouter = () => {
  // basename="fittara"
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default AppRouter;
