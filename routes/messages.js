var express = require('express');
var router = express.Router();

// GET message listing
router.get('/messages', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
