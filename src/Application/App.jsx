import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AppRouter from "../Router/Router";

const App = () => {
  return (
    <div className="appHolder">
      <Toaster />
      <AppRouter />
    </div>
  );
};

export default App;
