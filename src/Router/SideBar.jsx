import {
  Button,
  Drawer,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { CgChevronDoubleRight } from "react-icons/cg";
import {
  CiBookmark,
  CiGift,
  CiCircleList,
  CiSliderVertical,
  CiShare1,
  CiAlignBottom,
  CiGrid41,
  CiShop,
  CiViewList,
  CiPen,
} from "react-icons/ci";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import userImage from "../Assets/auth/userProfile.png";
import TopBar from "../Pages/Components/TopBar";
import { iconButtonStyle } from "../Pages/Components/utils";
import "../Pages/DashBoard/MenuOptionsStyles.css";
import UserDetails from "../Pages/Components/UserDetails";

const buttonAct = {
  // margin: 1,
  paddingBlock: "6px",
  borderRadius: 1.5,
  backgroundColor: "#292929",
  color: "white",
  transition: "2s",
  ".MuiListItemIcon-root": {
    color: "white",
  },
  "&:hover": {
    color: "white",
    backgroundColor: "#292929",
    ".MuiListItemIcon-root": {
      color: "white",
    },
  },
};

const buttonInAct = {
  // margin: 1,
  paddingBlock: "6px",
  borderRadius: 1.5,
  color: "black",
  ".MuiListItemIcon-root": {
    color: "black",
  },
  "&:hover": {
    ".MuiListItemIcon-root": {
      transform: "scale(1.1)",
      transition: "1s",
    },
  },
};

const menuButtonsStyles = {
  height: "auto",
  paddingLeft: 5,
  paddingRight: 0,
  paddingTop: 0,
  paddingBlock: "3px",
  borderRadius: "5px",
  margin: "5px",
  marginBlock: "5px",
  fontSize: "0.9dvw",
};

const SideBar = () => {
  const [isollapsed, setIsCollapsed] = useState(false);
  const curUrl = useLocation().pathname.split("/").pop();

  const [showMenu, setShowMenu] = useState(false);
  const [showUsr, setShowUsr] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onMenuItemClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const proSideBar = (
    <Sidebar
      className="menuBar"
      style={{
        transform: showMenu ? "translateX(-100%)" : "translateX(0%)",
      }}
      width="14%"
      collapsed={isollapsed}
    >
      <Button
        color="primary"
        variant="text"
        sx={iconButtonStyle}
        className="collapseButton xRotate"
        onClick={() => setIsCollapsed(!isollapsed)}
      >
        <CgChevronDoubleRight
          size={20}
          style={{
            transform: isollapsed ? "none" : "rotateY(180deg)",
            transition: "0.5s",
          }}
        />
      </Button>

      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            return {
              ":hover": {
                backgroundColor: "transparent",
              },
            };
          },
        }}
      >
        <MenuItem
          active={curUrl === "products"}
          component={<Link to="/dashboard/products" />}
          style={menuButtonsStyles}
          onClick={onMenuItemClick}
        >
          <ListItemButton
            className="MenuButton"
            sx={curUrl === "products" ? buttonAct : buttonInAct}
          >
            <div>
              <CiShop size={23} descent={20} />
            </div>
            {!isollapsed && <div>Products</div>}
          </ListItemButton>
        </MenuItem>

        <MenuItem
          active={curUrl === "home"}
          component={<Link to="/dashboard/orders" />}
          style={menuButtonsStyles}
          onClick={onMenuItemClick}
        >
          <ListItemButton
            className="MenuButton"
            sx={curUrl === "orders" ? buttonAct : buttonInAct}
          >
            <div>
              {/* <CiViewList size={23} /> */}
              <CiCircleList size={22} />
            </div>
            {!isollapsed && <div>Orders</div>}
          </ListItemButton>
        </MenuItem>

        <MenuItem
          active={curUrl === "home"}
          component={<Link to="/dashboard/customers" />}
          style={menuButtonsStyles}
          onClick={onMenuItemClick}
        >
          <ListItemButton
            className="MenuButton"
            sx={curUrl === "customers" ? buttonAct : buttonInAct}
          >
            <div>
              <CiGrid41 size={23} />
            </div>
            {!isollapsed && <div>Customers</div>}
          </ListItemButton>
        </MenuItem>

        <MenuItem
          active={curUrl === "analytics"}
          component={<Link to="/dashboard/analytics" />}
          style={menuButtonsStyles}
          onClick={onMenuItemClick}
        >
          <ListItemButton
            className="MenuButton"
            sx={curUrl === "analytics" ? buttonAct : buttonInAct}
          >
            <div>
              <CiAlignBottom size={23} />
            </div>
            {!isollapsed && <div>Analytics</div>}
          </ListItemButton>
        </MenuItem>

        <MenuItem
          active={curUrl === "policies"}
          component={<Link to="/dashboard/policies" />}
          style={menuButtonsStyles}
          onClick={onMenuItemClick}
        >
          <ListItemButton
            className="MenuButton"
            sx={curUrl === "policies" ? buttonAct : buttonInAct}
          >
            <div>
              <CiPen size={23} />
            </div>
            {!isollapsed && <div>Policies</div>}
          </ListItemButton>
        </MenuItem>
      </Menu>

      <div className="sideBarUserContainer">
        <Link
          to="/dashboard/userAccount"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton
            className="userDetailHolder"
            style={{
              boxShadow:
                curUrl === "userAccount"
                  ? "#aed2ff 0px 0px 5px 0px, #aed2ff 0px 0px 1px 0px"
                  : "",
            }}
            onClick={onMenuItemClick}
          >
            <div
              className="userImgHolder"
              style={{ flex: isollapsed ? 1 : 0.35, transition: "0.4s" }}
            >
              <img className="userImage" src={userImage} alt="inage" />
            </div>

            {!isollapsed && (
              <div className="userTextHolder">
                <div className="userNameText">@The Osaiyuma</div>
                <div className="userMailText">Vickytata619@gmail.com</div>

                {/* <a className="loginLinkText">Login</a> */}
              </div>
            )}
          </ListItemButton>
        </Link>
      </div>
    </Sidebar>
  );

  return (
    <div className="sideBar">
      <TopBar
        onMenuClick={() => setShowMenu(!showMenu)}
        onUserClick={() => setShowUsr(!showUsr)}
      />

      <Drawer
        anchor="right"
        open={showUsr}
        onClose={() => setShowUsr(false)}
        PaperProps={{
          style: {
            padding: "10px",
            width: "80%",
          },
        }}
      >
        <UserDetails />
      </Drawer>
      <Row
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="contHolder"
        style={{ padding: 0, margin: 0 }}
      >
        {proSideBar}

        <Col className="screenHolder">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default SideBar;
