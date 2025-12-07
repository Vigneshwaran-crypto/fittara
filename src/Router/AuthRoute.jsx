import React from "react";
import { getUserToken } from "../Common/SessionHandler";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children, roles }) => {
  const userToken = getUserToken();
  const isCust = new URL(window.location.href).hostname.split(".").length > 1;
  const authRole = isCust ? 1 : 2;
  if (!isCust && !userToken) {
    return <Navigate to={"/login"} />;
  }
  if (roles.includes(authRole)) return children;
  return <Navigate to={"/unauth"} />;
};

export default AuthRoute;
