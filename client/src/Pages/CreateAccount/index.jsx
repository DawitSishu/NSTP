import React, { useState, useContext } from "react";
import { Context } from "../../Services/AuthContext";
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AccountCreationPage = () => {
  const { user } = useContext(Context);
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState([]);

  console.log(user.uid);

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Platform!
      </Typography>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg"
              alt="Welcome"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        {/* Form Section */}
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                onChange={(date) => setDob(date)}
                format="DD/MM/YYYY"
                sx={{ width: "100%", mt: "10px", mb: "8px" }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
            </LocalizationProvider>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <Button
                variant="contained"
                component="span"
                startIcon={<PhotoCameraIcon />}
                style={{ marginTop: "1rem" }}
              >
                Upload Picture
              </Button>
            </label>
            <Avatar
              alt="Uploaded Picture"
              src="#"
              style={{
                width: "80px",
                height: "80px",
                margin: "auto",
                marginTop: "1rem",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              FINISH
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountCreationPage;
