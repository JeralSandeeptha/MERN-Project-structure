require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

require('./config/db');
require('./config/google.config');
const logger = require('./utils/logger');
// const userRoutes = require('./api/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '20mb' }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use('/api/users', userRoutes);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

const PORT = process.env.PORT || 8090;

app.get('/', (req, res, next) => { 
    res.send("<h1>This is my API home</h1>");
    next();
});

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);
});