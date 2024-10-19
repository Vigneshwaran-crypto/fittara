import React from "react";
import { CiSearch } from "react-icons/ci";
import "../MenuOptionsStyles.css";
import { Container } from "react-bootstrap";
import {
  CiMedicalClipboard,
  CiBoxes,
  CiTrophy,
  CiDeliveryTruck,
} from "react-icons/ci";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { PieChart } from "@mui/x-charts/PieChart";

const fSize = "clamp(1rem, 1vw + 1rem, 2rem)";

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

  return (
    <Container fluid className="tabScreens">
      <div className="filterHolder">
        <div className="filterConts">
          <div className="gridTitle">Analytics</div>

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
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                axisHighlight={{ x: "none", y: "none" }}
                sx={{ height: "100%", width: "100%" }}
                // width={"100%"}
                // height={"100%"}
              />
            </div>
            <div> range value </div>
          </span>
          <span>c2</span>
        </div>
        <div>item6</div>
        <div>item7</div>
      </div>
    </Container>
  );
};

export default Analytics;
