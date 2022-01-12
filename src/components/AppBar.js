import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SubwayOutlinedIcon from "@mui/icons-material/SubwayOutlined";
import { Typography } from "@mui/material";
import UserProfile from "./Matches/MatchProfile";
import InfoContext from "./InfoContext";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

export default function AppBar() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { user } = useContext(InfoContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ mt: "1rem" }}>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <SubwayOutlinedIcon sx={{ mr: "1rem" }} />{" "}
          <Typography>Ride History</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <GroupOutlinedIcon sx={{ mr: "1rem" }} />{" "}
          <Typography>Matches</Typography>
        </ListItem>
        <Divider />
        {user.role === "admin" && (
          <>
            {" "}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <SupervisorAccountOutlinedIcon sx={{ mr: "1rem" }} />{" "}
              <Typography>Admin Pages</Typography>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("left", true)}
        size="large"
        edge="start"
        color="primary"
        aria-label="menu"
        sx={{ mr: 2, ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
