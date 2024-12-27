import React from "react";
import styles from "./component.css";
import { Col, Container, Row } from "react-bootstrap";
import { CiSearch, CiShoppingCart, CiSliderHorizontal } from "react-icons/ci";
import { Button, IconButton } from "@mui/material";
import { PiDressLight, PiWatchLight, PiHandbagLight } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import { CiGift, CiUser } from "react-icons/ci";
import { Toaster } from "react-hot-toast";
import { iconButtonStyle } from "./utils";
import { isCustomer } from "../../Common/Constant";
import { IoMdNotificationsOutline } from "react-icons/io";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const TopBar = ({ onMenuClick, onUserClick }) => {
  const isCust = new URL(window.location.href).hostname.split(".").length > 1;
  const navigation = useNavigate();

  const onBrandClick = () => {
    navigation("/enhancer");
  };

  return isCust ? (
    <Row className="topBarHolder" style={{ padding: 10, margin: 0 }}>
      <Col md={5} lg={5} sm={12} xs={12} className="brandTextHolder">
        <div className="brandText" onClick={onBrandClick}>
          SOMOYA
        </div>

        <div className="searchBar">
          <CiSearch size={20} style={{ marginLeft: 10, marginRight: 3 }} />
          <input className="searchInput" placeholder="Search for anything" />
        </div>
      </Col>

      <Col md={6} lg={6} sm={12} xs={12} className="dropMenuHolder">
        <div className="dropdown">
          <Button
            variant="text"
            color="primary"
            sx={{
              color: "black",
              fontFamily: "initial",
              textTransform: "none",
              fontSize: "17px",
            }}
          >
            <PiHandbagLight size={17} style={{ marginRight: "3px" }} />
            Collections {"\b"}
            <div className="dropChevIcon">
              <GoChevronDown size={17} />
            </div>
          </Button>
          <div className="dropdown-content">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Juniors</a>
          </div>
        </div>
        <div className="dropdown">
          <Button
            variant="text"
            color="primary"
            sx={{
              color: "black",
              fontFamily: "initial",
              textTransform: "none",
              fontSize: "17px",
            }}
          >
            <PiDressLight style={{ marginRight: "2px" }} />
            Fashion {"\b"}
            <div className="dropChevIcon">
              <GoChevronDown size={17} />
            </div>
          </Button>
          <div className="dropdown-content">
            <a href="#">Party</a>
            <a href="#">Travel</a>
            <a href="#">Sports</a>
            <a href="#">Night Wears</a>
          </div>
        </div>
        <div className="dropdown">
          <Button
            variant="text"
            color="primary"
            sx={{
              color: "black",
              fontFamily: "initial",
              textTransform: "none",
              fontSize: "17px",
            }}
          >
            <PiWatchLight style={{ marginRight: "2px" }} />
            Accessories {"\b"}
            <div className="dropChevIcon">
              <GoChevronDown size={17} />
            </div>
          </Button>
          <div className="dropdown-content">
            <a href="#">Watch</a>
            <a href="#">Wearables</a>
            <a href="#">Rings</a>
            <a href="#">Chains</a>
            <a href="#">Anklets</a>
          </div>
        </div>

        <div className="dropdown">
          <Button
            variant="text"
            color="primary"
            sx={{
              color: "black",
              fontFamily: "initial",
              textTransform: "none",
              fontSize: "17px",
            }}
          >
            <CiUser size={17} style={{ marginRight: "2px" }} />
            About {"\b"}
          </Button>
        </div>
      </Col>

      <Col md={1} lg={1} sm={12} xs={12} className="topBarIconHolder">
        <Button color="primary" variant="text" sx={iconButtonStyle}>
          <CiSliderHorizontal size={27} onClick={() => onMenuClick()} />
        </Button>

        <Button color="primary" variant="text" sx={iconButtonStyle}>
          <CiShoppingCart size={27} />
        </Button>

        <div className="userIconButton">
          <Button
            color="primary"
            variant="text"
            sx={iconButtonStyle}
            onClick={onUserClick}
          >
            <CiUser size={25} />
          </Button>
        </div>
      </Col>
    </Row>
  ) : (
    <Row className="topBarHolder" style={{ padding: 10, margin: 0 }}>
      <Col md={5} lg={5} sm={12} xs={12} className="brandTextHolder">
        <div className="brandText" onClick={onBrandClick}>
          SOMOYA
        </div>
      </Col>

      <Col md={7} lg={7} sm={12} xs={12} className="dropMenuHolder">
        <div className="searchBar" style={{ width: "50%" }}>
          <CiSearch size={20} style={{ marginLeft: 10, marginRight: 3 }} />
          <input className="searchInput" placeholder="Search for anything" />
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            gap: "15px",
          }}
        >
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="cart">
            <Badge color="secondary" variant="dot">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="cart">
            <PersonIcon />
          </IconButton>
        </div>
      </Col>
    </Row>
  );
};

export default TopBar;
