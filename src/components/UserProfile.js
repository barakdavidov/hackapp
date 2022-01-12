import React from "react";
import InfoContext from "./InfoContext";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

export default function Profile() {
  const { user, setUser } = React.useContext(InfoContext);
  const [state, setState] = React.useState({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    bio: user.bio || "",
    password: "",
    newPassword: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const inputs = [
    "email",
    "firstName",
    "lastName",
    "phone",
    "password",
    "newPassword",
    "bio",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:8000/editprofile/" + user.id,
        state
      );
      setUser(res.data);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(res.data));
      setSuccess(true);
    } catch (e) {
      console.log(`ERROR: ${e.response.data}`);
      setError(e.response.data);
    }
  };

  return (
    <div className="formContainer">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 500,
          marginTop: "30px",
          padding: 50,
          borderRadius: 8,
          boxShadow: "0px 6px 18px #9E9E9E",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          {error && <Alert severity="error">{error}</Alert>}
          {success && (
            <Alert severity="success">User info changed successfully</Alert>
          )}
          {inputs.map((inp) =>
            inp === "bio" ? (
              <>
                <label htmlFor="bio">Bio</label>
                <div>
                  <textarea
                    id="bio"
                    name="bio"
                    onChange={({ target }) =>
                      setState((prev) => ({ ...prev, [inp]: target.value }))
                    }
                  >
                    {state.bio || ""}
                  </textarea>
                </div>
              </>
            ) : (
              <>
                <label htmlFor={inp}>
                  {inp === "firstName"
                    ? "First Name"
                    : inp === "lastName"
                    ? "Last Name"
                    : inp === "password"
                    ? "Current Password"
                    : inp === "newPassword"
                    ? "New Password"
                    : inp[0].toUpperCase() + inp.slice(1)}
                </label>
                <div>
                  <input
                    key={inp}
                    id={inp}
                    type={
                      inp === "password" || inp === "newPassword"
                        ? "password"
                        : "text"
                    }
                    value={state[inp]}
                    onChange={({ target }) =>
                      setState((prev) => ({ ...prev, [inp]: target.value }))
                    }
                    placeholder={
                      inp === "firstName"
                        ? "First Name"
                        : inp === "lastName"
                        ? "Last Name"
                        : inp[0].toUpperCase() + inp.slice(1)
                    }
                    required={inp !== "newPassword"}
                  />
                </div>
              </>
            )
          )}
          <div style={{ width: "200px", margin: "10px", marginLeft: 0 }}>
            <Button type="submit" variant="outlined">
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
