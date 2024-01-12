const GoogleStrategy = require('passport-google-oauth20').Strategy;
const logger = require('../utils/logger');
const passport = require('passport');

const googleAuth = (passport) => {

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8090/auth/google/callback"
      }, (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        return cb(err, profile);
      }
    ));  
}

passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((id, callback) => {
  callback(null, id);
});

module.exports = googleAuth;