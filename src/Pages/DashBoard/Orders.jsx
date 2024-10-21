import React from "react";
import "./MenuOptionsStyles.css";
import "../Home/styles.css";
import "../Components/component.css";
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
  productCategories,
  sampleOrders,
  sampleProducts,
  selStyle,
} from "../Components/utils";

const papStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
};

const tableContStyle = {
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100% !important",
  overflow: "scroll",
  flexGrow: 1,
};

const Orders = () => {
  const fSize = "clamp(1rem, 1vw + 1rem, 2rem)";

  const orderColumns = ["Id", "Name", "Payment", "Status", "Cash"];

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
                          // backgroundColor: "#f6f6f6",
                        }}
                        align="center"
                        key={ind}
                      >
                        {item}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {sampleOrders.map((obj, ind) => (
                    <TableRow hover key={ind}>
                      {Object.keys(sampleOrders[0]).map((key, dex) => (
                        <TableCell align="center" key={dex}>
                          {obj[key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
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
