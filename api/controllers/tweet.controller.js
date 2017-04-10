var Twitter = require('twitter');

//Docs of using twitter npm
//https://github.com/desmondmorris/node-twitter/tree/master/examples

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//SEARCH FOR PERSON OR HASH TAG
//https://dev.twitter.com/rest/public/search
//https://dev.twitter.com/rest/reference/get/search/tweets
function showAllTweets(req, res){
  var params = {
    q: req.body.query,
    count: 10
  
  };
  client.get('search/tweets', params, function(error, tweets, response) {
    if(error){
      console.log('error', error);
      res.status(500).json({ message: 'Could not get tweets' });
    }

    //GET TWEETS SPECIFIC DATA
    res.json(tweets);

    //SEND GEO DATA TO GOOGLE MAPS

  });
}

//REPSONDE WITH USERS RECENT TWEETS WITH GEO COORDS
//     //https://dev.twitter.com/rest/reference/get/users/lookup
//     var object = {
//       user_id: tweets.name,
//         location: tweets.places.location,
//         //geo discretion
//         //https://dev.twitter.com/overview/terms/geo-developer-guidelines
//       geoPosition: tweets.places.coordinates,
//       //getting coords http://stackoverflow.com/questions/36440321/twitter-api-tweet-location
//
//       //further information needed for twittersearchresults
//       //https://dev.twitter.com/overview/api/tweets
//       tweet: tweets.text,
//       id_str: tweets.id_str
//     }
//     client.get('statuses/update', params, function(error, tweets, response) {
//         if(error){
//           console.log('error', error);
//           res.status(500).json({ message: 'Could not get tweets' });
//         }
//
//
// //only push through the object information from json to angular.
// //https://dev.twitter.com/rest/reference/get/geo/search
//         json.parse.object = JSON(tweets)
//
//     //



module.exports = {
  getTweets: showAllTweets
};
