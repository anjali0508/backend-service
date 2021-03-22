/* eslint-disable quotes */
const express = require("express");
const { healthRouter } = require("./src/routes");

const app = express();

const port = process.env.PORT || 3000;

app.use("/health", healthRouter);

app.listen(3000, () => {
  console.log(`Server is up at ${port}`);
});