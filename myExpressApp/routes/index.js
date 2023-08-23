var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', abcV: process.env.ABC, ACTIVATE_URL:process.env.ACTIVATE_URL, RESET_URL:process.env.RESET_URL, SENSATIVE_OFFSET_FLAG:process.env.SENSATIVE_OFFSET_FLAG, NEWDF:process.env.NEWDF  });
});

module.exports = router;
