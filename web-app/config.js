'use strict';

const port = process.env.PORT || 3001;
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.clientSecret;

module.exports = {
  clientID,
  clientSecret,
  port
};
