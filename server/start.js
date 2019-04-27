#!/usr/bin/env node

"use strict";
const log = require("color-logs")(true, true, __filename);

const PORT = process.env.PORT || 3000;

const app = require("../server");

app
  .listen(PORT, () => {
    log.info(`Server started on port ${PORT}`);
  })
  .on("error", err => {
    log.info("ERROR: ", err);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, ,PATCH, DELETE, GET"
    );
    return res.status(200).json({});
  }
  next();
});
