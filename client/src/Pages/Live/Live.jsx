import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper,
  TextField,
  Avatar,
  Badge,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Favorite, AttachMoney, Send, ExitToApp } from "@mui/icons-material";
import { FaUserCircle } from "react-icons/fa";

const formatLikes = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "m";
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  }
  return number;
};

const LiveStreamUI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const commentsEndRef = useRef(null);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput("");
    }
  };

  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Live Stream
          </Typography>
          <IconButton color="inherit">
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ p: 2, height: "calc(100vh - 64px)" }}>
        <Grid item xs={12} md={8} sx={{ height: isMobile ? "100%" : "auto" }}>
          <Paper
            elevation={3}
            sx={{
              height: isMobile ? "100%" : { xs: "60vh", md: "80vh" },
              position: "relative",
              backgroundColor: theme.palette.background.paper,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src="/path-to-avatar.jpg" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">Hellan Mertino</Typography>
                <Typography variant="body2">01:08:35</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                display: "flex",
                alignItems: "center",
                pr: 2, // Adjusted padding
              }}
            >
              <Badge badgeContent={formatLikes(likes)} color="error">
                <Favorite />
              </Badge>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                p: 1,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Type a comment..."
                value={commentInput}
                onChange={handleCommentChange}
                sx={{ flex: 1, mr: 1 }}
              />
              <IconButton color="primary" onClick={handleCommentSubmit}>
                <Send />
              </IconButton>
              <IconButton color="secondary" onClick={handleLike}>
                <Favorite />
              </IconButton>
              <IconButton color="primary">
                <AttachMoney />
              </IconButton>
            </Box>
            {isMobile && (
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  overflowY: "auto",
                  position: "absolute",
                  bottom: "60px",
                }}
              >
                <List sx={{ maxHeight: "100%", overflow: "auto", p: 2 }}>
                  {comments.map((comment, index) => (
                    <ListItem key={index} alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>
                          <FaUserCircle />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Anonymous" secondary={comment} />
                    </ListItem>
                  ))}
                  <div ref={commentsEndRef} />
                </List>
              </Box>
            )}
          </Paper>
        </Grid>
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              p: 0,
              overflow: "auto",
            }}
          >
            <Typography variant="h6">Live Chat</Typography>
            <List sx={{ maxHeight: "100%", overflow: "auto", p: 2 }}>
              {comments.map((comment, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <FaUserCircle />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Anonymous" secondary={comment} />
                </ListItem>
              ))}
              <div ref={commentsEndRef} />
            </List>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default LiveStreamUI;
