'use strict';

const router = require('express').Router();

const isAuthenticated = require('middleware/isAuthenticated');

router.get('/', isAuthenticated, (req, res) => {
  return res.json({
    user: req.user
  });
});

module.exports(router);
