'use strict';

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  res.redirect('/');
}

module.exports = isAuthenticated;
