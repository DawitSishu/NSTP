import React from "react";
import logo from "../../assets/logo.png";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignIN, GoogleSignIN } from "../../Services/Auth";

const index = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await SignIN(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogIn = async () => {
    try {
      await GoogleSignIN();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("email")}
              fullWidth
              required
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
              {...register("password")}
              fullWidth
              required
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} onClick={googleLogIn}>
                  Sign in with Google
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#EFCFA9",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default index;
