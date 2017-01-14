var express = require('express');
var router = express.Router();
const models = require('../models');
const Message = require('../models').message;

// GET message listing
router.get('/chat', function(req, res, next) {
  Message.findById(req.params.id, {
    order: [
      [{model: Message}, 'createdAt']
    ]
  })
  .then((message) => {
    res.json({ message: message });
  })
  .catch((error) => {
    next(error);
  });
});

// TODO: create endpoint to POST new messages

// Post new message
router.post('/chat/new', function(req, res) {
  Message.create({
    content: req.body.text,
    userId: request.params.id
  })
  .then((message) => {
    res.json(message);
  });
});

module.exports = router;
