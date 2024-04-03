const app = require("express")();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
