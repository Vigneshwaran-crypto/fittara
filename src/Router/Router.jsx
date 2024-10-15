import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../Pages/Auth/Login.jsx";
import Register from "../Pages/Auth/Register.jsx";
import NavigationRouter from "./NavigationRouter.jsx";
import Home from "../Pages/Home/Home.jsx";
import Favorites from "../Pages/DashBoard/Favourite.jsx";
import Editor from "../Pages/DashBoard/Editor.jsx";
const Router = () => {
  return (
    <BrowserRouter basename="/Fittara">
      <Routes>
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/menu/*" exact element={<NavigationRouter />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
