import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "./MenuOptionsStyles.css";

const Products = (props) => {
  const dispatch = useDispatch();
  const [products, setProds] = useState([]);

  const userData = useSelector(({ main }) => main.user);

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  return (
    <Container fluid className="navigationScreens">
      <Toaster position="top-center" />
      Products
    </Container>
  );
};

export default Products;
