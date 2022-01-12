import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

export default function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    linkHover: "fec1a5",
    linkVisited: "white",
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Link to="/search" sx={{ color: "white" }}>
            <HomeOutlinedIcon sx={{ fontSize: "35px" }} />
          </Link>
          <Link to="/profile/:id" sx={linkStyle}>
            <AccountCircleOutlinedIcon sx={{ fontSize: "32px" }} />
          </Link>
          <Link to="/chat" sx={linkStyle}>
            <ForumIcon sx={{ fontSize: "32px" }} />
          </Link>
          <Link to="/notifications" sx={linkStyle}>
            <NotificationsIcon sx={{ fontSize: "32px" }} />
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
