import React, { useEffect, useRef, useState } from "react";
import "./custom.css";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const CustomSwitch = ({ curSwitch }) => {
  const [selectedPlan, setSelectedPlan] = useState("Seller");

  useEffect(() => {
    document.querySelectorAll('input[name="switchPlan"]').forEach((elem) => {
      elem.addEventListener("change", function (event) {
        let selectedOption = event.target.value;

        if (selectedOption === "Seller") {
          curSwitch(true);
        } else if (selectedOption === "Buyer") {
          curSwitch(false);
        }
      });
    });
  }, []);

  return (
    <>
      <div class="holder">
        <div class="switches-container">
          <input
            type="radio"
            id="switchMonthly"
            name="switchPlan"
            value="Seller"
            className="switchPut"
            // checked="true"
            checked={selectedPlan === "Seller"}
            onChange={() => setSelectedPlan("Seller")}
          />
          <input
            type="radio"
            id="switchYearly"
            name="switchPlan"
            value="Buyer"
            className="switchPut"
            checked={selectedPlan === "Buyer"}
            onChange={() => setSelectedPlan("Buyer")}
          />
          <label className="swicthLable" for="switchMonthly">
            {/* Seller */}
            <CiShop size={21} color="white" />
          </label>
          <label className="swicthLable" for="switchYearly">
            {/* Buyer */}
            <CiShoppingCart size={24} color="white" />
          </label>
          <div className="switch-wrapper">
            <div className="switch">
              <div className="flagText">Seller</div>
              <div>Buyer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSwitch;
