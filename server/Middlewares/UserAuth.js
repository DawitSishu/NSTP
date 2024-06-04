const admin = require("../Config/Firebase")

const userAuthChecker = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    console.log(token)
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log('Token:', token); // Log the token
      console.log('Token Expiry Time:', new Date(decodedToken.exp * 1000)); // Log token expiry time
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error("Token verification failed:", error); 
      const err = new Error("Not authorized to access this resource");
      err.statusCode = 401;
      next(err);
    }
  } else {
    const err = new Error("Not authorized to access this resource");
    err.statusCode = 401;
    next(err);
  }
};

module.exports = userAuthChecker;
