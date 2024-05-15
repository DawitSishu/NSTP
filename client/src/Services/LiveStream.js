export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyNThkMjUzMy02OTk0LTQyNmQtYTlhOS1lZWViMzg5MTY3MzQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNTYyNjkyNCwiZXhwIjoxNzE4MjE4OTI0fQ.9NxPlvntK5VpOnG1DVavYNDZCfoAaFXRiiQ4TzYp7pQ"
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};