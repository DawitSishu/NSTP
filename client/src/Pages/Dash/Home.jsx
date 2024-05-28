import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Home = () => {
  // Dummy data for thumbnails with price information
  const liveVideos = [
    {
      id: 1,
      title: "Live Video 1",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s",
      price: 0,
    },
    {
      id: 2,
      title: "Live Video 2",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtBE9E1wojCdXsNu2c-xN07QP3p-_DQx-5w23MlhTXw&s",
      price: 9.99,
    },
    {
      id: 3,
      title: "Live Video 3",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rxuLcshq7bMwaJl-ZHQNP_bnV78b61snBU5Eb3HPVA&s",
      price: 4.99,
    },
    {
      id: 4,
      title: "Live Video 4",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s",
      price: 0,
    },
    {
      id: 5,
      title: "Live Video 5",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtBE9E1wojCdXsNu2c-xN07QP3p-_DQx-5w23MlhTXw&s",
      price: 14.99,
    },
    {
      id: 6,
      title: "Live Video 6",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rxuLcshq7bMwaJl-ZHQNP_bnV78b61snBU5Eb3HPVA&s",
      price: 7.99,
    },
  ];

  const paymentLogic = (vid) => {
    console.log(vid);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Live Members
      </Typography>
      <Grid container spacing={3}>
        {liveVideos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              onClick={() => paymentLogic(video)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.6)60%, Rgba(0,0,0,0) 100%)",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={video.thumbnail}
                alt={video.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" color="white">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="grey.500">
                  ETB {video.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
