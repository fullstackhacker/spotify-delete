'use strict';

const router = require('express').Router();

const authRouter = require('./auth');

router.get('/', (req, res) => {
  return res.json({
    status: true
  });
});

router.use('/auth', authRouter);

module.exports = router;
