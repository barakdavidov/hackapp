import { React, useState, useContext, useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import InfoContext from "./InfoContext";
import { Link, useParams } from "react-router-dom";

export default function UserProfile() {
  const { user } = useContext(InfoContext);
  const { userID } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [passwordsNotSame, setPasswordsNoteSame] = useState(false);
  const [open, setOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [userView, setUserView] = useState("");

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localHost:5500/users/${userID}`);
      const userData = res.data;
      setUserView(userData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [userID]);

  const uploadPreviewImage = async (e) => {
    setShowNotification(true);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
  };

  const submitUpdateProfile = async (e) => {
    if (password !== confirmPassword) {
      setPasswordsNoteSame(true);
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("bio", bio);
    formData.append("profilePicture", profilePicture);

    const res = await axios.put(`http://localHost:5050/editprofile`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("worked");
    setOpen(true);
    setTimeout(() => {
      refreshPage();
    }, 1000);
    console.log(res.data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "6rem",
            marginBottom: "3rem",
          }}
        >
          Edit Your Profile
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="uploaded"
              style={{
                marginLeft: "1rem",
                borderRadius: "2rem",
                width: "100px",
                height: "100px",
              }}
            />
          ) : user.picture ? (
            <img
              src={user.picture}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "4rem",
            }}
          >
            <Button
              variant="contained"
              component="label"
              style={{ width: "15rem" }}
            >
              Upload An Image
              <input
                type="file"
                name="profilePicture"
                hidden
                onChange={uploadPreviewImage}
              />
            </Button>
            {showNotification ? (
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                Image Added!
              </Typography>
            ) : (
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                Add an image!
              </Typography>
            )}
          </div>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label={user.first_name}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ margin: "1rem", width: "25rem" }}
          />
          <TextField
            label={user.last_name}
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ margin: "1rem", width: "25rem" }}
          />
          <TextField
            label={user.email}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "1rem", width: "25rem" }}
          />
          <TextField
            label={user.phone_umber}
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ margin: "1rem", width: "25rem" }}
          />
        </Box>

        <TextField
          label="Enter Your New Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "1rem", width: "25rem" }}
        />
        <TextField
          label="Confirm Password"
          name="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ margin: "1rem", width: "25rem" }}
        />
        {passwordsNotSame && (
          <Typography style={{ color: "red" }}>
            Passwords do not match
          </Typography>
        )}
        <TextField
          label="Bio"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          multiline
          style={{ margin: "1rem", width: "52rem" }}
        />
        <Button
          variant="contained"
          component="label"
          style={{
            width: "25rem",
          }}
          onClick={submitUpdateProfile}
        >
          Save
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Profile Updated
        </Alert>
      </Snackbar>
    </>
  );
}
