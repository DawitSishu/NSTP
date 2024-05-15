import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Home = () => {
  // Dummy data for thumbnails
  const liveVideos = [
    {
      id: 1,
      title: "Live Video 1",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s",
    },
    {
      id: 2,
      title: "Live Video 2",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtBE9E1wojCdXsNu2c-xN07QP3p-_DQx-5w23MlhTXw&s",
    },
    {
      id: 3,
      title: "Live Video 3",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rxuLcshq7bMwaJl-ZHQNP_bnV78b61snBU5Eb3HPVA&s",
    },
    {
      id: 4,
      title: "Live Video 4",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s",
    },
    {
      id: 5,
      title: "Live Video 5",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtBE9E1wojCdXsNu2c-xN07QP3p-_DQx-5w23MlhTXw&s",
    },
    {
      id: 6,
      title: "Live Video 6",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rxuLcshq7bMwaJl-ZHQNP_bnV78b61snBU5Eb3HPVA&s",
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Live Members
      </Typography>
      <Grid container spacing={2}>
        {liveVideos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              onClick={() => console.log(video.id)}
              sx={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={video.thumbnail}
                alt={video.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
