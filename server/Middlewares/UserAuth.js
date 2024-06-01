const admin = require("../Config/Firebase")

const userAuthChecker = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    try {
      const decodedData = await admin.auth().verifyIdToken(token);
      req.user = decodedData;
      next();
    } catch (error) {
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
