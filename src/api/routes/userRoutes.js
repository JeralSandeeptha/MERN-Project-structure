const express = require('express');
const passport = require('passport');
const logger = require('../../utils/logger');

const router = express.Router();

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

module.exports = router;