import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Container } from "react-bootstrap";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import {
  CiBoxes,
  CiDeliveryTruck,
  CiMedicalClipboard,
  CiSearch,
  CiTrophy,
} from "react-icons/ci";
import sampImg from "../../../Assets/auth/flower.png";
import { sampleOrders } from "../../Components/utils";
import "../MenuOptionsStyles.css";
import { CiCalendarDate } from "react-icons/ci";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const fSize = "clamp(1rem, 1vw + 1rem, 2rem)";
// const { RangePicker } = DatePicker;

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
const dateFormate = { format: "DD-MMM-YYYY", type: "unmask" };

const thisDay = [dayjs(), ""];
const thisWeek = [dayjs().add(-7, "d"), dayjs()];
const thisMonth = [dayjs().startOf("month"), dayjs()];

const rangePreset = [
  { label: "Today", value: thisDay },
  { label: "This Week", value: thisWeek },
  { label: "This Month", value: thisMonth },
];

const Analytics = () => {
  const menuGridList = [
    {
      id: 1,
      title: "Sales",
      icon: <CiBoxes size={fSize} />,
      count: "3,6123",
      score: "35.5%",
      bg: "#CBE5FE",
      col: "#7DC8A2",
      indiIcon: <BsArrowUpShort color="#7DC8A2" size={20} />,
    },
    {
      id: 2,
      title: "Orders",
      icon: <CiMedicalClipboard size={fSize} />,
      count: "8,887.87",
      score: "32.23%",
      bg: "#FFF0D1",
      col: "#7DC8A2",
      indiIcon: <BsArrowUpShort color="#7DC8A2" size={20} />,
    },
    {
      id: 3,
      title: "Customers",
      icon: <CiTrophy size={fSize} />,
      count: "151342.7",
      score: "-754.6%",
      bg: "#FFEBEC",
      col: "#FF8E8E",
      indiIcon: <BsArrowDownShort color="#FF8E8E" size={20} />,
    },
    {
      id: 4,
      title: "Revenue",
      icon: <CiDeliveryTruck size={fSize} />,
      count: "2342,29",
      score: "-21.34%",
      bg: "#CDF1EF",
      col: "#FF8E8E",
      indiIcon: <BsArrowDownShort color="#FF8E8E" size={20} />,
    },
  ];

  const orderColumns = ["Id", "Name", "Payment", "Status", "Cash"];

  return (
    <Container fluid className="tabScreens">
      <div className="filterHolder">
        <div className="filterConts">
          <div className="gridTitle">Analytics</div>

          {/* <div className="filterInps">
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
          </div> */}

          <div className="dateRangeHolder">
            <RangePicker
              // getPopupContainer={(trigger) => trigger.parentElement}
              // className="formFields filterItems"
              placeholder={["From Date", "To Date"]}
              // suffixIcon={<FaFilter color="#2981a8" size={12} />}
              format={dateFormate}
              allowEmpty
              picker="date"
              // presets={rangePreset}
              onChange={(val, dtStr) => {
                console.log("RangePicker dates Test on: ", val);
                console.log("RangePicker dates Test on str : ", dtStr);
              }}
            />
          </div>
        </div>
      </div>

      <div className="analiticsGridHolder">
        {menuGridList.map((value) => (
          <div>
            <div className="analysGridItem">
              <div className="analysIconCombo">
                <div
                  style={{ backgroundColor: value.bg }}
                  className="analysGridIconHolder"
                >
                  {value.icon}
                </div>

                <div className="analysGridItemTexts">
                  <span>{value.title}</span>
                </div>
              </div>

              <div className="analysTxtHolder">
                <span>{value.count}</span>
                <span style={{ color: value.col }}>
                  {value.score}
                  {value.indiIcon}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* pie chart */}
        <div>
          <span className="chartItems">
            <div>Top Revenue Channel</div>
            <div>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "Sales" },
                      { id: 1, value: 15, label: "Orders" },
                      { id: 2, value: 20, label: "Others" },
                    ],
                  },
                ]}
                axisHighlight={{ x: "none", y: "none" }}
                sx={{ height: "100%", width: "100%", flex: 1 }}
                margin={{ right: "10" }}
                slotProps={{
                  legend: {
                    position: { vertical: "bottom" },
                    direction: "row",
                  },
                }}
              />
            </div>
            <div className="pieRange">
              <span>
                <div style={{ backgroundColor: "#B800D8" }}></div> Sales
              </span>
              <span>
                <div style={{ backgroundColor: "#03B2AF" }}></div> Orders
              </span>
              <span>
                <div style={{ backgroundColor: "#2E96FF" }}></div> Others
              </span>
            </div>
          </span>
          <span className="topProductsHolder">
            <div className="analysHeadings">Top Products</div>
            <div>
              <div className="analysProdList">
                {sampleOrders.map((prods) => (
                  <div className="analysProdItem">
                    <div className="prodImageCont">
                      <img src={sampImg} />
                    </div>
                    <div className="prodtxtsCont">
                      <span>{prods.name}</span>
                      <span>{prods.cash}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </span>
        </div>

        {/* Line chart */}
        <div>
          <div
            className="analysHeadings"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Revenue Vs Order
            <div
              className="pieRange"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                width: "45%",
              }}
            >
              <span>
                <div style={{ backgroundColor: "#2E96FF" }}></div> Revenue
              </span>
              <span>
                <div style={{ backgroundColor: "#03B2AF" }}></div> Order
              </span>
            </div>
          </div>
          <span>
            <LineChart
              // xAxis={[{ dataKey: "x" }]}
              series={[
                { curve: "natural", data: [0, 5, 2, 6, 3, 9.3] },
                { curve: "natural", data: [6, 3, 7, 9.5, 4, 2] },
              ]}
              margin={{ left: 20, right: 5, top: 7, bottom: 20 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </span>
        </div>

        <div>
          <div className="analysHeadings">Recent Invoice</div>
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
      </div>
    </Container>
  );
};

export default Analytics;
