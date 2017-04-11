var express = require('express');
var router = express.Router();

var tweetController = require('../controllers/tweet.controller');

router.post('/api/twittersearchresults', tweetController.getTweets);

module.exports = router;
