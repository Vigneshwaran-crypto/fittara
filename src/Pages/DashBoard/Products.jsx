import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "./MenuOptionsStyles.css";
import "../Home/styles.css";
import { prods } from "../Components/utils";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const userData = useSelector(({ main }) => main.user);
  const navigation = useNavigate();

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  return (
    <Container fluid className="tabScreens">
      <div
        className="backContent"
        style={{ justifyContent: "space-between", paddingBottom: "10px" }}
      >
        <div className="backTexts">
          <span className="screenTitle">Your Products</span>
        </div>

        <Button
          className="addProductBt"
          variant="outlined"
          onClick={() => navigation("/dashboard/addProduct")}
        >
          Add Product
        </Button>
      </div>

      <div className="productsHolder">
        <div
          className="prodList"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            position: "absolute",
            overflow: "auto",
            paddingBottom: "20px",
          }}
        >
          {prods.length !== 0 ? (
            prods.map((item) => (
              <div className="prodItem">
                <img className="prodImg" src={item.img} />
                <div className="namePriceTag">
                  {item.prod}
                  <span>{item.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="addProductHolder">
              <span className="noProductText">No products added yet</span>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Products;
