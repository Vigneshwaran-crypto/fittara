import React from "react";
import { CiSearch } from "react-icons/ci";
import "../MenuOptionsStyles.css";
import { Container } from "react-bootstrap";

const Analytics = () => {
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
        <div> item1 </div>
        <div>item2</div>
        <div>item3</div>
        <div>item4</div>
        <div>item5</div>
        <div>item6</div>
        <div>item7</div>
      </div>
    </Container>
  );
};

export default Analytics;
