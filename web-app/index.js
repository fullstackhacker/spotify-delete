'use strict';

const express = require('express');
const passport = require('passport');
const spotifyStrategy = require('spotifyStrategy');

// passport is a singleton object so it doesn't
// matter where we initalize it really, just as
// long as its initalized before the routers
passport.use(spotifyStrategy);

const appRouter = require('routers');
const middlewares = require('middleware');

const server = express();
server.use(middlewares);
server.use(appRouter);

const { port } = require('config');
server.listen(port, () => {
  console.log(`listening on PORT: ${port}`);
});
