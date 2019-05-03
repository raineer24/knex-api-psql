"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const log = require("color-logs")(true, true, __filename);
const morgan = require("morgan");
const app = express();

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
app.use(morgan("combined"));

app.use(bodyParser.json());
app.disable("x-powered-by");

app.use("/", [require("./routes/blog_routes")]);

const errorHandler = require("./middleware/error_middleware");

app.use([
  errorHandler.unauthorized,
  errorHandler.forbidden,
  errorHandler.conflict,
  errorHandler.badRequest,
  errorHandler.unprocessable,
  errorHandler.notFound,
  errorHandler.genericError,
  errorHandler.catchall
]);

module.exports = app;
