import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoContext from "./InfoContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Image from "../images/homeimage.png";

export default function Welcome() {
  const { user } = useContext(InfoContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (user.email) {
      navigation("/");
    }
  }, [user]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 500,
        gap: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={Image}
          alt="Grow your network"
          style={{ padding: 30 }}
          className="welcomeImage"
        />
        <Typography variant="h4" gutterBottom component="div">
          Grow your network en route
        </Typography>
        <Typography align="center" variant="h7" color="text.secondary">
          Traveling on public transport doesn't have to be a solo adventure.
          Make connections where ever you go.
        </Typography>
      </Box>
      <Stack spacing={1} paddingTop={4}>
        <Button
          variant="contained"
          disableElevation
          to="/signup"
          component={Link}
          style={{ textTransform: "none" }}
          sx={{ borderRadius: 3, height: 40 }}
        >
          Create account
        </Button>
        <Button
          variant="text"
          disableElevation
          component={Link}
          to="/Signin"
          style={{ textTransform: "none" }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}
