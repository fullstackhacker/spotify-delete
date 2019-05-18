'use strict';

const passport = require('passport');
const router = require('express').Router();

router.get('/', passport.authenticate('spotify'));

module.exports = router;
