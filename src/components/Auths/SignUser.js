import { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InfoContext from "../InfoContext";
import { Navigate, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://moovit.com/">
        ExpressLink App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/**
 * Component for both sing in and sign up functionalities
 * @param {Boolean} signIn is a flag that says if component is rendered as signIn or singUp
 */
export default function SignUser({ signIn }) {
  const { user, setUser } = useContext(InfoContext);
  const navigation = useNavigate();
  const [login, setLogin] = useState(signIn !== undefined ? signIn : true);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmation: "",
  });

  useEffect(() => {
    if (user.email) {
      navigation("/");
    }
  }, [user]);

  const handleChange = ({ target }) => {
    setUserInfo({ ...userInfo, [target.id]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);

    const { email, firstName, lastName } = userInfo;
    const loggedUser = { email, firstName, lastName };

    // for now just logging user info without any authentication
    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));

    /* an idea of how it would work with the backend
    const endpoint = login
      ? "http://localhost:8000/login/"
      : "http://localhost:8000/signup/";

    try {
      const res = await axios.post(endpoint, userInfo);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (e) {
      console.log(`ERROR: ${e.response.data}`);
      // setError(e.response.data);
    }
    */
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {login ? "Sign in" : "Sign up"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {!login && (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoComplete="first name"
                value={userInfo.firstName}
                onChange={handleChange}
                autoFocus={!login}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="last name"
                value={userInfo.lastName}
                onChange={handleChange}
              />
            </>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            value={userInfo.email}
            onChange={handleChange}
            autoFocus={login}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete={login ? "current-password" : "password"}
            value={userInfo.password}
            onChange={handleChange}
          />
          {!login && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmation"
              label="Confirm Password"
              autoComplete="password confirmation"
              value={userInfo.confirmation}
              onChange={handleChange}
            />
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {login ? "Sign In" : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item xs>
              {login && (
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              )}
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setLogin(!login)}>
                {login
                  ? "Don't have an account? Sign Up"
                  : "Already have and account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
