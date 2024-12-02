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

const Loader = lazy(() => import("../Application/Loader.jsx"));
const UnAuth = lazy(() => import("../Application/UnAuth.jsx"));
const Splash = lazy(() => import("../Application/Splash.jsx"));
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const LogIn = lazy(() => import("../Pages/Auth/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register.jsx"));
const Editor = lazy(() => import("../Pages/DashBoard/Editor/Editor.jsx"));
const NavigationRouter = lazy(() => import("./NavigationRouter.jsx"));

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
    if (userToken) {
      const [header, payload, signature] = userToken.split(".");
      const usr = JSON.parse(atob(payload));
      dispatch(reduxStore(saveUser(usr)));
    }
    navigation(curPath);
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        index
        element={
          <Suspense fallback={<Loader />}>
            <Splash />
          </Suspense>
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

      {isCust && (
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

      {userToken && !isCust && (
        <Route
          path="/dashboard/*"
          exact
          element={
            <Suspense fallback={<Loader />}>
              <NavigationRouter />
            </Suspense>
          }
        />
      )}
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter basename="/fittara">
      <Router />
    </BrowserRouter>
  );
};

export default AppRouter;
