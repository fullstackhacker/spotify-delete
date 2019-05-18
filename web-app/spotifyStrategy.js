'use strict';

const SpotifyStrategy = require('passport-spotify').Strategy;

const { clientID, clientSecret } = require('config');

const spotifyStrategy = new SpotifyStrategy(
  {
    clientID,
    clientSecret,
    callbackURL: 'https://spotify.mush.dev/api/auth/callback'
  },
  function(accessToken, refreshToken, expires_in, profile, next) {
    next(null, profile);
  }
);

module.exports = spotifyStrategy;
