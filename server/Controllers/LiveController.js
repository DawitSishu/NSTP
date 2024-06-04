// const { RtcTokenBuilder, RtcRole } = require("agora-access-token");
// const asyncHandler = require("express-async-handler");

// //@desc register a user
// //@route POST /api/live/create
// //@access private
// const CreateLive = asyncHandler(async (req, res, next) => {
//   const APP_ID = process.env.AGORA_APP_ID;
//   const { channelName, uid } = req.body;

//   const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE;
//   if (!APP_ID || !APP_CERTIFICATE) {
//     const err = new Error(
//       "Please provide your Agora App ID and App Certificate in the .env file"
//     );
//     err.statusCode = 400;
//     next(err);
//   }
//   if (!channelName || !uid) {
//     const err = new Error("channelName and uid are required");
//     err.statusCode = 400;
//     next(err);
//   }
//   const agoraRole = RtcRole.PUBLISHER;

//   const token = RtcTokenBuilder.buildTokenWithUid(
//     APP_ID,
//     APP_CERTIFICATE,
//     channelName,
//     uid,
//     agoraRole
//   );

//   res.json({
//     channelName,
//     token,
//     uid,
//     role: agoraRole,
//   });
// });

// module.exports = { CreateLive };

