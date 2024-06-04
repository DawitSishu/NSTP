import axios from "axios";

// export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyNThkMjUzMy02OTk0LTQyNmQtYTlhOS1lZWViMzg5MTY3MzQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNTYyNjkyNCwiZXhwIjoxNzE4MjE4OTI0fQ.9NxPlvntK5VpOnG1DVavYNDZCfoAaFXRiiQ4TzYp7pQ"
// API call to create meeting

const TOKEN_URI = "http://localhost:5000/api/live/create";

export const createMeeting = async (channelName, uid) => {
  try {
    const token = await getToken(channelName, uid)
    console.log(token)
    const res = await axios.post(
      `https://api.videosdk.live/v2/rooms`,
      {},
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    console.log(res);
    return "";
  } catch (error) {
    alert("error");
    console.log(error);
  }
  // const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
  //   method: "POST",
  //   headers: {
  //     authorization: `${authToken}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({}),
  // });
  //Destructuring the roomId from the response
  // const { roomId } = await res.json();
  // return roomId;
};

const getToken = async (channelName, uid) => {
  try {
    const res = await axios.post(TOKEN_URI, { channelName, uid });
    return res.data.token;
  } catch (error) {
    alert("error");
    console.log(error);
  }
};
