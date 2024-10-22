import React, { useEffect } from "react";
import "./MenuOptionsStyles.css";
import "../Home/styles.css";
import {
  papStyle,
  prods,
  sampleOrders,
  tableContStyle,
  sampleProducts,
  inpStye,
} from "../Components/utils";
import {
  Autocomplete,
  Button,
  FormControl,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CiMedicalClipboard,
  CiSearch,
  CiBoxes,
  CiTrophy,
  CiDeliveryTruck,
} from "react-icons/ci";
import { Container } from "react-bootstrap";

const Customers = () => {
  const orderColumns = ["Id", "Name", "Payment", "Status", "Cash"];

  return (
    <Container fluid className="tabScreens">
      <div className="orderListContent">
        <div className="filterHolder">
          <div className="filterConts">
            <div className="gridTitle">Customers</div>

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

export default Customers;
