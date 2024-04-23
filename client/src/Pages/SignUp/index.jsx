import React from "react";
import logo from "../../assets/logo.png";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <img src={logo} alt="Logo" style={{ width: 180 }} />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <Box mr={1}>
                  <EmailIcon color="action" />
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <Box mr={1}>
                  <LockIcon color="action" />
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                Sign in with Google
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#EFCFA9",
                fontWeight: "bold",
              }}
            >
              Log in
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
