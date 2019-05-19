'use strict';

const passport = require('passport');
const router = require('express').Router();

router.get('/', passport.authenticate('spotify'));

router.get('/callback', (req, res) => {
  console.log(req);
  return res.redirect('/app');
});

module.exports = router;
