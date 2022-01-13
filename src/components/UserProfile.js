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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ margin: "1rem", width: "5rem" }}>
          {user.firstName}
        </Typography>
        <Typography style={{ margin: "1rem", width: "5rem" }}>
          {user.lastName}
        </Typography>
        <Typography style={{ margin: "1rem", width: "5rem" }}>
          {user.phoneNumber}
        </Typography>
        <Typography style={{ margin: "1rem", width: "5rem" }}>
          {user.bio}
        </Typography>
        <Link to="/user-profile" sx={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Edit Profile
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default UserProfile;
