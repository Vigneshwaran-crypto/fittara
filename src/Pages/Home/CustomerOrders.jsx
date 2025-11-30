import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./styles.css";
import {
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import "../DashBoard/MenuOptionsStyles.css";
import { papStyle, tableContStyle } from "../Components/utils";
import { getAllOrders } from "../../Api/ShopService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dtFormed } from "../../Common/Utils";
import axios from "axios";

const noBorder = { borderBottom: "0", paddingBottom: 0, paddingTop: "15px" };

export const CustomerOrders = () => {
  const [loader, setLoader] = useState(false);

  //   const allOrders = useSelector(({ main }) => main.allOrders);
  const [orderList, setOrderList] = useState([]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const orderColumns = [
    { title: "Id", key: "id" },
    {
      title: "Product",
      key: "productId",
    },
    { title: "Date", key: "createdAt" },
    { title: "Customer Name", key: "name" },
    { title: "Payment", key: "paymentType" },
    { title: "Status", key: "status" },
    { title: "Price", key: "price" },
  ];

  const getProducts = {
    1: "Hoodie",
    2: "T-Shirt",
    3: "Tote Bag",
    4: "Cap",
    5: "Coffee Mug",
    6: "Water Bottle",
  };

  useEffect(() => {
    setLoader(true);
    getAllOrders()
      .then((res) => {
        console.log("getAllOrders res :", res);
        if (res.data?.status) {
          const orderList = res.data?.data || [];
          //   dispatch(reduxStore(saveOrders(orderList)));
          setOrderList(orderList);
        }
        setLoader(false);
      })
      .catch((err) => {
        console.log("getAllOrders err :", err);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    axios
      .post("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("get all products :", res);
      })
      .catch((err) => {
        console.log("get all products err :", err);
      });
  }, []);

  const onOrderClick = (order) => {
    nav("/viewOrder", { state: { order, from: true } });
  };

  return (
    <Container fluid className="custOrderScreen">
      <div className="parent">
        <div className="fullCover"></div>

        <div className="revealerWrapper">
          <div style={{ height: "50dvh" }} className="revealer">
            IM revelaer
          </div>
        </div>

        <div className="checker"></div>
      </div>
    </Container>
  );
};

export default CustomerOrders;
