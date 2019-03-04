/*!
 * express-log-errors
 * Copyright(c) 2018 Brian Emilius
 * MIT Licensed
 */

"use strict";

const fs = require("fs");
const path = require("path");

/**
 * Expose `logErrors()`.
 */

exports = module.exports = logErrors;

/**
 *
 * @param {String} logName
 * @return {Function}
 * @api public
 */

function logErrors(logName = "express-errors.log") {
  if (!fs.existsSync("./logs")) fs.mkdirSync("./logs");
  return function(err, req, res, next) {
    if (err) {
      const fullPath = path.join(".", "logs", logName);
      if (!fs.existsSync(fullPath)) fs.writeFileSync(fullPath, "");
      const oldLog = fs.readFileSync(fullPath);
      const data = `[${new Date().toISOString()}]\r\n${err.stack}\r\n${oldLog}`;
      fs.writeFileSync(fullPath, data, { flag: "w" });
      return next(err);
    }
    next();
  };
}
