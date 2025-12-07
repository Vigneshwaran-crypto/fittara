import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Application/Loader.jsx";
import Splash from "../Application/Splash.jsx";
import CustomerOrders from "../Pages/Home/CustomerOrders.jsx";
import AuthRoute from "./AuthRoute.jsx";

const UnAuth = lazy(() => import("../Application/UnAuth.jsx"));
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const LogIn = lazy(() => import("../Pages/Auth/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register.jsx"));
const Editor = lazy(() => import("../Pages/DashBoard/Editor/Editor.jsx"));
const NavigationRouter = lazy(() => import("./NavigationRouter.jsx"));
const ViewOrder = lazy(() => import("../Pages/DashBoard/Orders/ViewOrder.jsx"));
// 1 - customer
// 2 - admin
const Router = () => {
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

      <Route
        path="/custOrders"
        element={
          <AuthRoute>
            <CustomerOrders />
          </AuthRoute>
        }
      />

      <Route
        path="/viewOrder"
        element={
          <Suspense fallback={<Loader />}>
            <AuthRoute roles={[1]}>
              <ViewOrder />
            </AuthRoute>
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
              <AuthRoute roles={[1]}>
                <Home />
              </AuthRoute>
            </Suspense>
          }
        />

        <Route
          path="/editor"
          element={
            <Suspense fallback={<Loader />}>
              <AuthRoute roles={[1]}>
                <Editor />
              </AuthRoute>
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
              <AuthRoute roles={[2]}>
                <NavigationRouter />
              </AuthRoute>
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
