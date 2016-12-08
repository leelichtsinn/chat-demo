console.log('LocalStrategy...');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

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
      console.log('user existed done');
      // user exist call done() passing null and false
      return done(null, false, 'That email is already taken');
    } else {
      // create the new user
      const userToCreate = getUserParams(req);

      bcrypt.hash(userToCreate.password, 10, function(err, hash) {
        userToCreate.password = hash;

        console.log('created user');
        User.create(userToCreate)
        .then(function(createdRecord) {
          console.log('created user', createdRecord.json);
          // once user is created call done with the created user
          createdRecord.password = undefined;
          return done(null, createdRecord);
        });
      });
    }
  });
}

module.exports = function(passport) {
  initializeSerialization(passport);

  passport.use('local-signup', new LocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, processSignupCallback));
};
