var express = require('express');
var router = express.Router();
var models = require('../models/');

// GET /message listing
router.get('/messages', function(req, res, next) {
  models.messages.findAll({
    include: [models.users]
  })
  .then(function(messages) {
    res.json({
      messages: messages
    });
  });
});

// GET /messages/new
// create message
router.get('/new', function(req, res, next) {
  res.render('new_message', { message: message });
});

router.post('/new', function(req, res, next) {
  models.users.findOne().then(function(user) {
    userId: user.id,
    content: req.body.body
  }).then(function saved(message) {
    res.json({
      message: message
    });
  });
});

module.exports = router;
