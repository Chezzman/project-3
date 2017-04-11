var Twitter = require('twitter');


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

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
    res.json(tweets);
  });
}



module.exports = {
  getTweets: showAllTweets
};
