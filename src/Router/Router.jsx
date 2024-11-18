import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavigationRouter from "./NavigationRouter.jsx";
// import LogIn from "../Pages/Auth/Login.jsx";
// import Register from "../Pages/Auth/Register.jsx";
// import Home from "../Pages/Home/Home.jsx";
// import Editor from "../Pages/DashBoard/Editor/Editor.jsx";
// import Splash from "../Application/Splash.jsx";

const Splash = lazy(() => import("../Application/Splash.jsx"));
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const LogIn = lazy(() => import("../Pages/Auth/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register.jsx"));
const Editor = lazy(() => import("../Pages/DashBoard/Editor/Editor.jsx"));
const NavigationRouter = lazy(() => import("./NavigationRouter.jsx"));

const Router = () => {
  return (
    <BrowserRouter basename="/fittara">
      <Routes>
        <Route
          path="/splash"
          index
          element={
            <Suspense fallback={<Splash />}>
              <Splash />
            </Suspense>
          }
        />
        <Route
          path="/register"
          index
          element={
            <Suspense fallback={<Splash />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Splash />}>
              <LogIn />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<Splash />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/editor"
          element={
            <Suspense fallback={<Splash />}>
              <Editor />
            </Suspense>
          }
        />

        <Route
          path="/dashboard/*"
          exact
          element={
            <Suspense fallback={<Splash />}>
              <NavigationRouter />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
