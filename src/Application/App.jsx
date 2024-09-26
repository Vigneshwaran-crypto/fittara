import React from "react";
import Router from "../Router/Router";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="appHolder">
      <Toaster />
      <Router />
    </div>
  );
};

export default App;
