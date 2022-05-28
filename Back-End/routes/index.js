var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/moo', function (request, response, next) {
  response
    .status(200)
    .send('mooOoOOoOOOoooo');
});

router.get('/potato', function (request, response, next) {
  response
    .status(200)
    .send('(: :) <- Dubiously a potato..?');
});

module.exports = router;
