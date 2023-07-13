import React from "react";
import Tanalogo from "../Assets/Tana-logo 5.png";
import Icon from "../Assets/Group 1289.png";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Logo from "../Assets/image 230 (1).png";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

const linkStyle = {
  margin: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  color: "#8090A9",
  fontFamily: "Montserrat",
  fontSize: "16px",
  lineHeight: "19.5px",
};

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a
            style={{ marginRight: "87px", marginBottom: "10px" }}
            className="navbar-brand p-2"
            href="#"
          >
            <img src={Tanalogo} alt="Tanalogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  style={linkStyle}
                  exact
                  activeClassName="active"
                  aria-current="page"
                  to="/overview"
                >
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={linkStyle}
                  activeClassName="active"
                  to="/meter"
                >
                  My Meters
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={linkStyle}
                  activeClassName="active"
                  to="/transaction"
                >
                  My Transactions
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                style={{ marginRight: "60px" }}
                className="d-flex align-items-center"
              >
                <img
                  style={{ marginRight: "px" }}
                  className="img-fluid"
                  src={Icon}
                  alt=""
                />
                <Link style={linkStyle} activeClassName="active" to="/settings">
                  Settings
                </Link>
              </div>

              <Box
                style={{ marginRight: "50px", marginTop: "16px" }}
                sx={{ color: "action.active" }}
              >
                <Badge color="error" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </Box>
              <Stack style={{ marginRight: "28px", marginTop: "8px" }}>
                <Avatar alt="Cindy Baker" src={Logo} />
              </Stack>
            </div>
          </div>
        </div>
      </nav>
      <Divider />
    </div>
  );
};
export default Navbar;
