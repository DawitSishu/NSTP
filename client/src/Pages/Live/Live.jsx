import React from 'react';
import {
  Box, AppBar, Toolbar, IconButton, Typography, Grid, Paper, Button, TextField, Avatar, Badge, useTheme, useMediaQuery
} from '@mui/material';
import { Videocam, Mic, Chat, Favorite, AttachMoney, ExitToApp } from '@mui/icons-material';
import { FaUserCircle } from 'react-icons/fa';

const LiveStreamUI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
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
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ height: { xs: '60vh', md: '80vh' }, position: 'relative', backgroundColor: theme.palette.background.paper }}>
            <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', alignItems: 'center' }}>
              <Avatar src="/path-to-avatar.jpg" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">Hellan Mertino</Typography>
                <Typography variant="body2">01:08:35</Typography>
              </Box>
            </Box>
            <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} color="inherit">
              <ExitToApp />
            </IconButton>
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box>
                <IconButton color="primary">
                  <Videocam />
                </IconButton>
                <IconButton color="primary">
                  <Mic />
                </IconButton>
              </Box>
              <Box>
                <IconButton color="primary">
                  <Chat />
                </IconButton>
                <IconButton color="primary">
                  <Favorite />
                </IconButton>
              </Box>
            </Box>
          </Paper>
          <Box sx={{ mt: 2, display: { xs: 'none', md: 'block' } }}>
            <Button variant="contained" color="primary" fullWidth>
              Go Live
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ height: { xs: '40vh', md: '80vh' }, display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.paper }}>
            <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto' }}>
              <Typography variant="h6">Chat</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar src="/path-to-avatar.jpg" />
                <Typography sx={{ ml: 2 }}>Jenny Walton: Awesome! Love it!</Typography>
              </Box>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar src="/path-to-avatar.jpg" />
                <Typography sx={{ ml: 2 }}>Stilla Mathew: Awesome!</Typography>
              </Box>
              {/* Add more chat messages here */}
            </Box>
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <TextField
                  variant="outlined"
                  placeholder="Write a comment..."
                  fullWidth
                />
                <IconButton color="primary">
                  <Chat />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="secondary" startIcon={<AttachMoney />}>
                  Send Gift
                </Button>
                <Badge badgeContent={4} color="secondary">
                  <IconButton color="primary">
                    <Favorite />
                  </IconButton>
                </Badge>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiveStreamUI;
