// dummy route to test sign up request
const express = require('express');
const router = express.Router();

const models = require('../models');

module.exports = function(passport) {

  // POST /api/user/signup
  router.post('/signup', function(req, res, next) {
    console.log(req.body, 'req.body');
    passport.authenticate('local-signup', function(err, user, info) {
      console.log('authenticate called...');
      console.log('user...', user);
      console.log('err...', err);
      if (err) {
        return next(err) // will generate a 500 error
      }
      if (user) {
        return next({ error: true, message: info });
      }
      // res.json({ foo: "bar" });
      req.login(user, { session: false }, function(loginErr) {
        console.log('login called...');
        console.log('user...', user);
        if (loginErr) {
          return next(loginErr);
        }
        return res.json({
          email: user.email,
          id: user.id
        });
      });
    })(req, res, next);
  });
  return router;
};
