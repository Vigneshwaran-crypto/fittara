import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/DashBoard/Home";
import SideBar from "./SideBar";
import Explore from "../Pages/DashBoard/Explore";
import Favourite from "../Pages/DashBoard/Favourite";
import Crafting from "../Pages/DashBoard/Crafting/Crafting";
import Orders from "../Pages/DashBoard/Orders";
import Settings from "../Pages/DashBoard/Settings";
import UserAccount from "../Pages/DashBoard/Account/UserAccount";
import AddProduct from "../Pages/DashBoard/Account/AddProduct";

const NavigationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="favorite" element={<Favourite />} />
        <Route path="crafting" element={<Crafting />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="userAccount" element={<UserAccount />} />
        <Route path="addProduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default NavigationRouter;
