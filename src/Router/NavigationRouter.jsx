import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Explore from "../Pages/DashBoard/Customers";
import Orders from "../Pages/DashBoard/Orders";
import Settings from "../Pages/DashBoard/Settings";
import UserAccount from "../Pages/DashBoard/Account/UserAccount";
import AddProduct from "../Pages/DashBoard/Account/AddProduct";
import Products from "../Pages/DashBoard/Products";
import Analytics from "../Pages/DashBoard/Analytics/Analytics";
import Customers from "../Pages/DashBoard/Customers";
import Policy from "../Pages/DashBoard/Policy";

const NavigationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route path="products" element={<Products />} />
        <Route path="explore" element={<Explore />} />
        <Route path="customers" element={<Customers />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="policies" element={<Policy />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="userAccount" element={<UserAccount />} />
        <Route path="addProduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default NavigationRouter;
