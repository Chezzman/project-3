var Twitter = require('twitter');
// var Tweet = require('../models/tweet.model.js');



var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function showAllTweets(req, res){

  console.log('something something dark side');

  client.get('search/tweets.json?q=donald%20trump&src=typd', {q: 'angularjs'},function(error, tweets, response) {
    if(error){
      console.log('error', error);
      res.status(500).json({ message: 'Could not get tweets' });
    }

    //res.status(200).json({ message: 'the tewta coming though' });
    res.json(tweets); // Tweet body.
    console.log('REEEEPPPOONSSEEE PARRRRTTTT!!!!',response);  // Raw response object.
    //res.json(tweets);
  });
     // JSON.parse convertsstring into JSON
    // searchResultsJson = JSON.parse(body);
    // res.json(searchResultsJson);
  // });
//}
// function getSearchParams(req, res){
//   client.get('search/tweets.json?q=&geocode=-22.912214,-43.230182,1km&lang=pt&result_type=recent', function(error, tweets, response){
//     if(error){
//       res.status(500).json({ message: 'Could not get geo tweet'});
//     }
//     console.log(tweets);  // Tweet body.
//     console.log(response);  // Raw response object.
//   });
}

// function getAll(req, res) {
//   client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
//     if (!error) {
//
//       console.log('tweets: ', tweets);
//       console.log('response: ', response);
//       res.status(200).render('/', { title: 'Express', tweets: tweets });
//
//     }    else {
//       console.log('error: ', error);
//       res.status(500).json({ error: error });
//     }
//   });
// }


  // Tweet.find(function(error, data) {
  //   if (error) return response.json({message: 'Could not find any criminal'});
  //   response.json(data);
  //   console.log('something:', data, error);
  // });
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline



module.exports = {
  getTweets: showAllTweets
};
