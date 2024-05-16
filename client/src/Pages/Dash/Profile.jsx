import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { Context } from "../../Services/AuthContext";
import {
  PersonOutline as PersonOutlineIcon,
  Email as EmailIcon,
  CakeOutlined as CakeOutlinedIcon,
  PhoneOutlined as PhoneOutlinedIcon,
} from "@mui/icons-material";
import { getUserInfo } from "../../Services/Storage";

const ProfilePage = () => {
  const { user } = useContext(Context);
  const [userData, setUserData] = useState(null);

  console.log(user);

  const getUserData = async () => {
    let data = await getUserInfo(user.uid);

    if (!data || typeof data != "object") {
      alert("Error ");
      console.log(data);
    } else {
      const milliseconds = data.dob.seconds * 1000;
      const date = new Date(milliseconds);
      const formattedDate = date.toDateString();
      setUserData({ ...data, dob: formattedDate });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return !userData ? (
    <div> loading... </div>
  ) : (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Avatar
            alt="User Avatar"
            src={userData.profile}
            style={{ width: "120px", height: "120px" }}
          />
          <Typography
            variant="h4"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            {userData.username}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Grid container spacing={1}>
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">{user.email}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Grid container spacing={1}>
            <Grid item>
              <CakeOutlinedIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">{userData.dob}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Grid container spacing={1}>
            <Grid item>
              <PhoneOutlinedIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">{userData.phone}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              borderRadius: "25px",
              padding: "12px 32px",
              fontWeight: "bold",
            }}
          >
            Become a Creator
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
