// dummy route to test sign up request
const express = require('express');
const router = express.Router();

module.exports = function(passport) {

  // POST /api/user/signup
  router.post('/signup', function(req, res, next) {
    console.log(req.body, 'req.body');
    passport.authenticate('local-signup', function(err, user, info) {
      console.log('authenticate called...');
      console.log('user...', user);
      console.log('info...', info);
      console.log('err...', err);
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return next({
          error: true,
          message: info
        });
      }
      req.login(user, function(loginErr) {
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

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next({ error: true, message: info });
      }

      req.login(user, function(loginErr) {
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
