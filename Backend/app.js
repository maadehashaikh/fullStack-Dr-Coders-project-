const express = require("express");
const app = express();
const port = 8082;
const connectDb = require("./config/connectDb");

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
