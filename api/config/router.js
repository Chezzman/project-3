var express = require('express');
var router = express.Router();

var tweetController = require('../controllers/tweet.controller');

router.post('/api/twittersearchresults', tweetController.getTweets);
//   .post(userController.createUser);
//
// router.route('/user/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.removeUser);
//router.get('/api/tweets/search', tweetController.search);
module.exports = router;


//get User tweets
//get Geolocation

//get google api

//post to Geolocation from twitter post to Google api

//drop users tweets
