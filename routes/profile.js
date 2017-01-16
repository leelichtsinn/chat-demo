const express = require('express');
const router = express.Router();
const models = require('../models');

// const User = require('../models').user;
//
// router.get('profile/:id', function(req, res, next) {
//   User.findById(req.params.id)
//   .then((user) => {
//     res.json({
//       email: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       id: user.id
//     })
//   });
// });
//
// module.exports = router;

// GET /api/protected/profile/:id
router.get('/profile/:id', function(req, res, next) {
  // req.user.id := Number, req.params.id := string, so test for soft equality
  // tell eslint to ignore strict equality rule below
  // see
  http://eslint.org/docs/2.0.0/user-guide/configuring#configuring-rules
  /*eslint eqeqeq:0, curly: 2*/
  if (req.params.is != req.user.id) {
    return next(new Error('You do not have access to this information'));
  }
  models.users.findById(req.user.id)
  .then(function(user) {
    res.json({
      email: user.email,
      id: user.id
    });
  });
});

module.exports = router;
