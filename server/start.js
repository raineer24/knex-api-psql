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
