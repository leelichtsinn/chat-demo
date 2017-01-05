const express = require('express');
const router = express.Router();
const models = require('../models');

const User = require('../models').user;

router.get('profile/:id', function(req, res, next) {
  User.findById(req.params.id)
  .then((user) => {
    res.json({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id
    })
  });
});

module.exports = router;
