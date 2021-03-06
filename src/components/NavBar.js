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
import { whiteList } from "xss";

export default function NavBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/search">
              <HomeOutlinedIcon
                sx={{ color: "white", "&:hover": { color: "#fec1a5" } }}
              />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/user-profile">
              <AccountCircleOutlinedIcon
                sx={{ color: "white", "&:hover": { color: "#fec1a5" } }}
              />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/chat">
              <ForumIcon
                sx={{ color: "white", "&:hover": { color: "#fec1a5" } }}
              />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/notifications">
              <NotificationsIcon
                sx={{ color: "white", "&:hover": { color: "#fec1a5" } }}
              />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
