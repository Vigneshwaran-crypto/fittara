import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getUserToken } from "../Common/SessionHandler.js";

const Loader = lazy(() => import("../Application/Loader.jsx"));
const UnAuth = lazy(() => import("../Application/UnAuth.jsx"));
const Splash = lazy(() => import("../Application/Splash.jsx"));
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const LogIn = lazy(() => import("../Pages/Auth/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register.jsx"));
const Editor = lazy(() => import("../Pages/DashBoard/Editor/Editor.jsx"));
const NavigationRouter = lazy(() => import("./NavigationRouter.jsx"));

const Router = () => {
  const userToken = getUserToken();
  const isCust = new URL(window.location.href).hostname.split(".").length > 1;

  useEffect(() => {
    console.log("isCust in Router :", isCust);
    console.log("userToken in Router :", userToken);
  }, []);

  return (
    <BrowserRouter basename="/fittara">
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
    </BrowserRouter>
  );
};

export default Router;
