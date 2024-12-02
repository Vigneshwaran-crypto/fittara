import React, { useEffect } from "react";
import "../MenuOptionsStyles.css";

import UserDetails from "../../Components/UserDetails";
import Home from "../../Home/Home";
import "../../Home/styles.css";

const UserAccount = () => {
  useEffect(() => {
    sessionStorage.setItem("curPath", "/dashboard/userAccount");
  }, []);

  return (
    <div className="screenContainer">
      <div className="rowHolder">
        <div className="userProductHolder">
          <div className="homeCont">
            <Home noTopBar={true} />
          </div>
        </div>

        <div className="userAccDetailsHolder">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
