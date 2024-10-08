import React, { useEffect } from "react";
import "./MenuOptionsStyles.css";

import { IoTextOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { TbMessageChatbot } from "react-icons/tb";
import { FaIceCream } from "react-icons/fa";

const Explore = (props) => {
  return (
    <div className="exploreHolder">
      <div className="menuContainer">
        <div className="menuLink">
          <div className="iconHolder icon1Pos">
            <div className="iconCont">
              <IoTextOutline color="white" />
            </div>
          </div>

          <div className="iconHolder icon2Pos">
            <div className="iconCont">
              <CiImageOn color="white" />
            </div>
          </div>

          <div className="iconHolder icon3Pos">
            <div className="iconCont">
              <TbMessageChatbot color="white" />
            </div>
          </div>

          <div className="iconHolder icon4Pos">
            <div className="iconCont">
              <FaIceCream color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
