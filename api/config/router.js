var express = require('express');
var router = express.Router();

var tweetController = require('../controllers/tweet.controller.js');
router.route('/api/tweets/search/')
   .get(tweetController.search);
//   .post(userController.createUser);
//
// router.route('/user/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.removeUser);

module.exports = router;


//get User tweets
//get Geolocation

//get google api

//post to Geolocation from twitter post to Google api

//drop users tweets
