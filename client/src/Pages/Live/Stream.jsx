import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-sdk-ng";
import { db } from "./firebase";
import { Box, TextField, Button, Typography } from "@mui/material";

const StreamComponent = () => {
  appId = "b9789eab4c724f968331523242a57e54";
  token = "4283375473074bcd97567692b0ca70ed";
  const [channelName, setChannelName] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);

  const client = useRef(null);
  const localTracks = useRef({ videoTrack: null, audioTrack: null });

  const createChannel = async () => {
    if (channelName.trim() === "") {
      setError("Channel name cannot be empty");
      return;
    }

    try {
      // Initialize Agora client and join channel
      client.current = createClient({ mode: "rtc", codec: "vp8" });
      await client.current.join(appId, channelName, token, null);
      const [microphoneTrack, cameraTrack] =
        await createMicrophoneAndCameraTracks();
      localTracks.current = {
        videoTrack: cameraTrack,
        audioTrack: microphoneTrack,
      };
      await client.current.publish(Object.values(localTracks.current));
      localTracks.current.videoTrack.play("local_stream");

      // Save channel info to Firebase
      await addDoc(collection(db, "channels"), {
        name: channelName,
        createdAt: new Date(),
      });

      setIsStreaming(true);
      setError(null);
    } catch (err) {
      setError("Failed to create channel: " + err.message);
    }
  };

  const handleInputChange = (e) => {
    setChannelName(e.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Create a Channel</Typography>
      <TextField
        label="Channel Name"
        variant="outlined"
        fullWidth
        value={channelName}
        onChange={handleInputChange}
        sx={{ mt: 2, mb: 2 }}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={createChannel}>
        Create and Join
      </Button>
      {isStreaming && (
        <Box
          id="local_stream"
          sx={{
            width: "100%",
            height: "400px",
            backgroundColor: "black",
            mt: 3,
          }}
        />
      )}
    </Box>
  );
};

export default StreamComponent;
