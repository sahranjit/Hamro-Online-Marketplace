import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropZoneComponent from "./DropZoneComponent";
import { useMemo } from "react";

const defaultTheme = createTheme();

let UserForm = ({
  initialValue,
  handleSubmit,
  title,
  update,
  updatePassword,
}) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [address, setAddress] = useState("");
  let [profileImage, setProfileImage] = useState("");

  React.useEffect(() => {
    setFirstName(initialValue.firstName);
    setLastName(initialValue.lastName);
    updatePassword ? setPassword("") : setPassword(initialValue.password);

    setEmail(initialValue.email);
    setPhoneNumber(initialValue.phoneNumber);
    setAddress(initialValue.address);
    setProfileImage(initialValue.profileImage);
  }, [initialValue]);

  let data = useMemo(() => {
    return {
      firstName,
      lastName,
      password,
      email,
      phoneNumber,
      address,
      profileImage,
    };
  }, [
    firstName,
    lastName,
    password,
    email,
    phoneNumber,
    address,
    profileImage,
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer></ToastContainer>
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
            {title}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(data)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {!updatePassword && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="first-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="last-name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="phone-number"
                      name="phoneNumber"
                      id="phoneNumber"
                      label="PhoneNumber"
                      autoFocus
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="address"
                      name="address"
                      id="address"
                      label="Address"
                      autoFocus
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </Grid>
                </>
              )}

              {!update && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
              )}

              {((update && updatePassword) || !update) && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    autoFocus
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
              )}

              {!updatePassword && (
                <Grid item xs={12}>
                  <DropZoneComponent
                    image={profileImage}
                    setImage={setProfileImage}
                  ></DropZoneComponent>
                </Grid>
              )}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {title}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserForm;

/* 

updatePassword = hide all show password

create = show all

updateProfile = hidle email and password


*/
