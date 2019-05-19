'use strict';

const router = require('express').Router();

const authRouter = require('./auth');
const userRouter = require('./user');

router.get('/', (req, res) => {
  return res.json({
    status: true
  });
});

router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;
