'use strict';

function logger(req, res, next) {
  console.log(`Request-Method: ${req.method}`);
  next();
}

module.exports = logger;
