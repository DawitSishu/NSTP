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
import { uploadProfile, CreateAccount } from "../../Services/Storage";
import { useNavigate } from "react-router-dom";

const AccountCreationPage = () => {
  const { user, getToken } = useContext(Context);
  const navigate = useNavigate();
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState([]);
  const [avatar, setAvatar] = useState(null);

  const isImageTypeValid = (file) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  const handleIMGChange = async (event) => {
    const files = event.target.files;

    if (files.length === 0) {
      alert("Make sure to Select an Image.");
      return;
    }
    const invalidFiles = Array.from(files).filter(
      (file) => !isImageTypeValid(file)
    );

    if (invalidFiles.length > 0) {
      alert(`Invalid file type. Please select JPG or PNG images only.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setPic((prevFiles) => [...files]);
  };

  const CompleteProfile = async () => {
    try {
      const profileURL = await uploadProfile(pic, user.uid);
      if (!profileURL) {
        alert("Make sure to Select an Image.");
        return;
      }
      const today = new Date();
      const birthDate = dob.toDate();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        alert("You must be at least 18 years old to complete your profile.");
        return;
      }

      const data = {
        userID: user.uid,
        email: user.email,
        dob: dob.toDate(),
        phone,
        username,
        profile: profileURL,
      };
      const token = await getToken();

      const doc = await CreateAccount(data, token);
      if (typeof doc !== "string") {
        navigate("/home");
      } else {
        alert(doc);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Platform!
      </Typography>
      <Typography align="center" mb={2}>
        Welcome to Jemaw, your digital circle of friends where every voice is
        heard and celebrated! Just like a close-knit group of friends, Jemaw is
        here to support you, inspire you, and cheer you on. Whether you're a
        creator sharing your passions or an audience member enjoying the show,
        you're among friends here. Let's create, connect, and make memories
        together. Join us in the warmth of Jemaw's embrace and let your journey
        begin!
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg"
              alt="Welcome"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              label="Phone"
              type="tel"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => {
                const numericValue = e.target.value
                  .replace(/[^0-9]/g, "")
                  .substring(0, 10);
                setPhone(numericValue);
              }}
              placeholder="09 *** *** ****"
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
              onChange={handleIMGChange}
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
              src={avatar}
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
              onClick={CompleteProfile}
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
