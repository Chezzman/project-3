var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  name: String,
  location: String,
  tweet: String
});

module.exports = mongoose.model('Tweet', tweetSchema);



module.exports = this;
