var express = require('express');
var router = express.Router();

// GET message listing
router.get('/messages', function(req, res, next) {
  res.send('respond with a resource');
});

// TODO: create endpoint to POST new messages

module.exports = router;
