const app = require("express")();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectToDb = require("./Config/ConnectDB");

app.use(cors());

const PORT = process.env.PORT || 5000;
connectToDb();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
