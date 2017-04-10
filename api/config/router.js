var express = require('express');
var router = express.Router();

var tweetController = require('../controllers/tweet.controller');

router.post('/api/twittersearchresults', tweetController.getTweets);

module.exports = router;


//get User tweets
//get Geolocation

//get google api

//post to Geolocation from twitter post to Google api

//drop users tweets
