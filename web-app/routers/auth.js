'use strict';

const passport = require('passport');
const router = require('express').Router();

const isAuthenticated = require('middleware/isAuthenticated');

router.get('/', passport.authenticate('spotify'));

router.get('/callback', passport.authenticate('spotify', { failureRedirect: '/' }), (req, res) => {
  return res.redirect('/app');
});

module.exports = router;
