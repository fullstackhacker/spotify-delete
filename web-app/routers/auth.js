'use strict';

const passport = require('passport');
const router = require('express').Router();

router.get('/', passport.authenticate('spotify'));

router.get('/callback', (req, res) => {
  console.log(req);
  return res.json({ status: 'logged in' });
});

module.exports = router;
