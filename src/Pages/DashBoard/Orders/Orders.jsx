import React, { useEffect, useReducer, useState } from "react";
// import "./MenuOptionsStyles.css";
// import "../Home/styles.css";
// import "../Components/component.css";
import { Radio, RadioGroup, Sheet } from "@mui/joy";
import { Container } from "react-bootstrap";
import {
  CiMedicalClipboard,
  CiSearch,
  CiBoxes,
  CiTrophy,
  CiDeliveryTruck,
} from "react-icons/ci";
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
import {
  gender,
  inpStye,
  papStyle,
  productCategories,
  sampleOrders,
  sampleProducts,
  selStyle,
  tableContStyle,
} from "../../Components/utils";
import { getAllOrders } from "../../../Api/ShopService";

import { GiHoodie } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { GiBilledCap } from "react-icons/gi";
import { TbMugFilled } from "react-icons/tb";
import { FaBottleWater } from "react-icons/fa6";

import { ImMug } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { dtFormed } from "../../../Common/Utils";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../../../ReduxToolKit/MainSlice";
import { saveOrders } from "../../../ReduxToolKit/Actions";
const noBorder = { borderBottom: "0", paddingBottom: 0, paddingTop: "15px" };

const Orders = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const fSize = "clamp(1rem, 1vw + 1rem, 2rem)";

  const allOrders = useSelector(({ main }) => main.allOrders);
  const [orderList, setOrderList] = useState(allOrders);

  const [loader, setLoader] = useState(false);

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

  const menuGridList = [
    {
      id: 1,
      title: "Orders",
      icon: <CiBoxes size={fSize} />,
      count: "36",
      bg: "#CBE5FE",
    },
    {
      id: 2,
      title: "Pending",
      icon: <CiMedicalClipboard size={fSize} />,
      count: "28",
      bg: "#FFF0D1",
    },
    {
      id: 3,
      title: "Completed",
      icon: <CiTrophy size={fSize} />,
      count: "15",
      bg: "#FFEBEC",
    },
    {
      id: 4,
      title: "Shipped",
      icon: <CiDeliveryTruck size={fSize} />,
      count: "22",
      bg: "#CDF1EF",
    },
  ];

  useEffect(() => {
    sessionStorage.setItem("curPath", "/dashboard/orders");
    setLoader(true);
    getAllOrders()
      .then((res) => {
        console.log("getAllOrders res :", res);
        if (res.data?.status) {
          const orderList = res.data?.data || [];
          dispatch(reduxStore(saveOrders(orderList)));
          setOrderList(orderList);
        }
        setLoader(false);
      })
      .catch((err) => {
        console.log("getAllOrders err :", err);
        setLoader(false);
      });
  }, []);

  const onOrderClick = (order) => {
    nav("/viewOrder", { state: { order, from: false } });
  };

  return (
    <Container fluid className="tabScreens">
      <div className="orderGridHolder">
        <RadioGroup
          aria-labelledby="storage-label"
          defaultValue="1"
          size="lg"
          sx={{
            gap: 1,
            display: "grid",
            boxSizing: "border-box",
            gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
            gridAutoRows: "1fr",
            width: "100%",
          }}
          onChange={(e) => {
            console.log("onChange radioGrp :", e.target.value);
            const val = e.target.value;
          }}
        >
          {menuGridList.map((value) => (
            <Sheet
              key={value.id}
              size="lg"
              sx={{
                p: "10px",
                borderRadius: "sm",
                boxShadow: 2,
                backgroundColor: "white",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "white !important",
                  opacity: "1 !important",
                },
              }}
            >
              <Radio
                size="lg"
                overlay
                disableIcon
                value={value.id}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: (theme) => ({
                      ...(checked && {
                        "--variant-borderWidth": "1.3px",
                        "&&": {
                          borderColor: theme.vars.palette.primary[500],
                        },
                      }),
                      "&:hover": {
                        // Keep the hover style clean, no color mess-up
                        borderColor: theme.vars.palette.primary[0],
                        backgroundColor: "transparent !important",
                        opacity: "1 !important",
                      },
                    }),
                  }),
                }}
              />

              <div className="orderGridItem">
                <div
                  style={{ backgroundColor: value.bg }}
                  className="orderGridIconHolder"
                >
                  {value.icon}
                </div>

                <div className="orderGridItemTexts">
                  <span>{value.count}</span>
                  <span>{value.title}</span>
                </div>
              </div>
            </Sheet>
          ))}
        </RadioGroup>
      </div>
      <div className="orderListContent">
        <div className="filterHolder">
          <div className="filterConts">
            <div className="gridTitle">All Orders</div>

            <div className="filterInps">
              <div
                className="searchBar"
                style={{
                  paddingInline: "8px",
                  gap: "5px",
                  height: "fit-content",
                  flex: 1.5,
                  backgroundColor: "#f6f6f6",
                }}
              >
                <CiSearch size={20} />
                <input
                  className="searchInput"
                  placeholder="Search"
                  style={{ backgroundColor: "#f6f6f6" }}
                />
              </div>

              <FormControl size="small" className="orderFilterSelectHolder">
                <Autocomplete
                  freeSolo
                  options={sampleProducts}
                  size="small"
                  getOptionLabel={(option) =>
                    option.product ? option.product : ""
                  }
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      size="small"
                      fullWidth
                      variant="standard"
                      placeholder="Filter"
                      sx={inpStye}
                    />
                  )}
                  // value={product.name}
                  onInputChange={(e, val) => {
                    console.log("onInputChange : ", val);
                  }}
                  onChange={(e, val) => {
                    console.log("onChange : ", val);
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="orderListHolder">
          <Paper sx={papStyle}>
            <TableContainer style={tableContStyle}>
              <Table stickyHeader padding="normal" size="small">
                <TableHead>
                  <TableRow>
                    {orderColumns.map((item, ind) => (
                      <TableCell
                        style={{
                          fontSize: "medium",
                          fontWeight: "500",
                          fontFamily: "Lucida Sans Regular",
                        }}
                        align="center"
                        key={ind}
                      >
                        {item.title}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {!orderList.length && loader ? (
                    orderColumns.map((item, ind) => (
                      <TableRow key={ind}>
                        <TableCell sx={noBorder} colSpan={12}>
                          <Skeleton />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : orderList.length ? (
                    orderList.map((obj, ind) => (
                      <TableRow
                        hover
                        key={ind}
                        onClick={onOrderClick.bind(this, obj)}
                      >
                        {orderColumns.map((col, dex) => (
                          <TableCell
                            style={{
                              color: col.key === "status" ? "orange" : "black",
                            }}
                            align="center"
                            key={dex}
                          >
                            {col.key === "productId"
                              ? getProducts[obj[col.key]]
                              : col.key === "price"
                              ? obj[col.key] + " ₹"
                              : col.key === "createdAt"
                              ? dtFormed(obj[col.key])
                              : obj[col.key]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell sx={noBorder} align="center" colSpan={12}>
                        <span className="noAstIndicator">No Orders Yet</span>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <div className="paginationHolder">
          <Pagination count={10} size="small" />
        </div>
      </div>
    </Container>
  );
};

export default Orders;
