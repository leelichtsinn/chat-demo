const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const User = require('../models/').users;

function getUserParams(req) {
  const body = req.body;
  return {
    email: body.email,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName
  };
}

function initializeSerialization(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
}

function processSignupCallback(req, email, password, done) {
  console.log('processSignupCallback...');
  // first search to see if a user exists in out system with that email
  User.findOne({
    where: {
      'email': email
    },
    attributes: ['id']
  })
  .then(function(user) {
    if (user) {
      // user exist call done() passing null and false
      return done(null, false, 'That email is already taken');
    } else {
      // create the new user
      const userToCreate = getUserParams(req);

      bcrypt.hash(userToCreate.password, 10, function(err, hash) {
        userToCreate.password = hash;

        User.create(userToCreate)
          .then(function(createdRecord) {
            jwt.sign({
              id: createdRecord.id
            }, config.jwtSecret, {
              expiresIn: config.jwtExpiration
            }, function(err, token) {
              createdRecord.token = token;
              createdRecord.save()
                .then(function(savedUser) {
                  return done(null, savedUser);
                });
            });
          });
      });
    }
  });
}

function processLoginCallback(email, password, done) {
  User.findOne({
    where: {
      'email': email
    }
  })
  .then(function(user) {
    if (!user) {
      return done(null, false, 'No user name found with provided email');
    }
    bcrypt.compare(password, user.password, function(err, result) {
      user.password = undefined;
      if (err) {
        return done(null, false, err);
      } else if (!result) {
        return done(null, false, 'Invalid Password for provided email');
      } else {
        jwt.sign({
          id: user.id
        }, config.jwtSecret, {
          expiresIn: config.jwtExpiration
        }, function(err, token) {
          user.token = token;
          user.save()
            .then(function(savedRecord) {
              return done(null, savedRecord);
            });
        });
      }
    });
  });
}

module.exports = function(passport) {
  initializeSerialization(passport);
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
  }, processSignupCallback));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, processLoginCallback));
};
