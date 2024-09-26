import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

const CustomAlert = (props) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    console.log("props values in custom alert :", props);
    console.log("props values in custom alert :", showAlert);

    setTimeout(() => {
      setShowAlert(false);
    }, props.minutes || 2000);
  }, [props]);

  return (
    <div style={{ display: "flex" }}>
      {showAlert ? (
        <Alert severity={"info"}>Hello I am Allert</Alert>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default CustomAlert;
