const app = require("express")();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectToDb = require("./Config/ConnectDB");
const errorHandler = require("./Middlewares/ErrorHandler");

app.use(cors());

const PORT = process.env.PORT || 5000;
connectToDb();
app.use(require("express").json());

app.use("/api/user", require("./Routes/UserRoutes"));

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
