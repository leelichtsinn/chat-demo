const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../config/config');

const User = require('../models/').users;

const opts = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.jwtSecret
};

module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, function(jwtPayload, done) {
        User.findById(jwtPayload.id)
        .then(function(user) {
            if (user) {
                // user was found successfully
                done(null, user);
            } else {
                // no user was found for that id
                done(null, false, 'No user was found for the token provided');
            }
        });
    }));
};
