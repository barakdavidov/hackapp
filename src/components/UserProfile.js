import { React, useState, useContext, useEffect } from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import axios from "axios";
import InfoContext from "./InfoContext";
import { Link, useParams } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(InfoContext);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="profile"
            style={{
              marginLeft: "1rem",
              borderRadius: "2rem",
              width: "100px",
              height: "100px",
            }}
          />
        ) : (
          <img
            src={`https://www.parkamerica.net/wp-content/uploads/2020/12/placeholder-profile-female.jpg`}
            alt="profile"
            style={{
              marginLeft: "1rem",
              borderRadius: "2rem",
              width: "100px",
              height: "100px",
            }}
          />
        )}
      </Box>
      <Typography style={{ margin: "1rem", width: "25rem" }}>
        {user.firstName}
      </Typography>
      <Typography style={{ margin: "1rem", width: "25rem" }}>
        {user.lastName}
      </Typography>
      <Typography style={{ margin: "1rem", width: "25rem" }}>
        {user.phoneNumber}
      </Typography>
      <Typography style={{ margin: "1rem", width: "25rem" }}>
        {user.bio}
      </Typography>
      <Link to="/user-profile">
        <Button>Edit Profile</Button>
      </Link>
    </Container>
  );
}

export default UserProfile;
