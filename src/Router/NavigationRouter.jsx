import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/MenuOptions/Home";
import SideBar from "./SideBar";
import Explore from "../Pages/MenuOptions/Explore";
import Favourite from "../Pages/MenuOptions/Favourite";
import Crafting from "../Pages/MenuOptions/Crafting/Crafting";
import Orders from "../Pages/MenuOptions/Orders";
import Settings from "../Pages/MenuOptions/Settings";
import UserAccount from "../Pages/MenuOptions/Account/UserAccount";
import AddProduct from "../Pages/MenuOptions/Account/AddProduct";

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
